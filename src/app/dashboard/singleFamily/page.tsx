'use client'
import React, { useState } from 'react'
import {
    DndContext,
} from '@dnd-kit/core';
import { Button, Input, } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ConfirmFamilyDTO, PendingFamiliesApi, SemiConfirmedFamiliesApi, UpdatePendingFamilyDto, User, UserApi } from '@/Api'
import { useRouter, useSearchParams } from 'next/navigation'
import { MdEditDocument } from 'react-icons/md';
import toast from 'react-hot-toast';
import FullScreenLoader from '@/app';
import DropComponent from './DropComponent';
import EditFamilyData from './EditFamilyData';
import DraggableItem from '../DraggableItem';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";
import UserDataModal from './UserDataModal';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import UserHandleModal from './UserHandleModal';

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')
    const [selectedFamily, setSelectedFamily] = useState<any>(null)
    const router = useRouter()
    const [pendingUsers, setPendingUsers] = useState<any>([])
    const queryClient = useQueryClient()


    const { isLoading } = useQuery({
        queryKey: [`pendingFamilies${id}`],
        queryFn: async () => {
            if (!id) return
            const result = await new PendingFamiliesApi(AXIOS_CONFIG).getSinglePendingFamily(id)
            setSelectedFamily(result?.data)
            return result?.data
        },
    })

    const { mutate } = useMutation({
        mutationKey: ['pendingUsers'],
        mutationFn: async () => {
            const { data } = await new UserApi(AXIOS_CONFIG).findMatchingUsers({ users: selectedFamily?.individuals })
            return data
        },
        onSuccess: (data) => {
            setPendingUsers(data)
        }
    })

    React.useEffect(() => { selectedFamily && mutate() }, [selectedFamily])

    type DraggableProps = {
        parentId: string;
        childId: string;
    };


    function removeFamilyMember(memberFullName: string) {
        setSelectedFamily((old: any) => {
            const filtered = old?.individuals.filter((item: any) => item?.firstname + item?.lastname !== memberFullName)
            return { ...old, individuals: filtered }
        })
    }

    const [isDragging, setIsDragging] = useState(false);
    const [parent, setParent] = useState<DraggableProps[] | []>([]);


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

    const { mutate: confirmFamilyy, isPending } = useMutation({
        mutationKey: ['confirmFamily'],
        mutationFn: async () => {
            const body: ConfirmFamilyDTO = {
                id: selectedFamily.id,
                familyLastName: selectedFamily?.familyLastName,
                familyAddress: selectedFamily?.familyAddress,
                temporaryFamilyId: selectedFamily?.familyId,
                individuals: selectedFamily?.individuals.map((individual: any) => ({
                    userId: parent?.filter((item) => item.parentId === individual?.firstname + individual?.lastname)[0]?.childId,
                    pendingUser: {
                        ...individual
                    }
                }))
            }
            const { data } = await new SemiConfirmedFamiliesApi(AXIOS_CONFIG).semiConfirmFamily(body)
            return data
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family semi confirmed successfully')
            router.back()
        }
    })

    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedIndividual, setSelectedIndividual] = useState<any>(null)
    type editUser = {
        familyId: string;
        studentId: number;
        body: UpdatePendingFamilyDto;
    }

    const { mutate: EditPendingFamilyMember, isPending: isEditing } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (body: editUser) => {
            const data = await new PendingFamiliesApi(AXIOS_CONFIG).updatePendingFamilyMember(body.body, selectedFamily?.id)
            return data.data
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family member edited successfully')
            setIsOpen(false)
            queryClient.invalidateQueries({ queryKey: [`pendingFamilies${id}`] })
            setIsEditModalOpen(false)
        }
    })


    type editFamilyData = {
        familyId: string;
        body: UpdatePendingFamilyDto;
    }


    const { mutate: EditPendingFamily, isPending: isEditiing2 } = useMutation({
        mutationKey: ['EditPendingFamily'],
        mutationFn: async (body: editFamilyData) => {
            const result = await new PendingFamiliesApi(AXIOS_CONFIG).updatePendingFamilyLastNameAndAddress(body.body, selectedFamily?.id)
            return result?.data
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family data edited successfully')
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`pendingFamilies${id}`] })
        }
    })

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

    function addUserToPendingUsers(user: User) {
        setPendingUsers((old: any) => old?.concat(user))
        setUserDataModal(false)
    }



    function addIndividualManually(idv: any) {
        setSelectedFamily((old: any) => {
            const filtered = old?.individuals.filter((item: any) => item?.firstname + item?.lastname !== idv?.firstname + idv?.lastname)
            return { ...old, individuals: [...filtered, idv] }
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
            <div className='flex flex-col gap-y-3 border border-gray-500 p-3 rounded-lg relative' >
                <p className='font-semibold text-3xl'>Family last name: {selectedFamily?.familyLastName}</p>
                <p className='font-semibold text-xl'>{selectedFamily?.familyAddress}</p>
                <p className='font-semibold text-xl'>Family ID: #{selectedFamily?.familyId}</p>
                <Button
                    className='absolute top-0 right-0 m-3'
                    color='primary'
                    onClick={() => setIsOpen(true)}
                >

                    Edit Family Name and Address
                </Button>
            </div>

            {(isLoading) &&
                <FullScreenLoader />
            }

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



            <EditFamilyData
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                familyData={{ familyLastName: selectedFamily?.familyLastName, familyAddress: selectedFamily?.familyAddress, familyId: selectedFamily?.familyId }}
                EditPendingFamily={EditPendingFamily}
            />


            {isSuccess &&
                <UserDataModal
                    isOpen={userDataModalState}
                    setIsOpen={setUserDataModal}
                    userData={singleSearchedUser}
                    onConfirm={(user: User) => addUserToPendingUsers(user)}
                />
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

            <DndContext
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                onDragCancel={() => setIsDragging(false)}
            >

                <div className='grid grid-cols-3 gap-5 mt-5' >
                    {selectedFamily?.individuals?.map((individual: any) =>
                        <DropComponent
                            individual={individual}
                            removeFamilyMember={removeFamilyMember}
                            parent={parent}
                            pendingUsers={pendingUsers}
                            removeChild={removeChild}
                            handleOpenEditModal={handleOpenEditModal}
                            isDragging={isDragging}
                        />
                    )}
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




