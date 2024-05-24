'use client'
import React, { useState } from 'react'
import {
    Droppable,
} from '../../../components'
import {
    DndContext,
    useDraggable,
} from '@dnd-kit/core';
import { Avatar, Button } from '@nextui-org/react';
import { CSS } from '@dnd-kit/utilities';
import { useMutation, useQuery } from '@tanstack/react-query'
import { ConfirmFamilyDTO, User } from '@/Api'
import { useRouter, useSearchParams } from 'next/navigation'
import { MdDelete, MdDragIndicator } from 'react-icons/md';
import { apiConfirmFamily, apiGetFamilies, apiGetMatchingFamilyUsers, apiSemiConfirmFamily } from '@/components/utils/HiddenRequests';
import toast from 'react-hot-toast';
import FullScreenLoader from '@/app';

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



    return (
        <div>
            <div className='flex flex-col gap-y-3 border-2 border-gray-500 p-3 rounded-lg' >
                <p className='font-bold text-3xl'>Family last name: {selectedFamily?.familyLastName}</p>
                <p className='font-bold text-xl'>{selectedFamily?.familyAddress}</p>
                <p className='font-bold text-xl'>Family ID: #{selectedFamily?.familyId}</p>
            </div>

            {(isLoading) &&
                <FullScreenLoader />
            }

            <DndContext
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                onDragCancel={() => setIsDragging(false)}
            >


                <div className='grid grid-cols-3 gap-5 mt-5' >
                    {selectedFamily?.individuals?.map((individual: any) => (
                        <Droppable
                            key={individual?.firstname + individual?.lastname} id={individual?.firstname + individual?.lastname} dragging={isDragging}>
                            <div className='flex flex-col gap-y-1 p-4 relative w-full h-full '>
                                {parent?.filter((item) => item.parentId === individual?.firstname + individual?.lastname)?.length === 0 &&
                                    <Button
                                        size='sm'
                                        isIconOnly
                                        color='danger'
                                        className='absolute top-0 right-0 m-3'
                                        onClick={() => removeFamilyMember(individual?.firstname + individual?.lastname)}
                                    >
                                        <MdDelete size={28} />
                                    </Button>
                                }
                                <div className='flex flex-col items-start self-start' >
                                    <p>Name: {individual?.firstname} {individual?.lastname} </p>
                                    <p>Gender: {individual?.gender}</p>
                                    <p>familyMember: {individual?.familyMember}</p>
                                    <p>Email: {individual?.email}</p>
                                    <p>Date of birth: {individual?.dateOfBirth}</p>
                                    <p>Grade: {individual?.grade}</p>
                                </div>
                                {parent?.filter((item) => item.parentId === individual?.firstname + individual?.lastname).map((itemm) =>
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
            </DndContext>

            <Button isLoading={isPending} className='w-full bg-[#66A3D0] mb-12' color='primary' onClick={() => confirmFamilyy()}>
                Confirm
            </Button>
        </div>
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
