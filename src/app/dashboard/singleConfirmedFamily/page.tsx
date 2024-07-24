'use client'
import React, { useState } from 'react'

import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { MdDelete, MdEdit, MdEditDocument } from 'react-icons/md';
import FullScreenLoader from '@/app';
import BeforeDeleteModal from '../BeforeDeleteModal';
import { CreateUserDto, FamiliesApi, UpdateFamilyDto, UpdateUserDto, User, UserApi } from '@/Api';
import EditFamilyData from './EditFamilyData';
import UserDataModal from '../singleFamily/UserDataModal';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import UserHandleModal from '../singleFamily/UserHandleModal';
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
            const result = await new FamiliesApi(AXIOS_CONFIG).getSingleFamily(id || '')
            setSelectedFamily(result?.data)
            return result?.data
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
            await new FamiliesApi(AXIOS_CONFIG).updateFamily(body || selectedFamily, id || "")
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
            await new UserApi(AXIOS_CONFIG).updateUser(body, selectedUser?.id || "")
        },
        onSuccess: () => {
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`apiGetSingleConfirmedFamily${id}`] })
        }
    })


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
        selectedFamily?.individuals?.push(user)
        setUserDataModal(false)
        mutate(undefined)
    }
    const [modalType, setModalType] = useState('edit')

    const { mutate: createUser } = useMutation({
        mutationKey: ['apiEditFamilyMember'],
        mutationFn: async (body: CreateUserDto) => {
            const result = await new UserApi(AXIOS_CONFIG).createUser(body)
            selectedFamily.individuals.push(result.data.id)
            await mutate(selectedFamily)
            return result.data
        },
        onSuccess: () => {
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`apiGetSingleConfirmedFamily${id}`] })
        }
    })

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


            <UserHandleModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedIndividual={selectedUser}
                EditPendingFamilyMember={(data) => {
                    modalType === 'add' ?
                        createUser({
                            ...data
                        })
                        :
                        updateUser({ ...data })
                }}
            />




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

            {(isLoading) &&
                <FullScreenLoader />
            }


            {
                isSuccess &&
                <UserDataModal
                    isOpen={userDataModalState}
                    setIsOpen={setUserDataModal}
                    userData={singleSearchedUser}
                    onConfirm={(user: User) => {
                        addFamilyMember(user)
                    }}
                />
            }


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


