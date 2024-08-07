'use client'
import React, { useState } from 'react'
import { Avatar, Button } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { MdDelete, MdEdit } from 'react-icons/md';
import FullScreenLoader from '@/app';
import BeforeDeleteModal from '../BeforeDeleteModal';
import { UpdateUserDto, User, UserApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import UserHandleModal from '../singleFamily/UserHandleModal';


function SingleDuplicateUser() {

    const id = useSearchParams().get('id')

    const [isOpen, setIsOpen] = useState(false)
    const queryClient = useQueryClient()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const { data, isLoading } = useQuery({
        queryKey: [`apiUserDuplicates${id}`],
        queryFn: async () => {
            const result = await new UserApi(AXIOS_CONFIG).getUserDuplicates(id || '')
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


    const { mutate: updateUser, isPending } = useMutation({
        mutationKey: ['apiUpdateUser'],
        mutationFn: async (body: UpdateUserDto) => {
            await new UserApi(AXIOS_CONFIG).updateUser(body, selectedUser?.id || "")
        },
        onSuccess: () => {
            setIsEditModalOpen(false)
            queryClient.invalidateQueries({ queryKey: [`apiUserDuplicates${id}`] })
        }
    })




    const { mutate: deleteUser } = useMutation({
        mutationKey: ['apiDeleteUser'],
        mutationFn: async () => {
            await new UserApi(AXIOS_CONFIG).deleteUser(selectedUser?.id)
        },
        onSuccess: () => {
            setIsDeleteModalOpen(false)
            setSelectedUser(null)
            queryClient.invalidateQueries({ queryKey: [`apiUserDuplicates${id}`] })
        }
    })

    return (
        <div>


            {(isLoading) &&
                <FullScreenLoader />
            }



            <UserHandleModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedIndividual={selectedUser}
                EditPendingFamilyMember={(data) => {
                    updateUser({ ...data })
                }}
            />

            <BeforeDeleteModal
                isOpen={isDeleteModalOpen}
                toggleDeleteModal={toggleDeleteModal}
                onDelete={() => deleteUser(selectedUser?.id)}
            />

            <div className='grid grid-cols-3 gap-5 mt-5 h-full' >
                {data?.map((individual: User) => (
                    <div className='bg-white h-fit border-2 rounded-lg border-gray400 flex relative flex-col text-left   p-3'>
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
                            <p>Registration method: {individual?.registrationMethod}</p>
                            <p>Email: {individual?.email}</p>
                            <p>Date of birth: {new Date(individual?.dateOfBirth)?.toLocaleDateString()}</p>
                            <p>Grade: {individual?.grade}</p>
                            <p>Account created at: {new Date(individual?.createdAt)?.toLocaleDateString()}</p>
                            <p>last seen: {individual?.lastSeen && new Date(individual?.lastSeen)?.toLocaleDateString() || 'Not known'}</p>
                            <p>last Login: {individual?.lastLogin && new Date(individual?.lastLogin)?.toLocaleDateString() || 'Not known'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default SingleDuplicateUser


