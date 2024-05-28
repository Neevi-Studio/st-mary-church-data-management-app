'use client'
import React, { use, useState } from 'react'

import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { MdDelete, MdDragIndicator, MdEdit, MdEditDocument } from 'react-icons/md';
import { apiConfirmFamily, apiEditFamilyAddressAndLastName, apiEditFamilyMember, apiGetFamilies, apiGetMatchingFamilyUsers, apiGetSemiConfirmedFamilies, apiGetSingleConfirmedFamily, apiGetSingleUser, apisearchUsers, apiSemiConfirmFamily, apiUpdateFamily, apiUpdateUser } from '@/components/utils/HiddenRequests';
import toast from 'react-hot-toast';
import FullScreenLoader from '@/app';
import BeforeDeleteModal from '../BeforeDeleteModal';
import { Family, UpdateFamilyDto, UpdateUserDto, User } from '@/Api';
import EditFamilyData from './EditFamilyData';
import EditFamilyMemberModal from './EditFamilyMemberModal';
import UserDataModal from '../singleFamily/UserDataModal';
// import EditFamilyData from './EditFamilyData';
// import EditFamilyMemberModal from './EditFamilyMemberModal';

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')
    const [selectedFamily, setSelectedFamily] = useState<any>(null)
    const [isOpen, setIsOpen] = useState(false)
    const queryClient = useQueryClient()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const { isLoading } = useQuery({
        queryKey: [`apiGetSingleConfirmedFamily${id}`],
        queryFn: async () => {
            const { result } = await apiGetSingleConfirmedFamily(id || '')
            setSelectedFamily(result)
            return result
        },
    })

    const [selectedUser, setSelectedUser] = useState<any>(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const toggleDeleteModal = (user?: User) => {
        setIsDeleteModalOpen(!isDeleteModalOpen)
        if (user) {
            setSelectedUser(user)
        } else {
            setSelectedUser(null)
        }
    }

    const { mutate } = useMutation({
        mutationKey: ['apiEditFamilyMember'],
        mutationFn: async (body?: UpdateFamilyDto) => {
            await apiUpdateFamily(id || "", body || selectedFamily)
        },
        onSuccess: () => {
            setIsOpen(false)
            queryClient.invalidateQueries({ queryKey: [`apiGetSingleConfirmedFamily${id}`] })
        }
    })

    const removeFamilyMember = (userId: string) => {
        const newFamilyMembers = selectedFamily?.individuals?.filter((member: any) => member?.id !== userId)
        setSelectedFamily({ ...selectedFamily, individuals: newFamilyMembers })
        setIsDeleteModalOpen(false)
        mutate(undefined)
    }

    const { mutate: updateUser, isPending } = useMutation({
        mutationKey: ['apiEditFamilyMember'],
        mutationFn: async (body: UpdateUserDto) => {
            console.log(selectedUser?.id, body)
            await apiUpdateUser(selectedUser?.id || "", body)
        },
        onSuccess: () => {
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`apiGetSingleConfirmedFamily${id}`] })
        }
    })


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

    const addFamilyMember = (user: User) => {
        selectedFamily?.individuals?.push(user)
        setUserDataModal(false)
        mutate(undefined)
    }


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

            {(isLoading) &&
                <FullScreenLoader />
            }


            <UserDataModal
                isOpen={userDataModalState}
                setIsOpen={setUserDataModal}
                userData={singleSearchedUser}
                onConfirm={(user: User) => {
                    addFamilyMember(user)
                }}
            />

            <EditFamilyData
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                familyData={{
                    familyLastName: selectedFamily?.familyLastName,
                    familyAddress: selectedFamily?.familyAddress,
                    familyId: selectedFamily?.id
                }}
                EditPendingFamily={mutate}
            />

            <EditFamilyMemberModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                isPending={isPending}
                selectedIndividual={selectedUser}
                updateUser={updateUser}
            />

            <BeforeDeleteModal
                isOpen={isDeleteModalOpen}
                toggleDeleteModal={toggleDeleteModal}
                onDelete={() => removeFamilyMember(selectedUser?.id)}
            />

            <div className='grid grid-cols-4 gap-5 mt-5' >
                {selectedFamily?.individuals?.map((individual: any) => (
                    <div className='bg-white w-[300px] h-fit border-2 rounded-lg border-gray400 flex relative flex-col text-left   p-3'>
                        <div className='flex flex-col items-start self-start' >

                            <div className='flex flex-row gap-x-2 items-center absolute top-0 right-0 m-3'>
                                <Button
                                    size='sm'
                                    isIconOnly
                                    onClick={() => {
                                        setSelectedUser(individual)
                                        setIsEditModalOpen(true)
                                    }}
                                >
                                    <button
                                    >
                                        <MdEdit size={23} />
                                    </button>
                                </Button>
                                <Button
                                    size='sm'
                                    isIconOnly
                                    color='danger'
                                    onClick={() => toggleDeleteModal(individual)}
                                >
                                    <MdDelete size={28} />
                                </Button>
                            </div>

                            <Avatar
                                src={individual?.avatar}
                                alt='avatar'
                                size='lg'
                                className='mb-2'
                                name={individual?.firstname + ' ' + individual?.lastname}
                            />
                            <p>Name: {individual?.firstname} {individual?.lastname} </p>
                            <p>Gender: {individual?.gender}</p>
                            <p>familyMember: {individual?.familyMember}</p>
                            <p>Email: {individual?.email}</p>
                            <p>Date of birth: {new Date(individual?.dateOfBirth)?.toLocaleDateString()}</p>
                            <p>Grade: {individual?.grade}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* <div className='grid grid-cols-4 gap-5 mb-12 mt-5' >
                    {pendingUsers?.filter((user: User) => !parent.some((item) => item.childId === user?.id?.toString()))
                        .map((user: User) => (
                            <DraggableItem
                                key={user?.id?.toString()}
                                user={user}
                                removeChild={removeChild}
                            >
                            </DraggableItem>
                        ))
                    }
                </div> */}


        </div >
    )
}

export default SingleFamilyEdit


