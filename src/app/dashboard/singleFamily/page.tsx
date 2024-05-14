'use client'
import React, { useState } from 'react'
import {
    Draggable,
    DraggableOverlay,
    Droppable,
} from '../../../components'
import {
    DndContext,
    useDraggable,
} from '@dnd-kit/core';
import { Button } from '@nextui-org/react';

import { useMutation, useQuery } from '@tanstack/react-query'
import { UserApi } from '@/Api'
import { AXIOS_CONFIG } from '@/Api/wrapper'
import { useSearchParams } from 'next/navigation'

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')

    const { data: selectedFamily } = useQuery({
        queryKey: [`pendingFamilies${id}`],
        queryFn: async () => {
            const res = await new UserApi(AXIOS_CONFIG).getPendingFamiliesAndUsers()
            return res?.data?.filter((item: any) => item?.familyId == id)[0]
        }
    })

    const { data: pendingUsers, mutate } = useMutation({
        mutationKey: ['pendingUsers'],
        mutationFn: async () => {
            console.log(selectedFamily?.individuals)
            const res = await new UserApi(AXIOS_CONFIG).findMatchingUsers({ users: selectedFamily?.individuals })
            return res?.data
        }
    })
    React.useEffect(() => { selectedFamily && mutate() }, [selectedFamily])

    type DraggableProps = {
        parentId: string;
        childId: string;
    };


    const [isDragging, setIsDragging] = useState(false);
    const [parent, setParent] = useState<DraggableProps[] | []>([]);

    const draggables = ['1', '2', '3', '4'];


    function handleDragEnd(event: any) {
        const { active, over } = event;
        if (active?.id !== over?.id) {
            console.log('childId', active.id)
            console.log('ParentId', over.id)

            setParent(old => {
                // Remove any existing relationship for the active child or over parent
                const filtered = old.filter(item => item.childId !== active.id && item.parentId !== over.id);

                // Add the new relationship
                return [...filtered, { parentId: over.id, childId: active.id }];
            })

            setIsDragging(false);
        }
    }


    function removeChild(childId: string) {
        setParent((old) => old.filter((item) => item.childId !== childId));
    }


    return (
        <div>
            <div className='flex flex-col gap-y-3 border-2 border-gray-500 p-3 rounded-lg' >
                <p className='font-bold text-3xl'>Family last name: {selectedFamily?.familyLastName}</p>
                <p className='font-bold text-xl'>{selectedFamily?.familyLastName}</p>

            </div>

            <DndContext
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                onDragCancel={() => setIsDragging(false)}
            >
                <div className='grid grid-cols-3' >

                    {pendingUsers?.filter((user) => !parent.some((item) => item.childId === user?.id))
                        .map((user) => (
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
                <div className='grid grid-cols-3' >
                    {selectedFamily?.individuals.map((individual: any) => (
                        <Droppable
                            key={individual?.firstname + individual?.lastname} id={individual?.firstname + individual?.lastname} dragging={isDragging}>

                            {parent?.filter((item) => item.parentId === individual?.firstname + individual?.lastname).map((itemm) =>
                                <DraggableItem
                                    key={itemm?.childId}
                                    user={itemm}
                                    removeChild={removeChild}
                                    isInList={true}
                                >
                                </DraggableItem>
                            )}

                            <p>{individual?.firstname}</p>
                        </Droppable>
                    ))}
                    <DraggableOverlay />
                </div>
            </DndContext>
        </div>
    )
}

export default SingleFamilyEdit






type props = {
    user: any;
    removeChild: (childId: string) => void;
    isInList: boolean;

}
function DraggableItem({ user, removeChild, isInList }: props) {
    const { isDragging, setNodeRef, listeners } = useDraggable({
        id: user?.id,
    });

    return (
        <Draggable
            dragging={isDragging}
            ref={setNodeRef}
            listeners={listeners}
            style={{
                opacity: isDragging ? 0 : undefined,
            }}
            buttonStyle={{
                backgroundColor: "#f7f7",
                width: 300,
                height: 300
            }}
        >

            <div className='bg-white flex flex-col gap-y-2'>
                {isInList &&
                    <Button color='primary' onClick={() => removeChild(user?.id)} >
                        Remove
                    </Button>
                }

                <p className='font-bold text-lg'>Child ID: #{user?.firstname}</p>
            </div>

        </Draggable>
    );
}
