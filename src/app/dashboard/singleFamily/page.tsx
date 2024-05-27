'use client'
import React, { useState } from 'react'
import {
    Droppable,
} from '../../../components'
import {
    DndContext,
    useDraggable,
} from '@dnd-kit/core';
import { Avatar, Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useMutation, useQuery } from '@tanstack/react-query'
import { ConfirmFamilyDTO, UpdatePendingUserDto, User } from '@/Api'
import { useRouter, useSearchParams } from 'next/navigation'
import { MdDelete, MdDragIndicator, MdEdit, MdEditDocument } from 'react-icons/md';
import { apiConfirmFamily, apiEditPendingFamilyAddress, apiEditPendingFamilyMember, apiGetFamilies, apiGetMatchingFamilyUsers, apiSemiConfirmFamily } from '@/components/utils/HiddenRequests';
import toast from 'react-hot-toast';
import FullScreenLoader from '@/app';
import DropComponent from './DropComponent';
import EditFamilyData from './EditFamilyData';
import EditFamilyMemberModal from './EditFamilyMemberModal';
import DraggableItem from '../DraggableItem';

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')
    const [selectedFamily, setSelectedFamily] = useState<any>(null)
    const router = useRouter()

    const { isLoading } = useQuery({
        queryKey: [`pendingFamilies${id}`],
        queryFn: async () => {
            const { result } = await apiGetFamilies()
            setSelectedFamily(result?.filter((item: any) => item?.familyId == id)[0])
            return result?.filter((item: any) => item?.familyId == id)[0]
        },
    })

    const { data: pendingUsers, mutate, isPending: isLoading2 } = useMutation({
        mutationKey: ['pendingUsers'],
        mutationFn: async () => {
            const { result } = await apiGetMatchingFamilyUsers({ users: selectedFamily?.individuals })
            return result
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
            router.back()
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
            router.back()
        }
    })

    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedIndividual, setSelectedIndividual] = useState<any>(null)

    function handleOpenEditModal(individual: any) {
        setSelectedIndividual(individual)
        setIsEditModalOpen(true)
    }

    function handleCloseEditModal() {
        setIsEditModalOpen(false)
        setSelectedIndividual(null)
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




