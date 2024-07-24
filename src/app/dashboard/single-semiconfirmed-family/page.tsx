'use client'
import React, { useState } from 'react'
import {
    Droppable,
} from '../../../components'
import {
    DndContext,
    useDraggable,
} from '@dnd-kit/core';
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import { CSS } from '@dnd-kit/utilities';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ConfirmFamilyDTO, UpdateSemiConfirmedFamilyData, UpdateSemiConfirmedUser, User, UserApi } from '@/Api'
import { useRouter, useSearchParams } from 'next/navigation'
import { MdDelete, MdDragIndicator, MdEdit, MdEditDocument } from 'react-icons/md';
import toast from 'react-hot-toast';
import FullScreenLoader from '@/app';
import EditFamilyData from './EditFamilyData';
import UserDataModal from '../singleFamily/UserDataModal';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import UserHandleModal from '../singleFamily/UserHandleModal';

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')
    const [selectedFamily, setSelectedFamily] = useState<any>(null)
    const router = useRouter()
    const [pendingUsers, setPendingUsers] = useState<any>([])
    const [parent, setParent] = useState<DraggableProps[] | []>([]);


    const { isLoading } = useQuery({
        queryKey: [`pendingFamilies${id}`],
        queryFn: async () => {
            const { data: result } = await new UserApi(AXIOS_CONFIG).getSemiConfirmedFamilies()
            setSelectedFamily(result?.filter((item: any) => item?.id == id)[0])
            setParent(result?.filter((item: any) => item?.id == id)[0]?.individuals?.filter((itm: any) => itm?.userId?.id)?.map((item: any) => ({ parentId: item?.pendingUser?.firstname + item?.pendingUser?.lastname, childId: item?.userId?.id })))
            setPendingUsers(result?.filter((item: any) => item?.id == id)[0]?.individuals?.filter((itm: any) => itm?.userId?.id).map((item: any) => item?.userId))
            return result?.filter((item: any) => item?.familyId == id)[0]
        },
    })

    const { mutate: UpdateSemiConfirmedFamily } = useMutation({
        mutationKey: ['UpdateSemiConfirmedFamily'],
        mutationFn: async (body: ConfirmFamilyDTO) => {
            console.log(id, body)
            await new UserApi(AXIOS_CONFIG).updateSemiConfirmedFamily(body, id || "")
            const result = await new UserApi(AXIOS_CONFIG).updateSemiConfirmedFamily(body, id || "")
            return result?.data
        },
    })


    type DraggableProps = {
        parentId: string;
        childId: string;
    };


    function removeFamilyMember(memberFullName: string) {
        setSelectedFamily((old: any) => {
            const filtered = old?.individuals?.filter((item: any) => item?.pendingUser?.firstname + item?.pendingUser?.lastname !== memberFullName)
            return { ...old, individuals: filtered }
        })
    }

    const [isDragging, setIsDragging] = useState(false);


    function handleDragEnd(event: any) {
        const { active, over } = event;
        if (active?.id !== over?.id && over?.id && active?.id) {

            setParent(old => {
                const filtered = old.filter(item => item.childId !== active.id && item.parentId !== over.id);
                return [...filtered, { parentId: over.id, childId: active.id }];
            })

            setIsDragging(false);
        }
    }

    function removeChild(childId: string) {
        setParent((old) => old.filter((item) => item.childId !== childId));
    }

    function removeChild2(userId: string) {
        setSelectedFamily((old: any) => {
            const filtered = old?.individuals?.filter((item: any) => item?.userId?.id !== userId)
            console.log(filtered)
            return { ...old, individuals: filtered }
        })
    }


    const { mutate: confirmFamilyy, isPending } = useMutation({
        mutationKey: ['confirmFamily'],
        mutationFn: async () => {
            const body: ConfirmFamilyDTO = {
                id: selectedFamily?.id,
                familyLastName: selectedFamily?.familyLastName,
                familyAddress: selectedFamily?.familyAddress,
                temporaryFamilyId: selectedFamily?.familyId,
                individuals: selectedFamily?.individuals.map((individual: any) => ({
                    userId: parent?.filter((item) => item.parentId === individual?.pendingUser?.firstname + individual?.pendingUser?.lastname)[0]?.childId || individual?.userId?.id,
                    pendingUser: {
                        ...individual?.pendingUser
                    }
                }))
            }
            const result = await new UserApi(AXIOS_CONFIG).confirmFamily(body, selectedFamily?.id)
            return result?.data
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family confirmed & created successfully')
            router.back()
        }
    })


    type editUser = {
        familyId: string;
        studentId: number;
        body: UpdateSemiConfirmedUser;
    }
    const queryClient = useQueryClient()
    const { mutate: EditPendingFamilyMember } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (body: editUser) => {
            const result = await new UserApi(AXIOS_CONFIG).editAUserInASemiConfirmedFamily(body.body, selectedFamily?.id, body?.studentId)
            return result?.data
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family member edited successfully')
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`pendingFamilies${id}`] })
        }
    })

    type editFamilyData = {
        familyId: string;
        body: UpdateSemiConfirmedFamilyData;
    }


    const { mutate: EditPendingFamily } = useMutation({
        mutationKey: ['EditPendingFamily'],
        mutationFn: async (body: editFamilyData) => {
            const result = await new UserApi(AXIOS_CONFIG).updateFamilyLastNameOrAddress(body.body, body?.familyId)
            return result?.data
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family data edited successfully')
            router.back()
        }
    })

    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedIndividual, setSelectedIndividual] = useState<any>(null)

    const [modalType, setModalType] = useState('edit')


    function handleOpenEditModal(individual: any) {
        setSelectedIndividual(individual)
        setModalType('edit')
        setIsEditModalOpen(true)
    }


    const { mutate: handleSearch, isPending: isSearching, data: users } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (searchTerm: string) => {
            const result = await new UserApi(AXIOS_CONFIG).searchUsers(searchTerm)
            return result?.data
        }
    })

    const [userDataModalState, setUserDataModal] = useState(false)

    const { mutate: getSingleUser, data: singleSearchedUser, isPending: isGettingSingleUser, isSuccess } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (userId: string) => {
            const result = await new UserApi(AXIOS_CONFIG).getSingleUser(userId)
            return result?.data
        },
        onSuccess: () => {
            setUserDataModal(true)
        }
    })


    const [searchBarValue, setSearchBarValue] = useState('')

    const addFamilyMember = (user: User) => {
        setPendingUsers((old: any) => old.concat(user))
        setUserDataModal(false)
    }


    function addIndividualManually(idv: any) {
        setSelectedFamily((old: any) => {
            return { ...old, individuals: [...old?.individuals, { pendingUser: { ...idv } }] }
        })
        setIsEditModalOpen(false)
    }


    React.useEffect(() => {
        if (!isEditModalOpen && selectedIndividual) {
            setSelectedIndividual(null)
        }
    }, [isEditModalOpen])

    return (
        <div>
            <div className='flex flex-col gap-y-3 border-2 border-gray-500 p-3 rounded-lg relative' >
                <p className='font-bold text-3xl'>Family last name: {selectedFamily?.familyLastName}</p>
                <p className='font-bold text-xl'>{selectedFamily?.familyAddress}</p>
                <p className='font-bold text-xl'>Family ID: #{selectedFamily?.familyId}</p>

                <Button
                    isIconOnly
                    className='absolute top-0 right-0 m-3'
                    onClick={() => setIsOpen(true)}
                >
                    <MdEditDocument />
                </Button>
            </div>

            {(isLoading) &&
                <FullScreenLoader />
            }
            <div className='flex flex-col mt-5 space-y-1'>
                <p className='font-bold text-xl'>Important Notes:</p>
                <p>The user boxes at the top contain data from the previous database, which we are importing.</p>
                <p>The user boxes at the bottom contain data from the current database to which we are migrating.</p>
                <p>To migrate user data, drag and drop users from the bottom boxes to the top boxes.</p>
                <p>Note: If there are discrepancies between the old and new databases, the data from the old database will overwrite the data in the new database.</p>
                <p>This means that information in the larger box (top box) will replace the information in the smaller box (bottom box).</p>
                <p>If a user does not have an edit button, this is normal. You can edit their details after creating the family.</p>
                <p>If there is a user with no matchings .. it will be created once confirmed </p>
                <p className='text-red-500 font-semibold'>
                    If there are duplicates or incorrect data, please leave them as is until reviewed by an administrator.
                </p>
            </div>

            <div className='flex items-center justify-center w-[50%] mx-auto my-6 relative'>

                <Input
                    label="Search users"
                    variant="bordered"
                    placeholder="you can search with name, email or phone number"
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    value={searchBarValue}
                />
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className={`${isSearching ? "-ml-40" : "-ml-32"} `}
                            variant="bordered"
                            isLoading={isSearching || isGettingSingleUser}
                            disabled={isSearching || !searchBarValue || isGettingSingleUser}
                            onClick={(e) => handleSearch(searchBarValue)}
                        >
                            Start search
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        className='max-h-[150px] overflow-y-scroll w-[300px]' aria-label="Static Actions">
                        {(users as User[])?.map((item: User) => (
                            <DropdownItem
                                value={item?.id?.toString()}
                                key={item?.id?.toString()}
                                onClick={() => getSingleUser(item?.id?.toString())}
                            >
                                {item?.firstname} {item?.lastname}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Button
                    onClick={() => {
                        setIsEditModalOpen(true)
                        setModalType('add')
                    }}
                    className='absolute right-[-120px]'
                >
                    Create User
                </Button>

            </div>

            {isSuccess &&
                <UserDataModal
                    isOpen={userDataModalState}
                    setIsOpen={setUserDataModal}
                    userData={singleSearchedUser}
                    onConfirm={(user: User) => {
                        addFamilyMember(user)
                    }}
                />
            }
            <EditFamilyData
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                familyData={{
                    familyLastName: selectedFamily?.familyLastName,
                    familyAddress: selectedFamily?.familyAddress,
                    familyId: selectedFamily?.id
                }}
                EditPendingFamily={EditPendingFamily}
            />

            <UserHandleModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedIndividual={selectedIndividual}
                EditPendingFamilyMember={(data) => {
                    modalType === 'add' ?
                        addIndividualManually({
                            ...data
                        })
                        :
                        EditPendingFamilyMember(
                            {
                                familyId: data?.familyId,
                                studentId: data?.studentId,
                                body: {
                                    ...data
                                }
                            }
                        )
                }}
            />



            {/* 
            <EditFamilyMemberModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedIndividual={selectedIndividual}
                EditPendingFamilyMember={EditPendingFamilyMember}
            /> */}

            <DndContext
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                onDragCancel={() => setIsDragging(false)}
            >
                <div className='grid grid-cols-3 gap-5 mt-5' >
                    {selectedFamily?.individuals?.map((individual: any) => (
                        <Droppable
                            key={individual?.pendingUser?.firstname + individual?.pendingUser?.lastname} id={individual?.pendingUser?.firstname + individual?.pendingUser?.lastname} dragging={isDragging}>
                            <div className='flex flex-col gap-y-1 p-4 relative w-full h-full '>
                                <div className='flex flex-row gap-x-1 items-center absolute top-0 right-0 m-3' >
                                    {parent?.filter((item) => item.parentId === individual?.pendingUser?.firstname + individual?.pendingUser?.lastname)?.length === 0 &&
                                        <Button
                                            size='sm'
                                            isIconOnly
                                            color='danger'
                                            onClick={() => removeFamilyMember(individual?.pendingUser?.firstname + individual?.pendingUser?.lastname)}
                                        >
                                            <MdDelete size={28} />
                                        </Button>
                                    }
                                    {individual?.pendingUser?.studentId &&
                                        <Button
                                            size='sm'
                                            onClick={() => {
                                                handleOpenEditModal(individual?.pendingUser)
                                            }}
                                            isIconOnly
                                        >
                                            <MdEdit size={23} />
                                        </Button>
                                    }
                                </div>
                                <div className='flex flex-col items-start self-start' >
                                    <p>Name: {individual?.pendingUser?.firstname} {individual?.pendingUser?.lastname} </p>
                                    <p>Gender: {individual?.pendingUser?.gender}</p>
                                    <p>familyMember: {individual?.pendingUser?.familyMember}</p>
                                    <p>Email: {individual?.pendingUser?.email}</p>
                                    <p>Date of birth: {individual?.pendingUser?.dateOfBirth}</p>
                                    <p>Grade: {individual?.pendingUser?.grade}</p>
                                </div>
                                {/* 
                                {individual?.userId &&
                                    <DraggableItem
                                        user={individual?.userId}
                                        removeChild={removeChild}
                                        isInList={true}
                                    >
                                    </DraggableItem>
                                } */}

                                {parent?.filter((item: any) => item.parentId === individual?.pendingUser?.firstname + individual?.pendingUser?.lastname).map((itemm: any) =>
                                    <DraggableItem
                                        key={itemm?.childId}
                                        user={pendingUsers?.filter((user: User) => user?.id === itemm?.childId)[0]}
                                        removeChild={removeChild}
                                        isInList={true}
                                    >
                                    </DraggableItem>
                                )}


                            </div>
                        </Droppable>
                    ))}
                </div>


                <div className='grid grid-cols-4 gap-5 mb-12 mt-5' >
                    {pendingUsers?.filter((user: User) => !parent.some((item) => item.childId === user?.id?.toString()))
                        .map((user: User) => (
                            <DraggableItem
                                key={user?.id?.toString()}
                                user={user}
                                removeChild={removeChild}
                                isInList={false}
                            >
                            </DraggableItem>
                        ))
                    }
                </div>


            </DndContext >

            <Button isLoading={isPending} className='w-full bg-[#66A3D0] mb-12' color='primary' onClick={() => confirmFamilyy()}>
                Confirm
            </Button>
        </div >
    )
}

export default SingleFamilyEdit




type props = {
    user?: any;
    removeChild?: (childId: string) => void;
    isInList?: boolean;
}
function DraggableItem({ user, removeChild, isInList }: props) {
    const { isDragging, setNodeRef, listeners, transform, attributes, } = useDraggable({
        id: user?.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? '100' : 'auto',
        opacity: isDragging ? 0.7 : 1
    };

    return (
        <div
            ref={setNodeRef}
            style={style as React.CSSProperties}
            {...listeners}
            className='bg-white w-[300px] min-h-[300px] h-fit border-2 rounded-lg border-gray400 flex relative flex-col text-left   px-3 pt-2'>
            <div className='flex flex-row gap-x-2 items-center absolute top-0 right-0 m-3'>
                <Button
                    color='primary'
                    size='sm'
                    isIconOnly
                >
                    <button
                        {...attributes}
                        {...listeners}
                    >
                        <MdDragIndicator size={28} />
                    </button>
                </Button>
                {isInList &&
                    <Button
                        size='sm'
                        isIconOnly
                        color='danger'
                        onClick={() => removeChild && removeChild(user?.id)}
                    >
                        <MdDelete size={28} />
                    </Button>
                }
            </div>
            <div className='flex flex-row gap-x-2 items-center -ml-1'>
                <Avatar
                    src={user?.avatar}
                    alt='avatar'
                    size='lg'
                    className='mb-2'
                    name={user?.firstname + ' ' + user?.lastname}
                />
                <div className='flex flex-col ' >
                    <p className='font-semibold'>{user?.firstname} {user?.lastname}</p>
                    <p >{user?.phoneNumber}</p>
                </div>
            </div>
            {user?.email &&
                <p >Email: {user?.email}</p>
            }
            {user?.address &&
                <p >Address: {user?.address}</p>}
            {user?.dateOfBirth && <p >Date of birth: {new Date(user?.dateOfBirth)?.toLocaleDateString()}</p>}
            {user?.grade &&
                <p >Grade: {user?.grade}</p>}
            {user?.familyMember &&
                <p >familyMember: {user?.familyMember}</p>}
        </div>
    );
}
