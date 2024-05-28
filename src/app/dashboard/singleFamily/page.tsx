'use client'
import React, { useState } from 'react'
import {
    DndContext,
} from '@dnd-kit/core';
import { Button, Input, } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ConfirmFamilyDTO, UpdatePendingUserDto, User } from '@/Api'
import { useRouter, useSearchParams } from 'next/navigation'
import { MdEditDocument } from 'react-icons/md';
import { apiEditPendingFamilyAddress, apiEditPendingFamilyMember, apiGetFamilies, apiGetMatchingFamilyUsers, apiGetSingleUser, apisearchUsers, apiSemiConfirmFamily } from '@/components/utils/HiddenRequests';
import toast from 'react-hot-toast';
import FullScreenLoader from '@/app';
import DropComponent from './DropComponent';
import EditFamilyData from './EditFamilyData';
import EditFamilyMemberModal from './EditFamilyMemberModal';
import DraggableItem from '../DraggableItem';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, } from "@nextui-org/react";
import UserDataModal from './UserDataModal';

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')
    const [selectedFamily, setSelectedFamily] = useState<any>(null)
    const router = useRouter()
    const [pendingUsers, setPendingUsers] = useState<any>([])
    const queryClient = useQueryClient()

    const { isLoading } = useQuery({
        queryKey: [`pendingFamilies${id}`],
        queryFn: async () => {
            const { result } = await apiGetFamilies()
            setSelectedFamily(result?.filter((item: any) => item?.familyId == id)[0])
            return result?.filter((item: any) => item?.familyId == id)[0]
        },
    })

    const { mutate } = useMutation({
        mutationKey: ['pendingUsers'],
        mutationFn: async () => {
            const { result } = await apiGetMatchingFamilyUsers({ users: selectedFamily?.individuals })
            return result
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
                id:"",
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
            const { result } = await apiSemiConfirmFamily(body)
            return result
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family confirmed & created successfully')
            router.back()
        }
    })

    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedIndividual, setSelectedIndividual] = useState<any>(null)
    type editUser = {
        familyId: string;
        studentId: number;
        body: UpdatePendingUserDto;
    }

    const { mutate: EditPendingFamilyMember, isPending: isEditing } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (body: editUser) => {
            const { result } = await apiEditPendingFamilyMember(body.familyId, body.studentId, body.body)
            return result
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family member edited successfully')
            setIsOpen(false)
            queryClient.invalidateQueries({ queryKey: [`pendingFamilies${id}`] })
        }
    })


    type editFamilyData = {
        familyId: string;
        body: UpdatePendingUserDto;
    }


    const { mutate: EditPendingFamily, isPending: isEditiing2 } = useMutation({
        mutationKey: ['EditPendingFamily'],
        mutationFn: async (body: editFamilyData) => {
            const { result } = await apiEditPendingFamilyAddress(body?.familyId, body.body)
            return result
        },
        onError: (error) => console.log(error),
        onSuccess: () => {
            toast.success('Family data edited successfully')
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`pendingFamilies${id}`] })
        }
    })



    function handleOpenEditModal(individual: any) {
        setSelectedIndividual(individual)
        setIsEditModalOpen(true)
    }

    const { mutate: handleSearch, isPending: isSearching, data: users } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (searchTerm: string) => {
            const { result } = await apisearchUsers(searchTerm)
            return result
        }
    })

    const [userDataModalState, setUserDataModal] = useState(false)

    const { mutate: getSingleUser, data: singleSearchedUser, isPending: isGettingSingleUser } = useMutation({
        mutationKey: ['EditPendingFamilyMember'],
        mutationFn: async (userId: string) => {
            const { result } = await apiGetSingleUser(userId)
            return result
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



    return (
        <div>
            <div className='flex flex-col gap-y-3 border border-gray-500 p-3 rounded-lg relative' >
                <p className='font-semibold text-3xl'>Family last name: {selectedFamily?.familyLastName}</p>
                <p className='font-semibold text-xl'>{selectedFamily?.familyAddress}</p>
                <p className='font-semibold text-xl'>Family ID: #{selectedFamily?.familyId}</p>
                <Button
                    isIconOnly
                    className='absolute top-0 right-0 m-3'
                    onClick={() => setIsOpen(true)}
                >

                    <MdEditDocument size={30} />
                </Button>
            </div>

            {(isLoading) &&
                <FullScreenLoader />
            }

            <EditFamilyData
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                familyData={{ familyLastName: selectedFamily?.familyLastName, familyAddress: selectedFamily?.familyAddress, familyId: selectedFamily?.familyId }}
                EditPendingFamily={EditPendingFamily}
            />


            <EditFamilyMemberModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedIndividual={selectedIndividual}
                EditPendingFamilyMember={EditPendingFamilyMember}
            />

            <UserDataModal
                isOpen={userDataModalState}
                setIsOpen={setUserDataModal}
                userData={singleSearchedUser}
                onConfirm={(user: User) => addUserToPendingUsers(user)}
            />

            <div className='flex items-center justify-center w-[50%] mx-auto my-6'>

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
                        {users?.map((item: any) => (
                            <DropdownItem
                                value={item?.id}
                                key={item?.id}
                                onClick={() => getSingleUser(item?.id)}
                            >
                                {item?.firstname} {item?.lastname}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
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




