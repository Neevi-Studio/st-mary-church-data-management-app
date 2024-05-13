'use client'
import React, { useContext, useState } from 'react'
// import {
//     DndContext,
//     closestCenter,
//     KeyboardSensor,
//     PointerSensor,
//     useSensor,
//     useSensors,
//     useDraggable,
//     DragOverlay
// } from '@dnd-kit/core';
// import {
//     arrayMove,
//     SortableContext,
//     sortableKeyboardCoordinates,
//     rectSortingStrategy
// } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import {
    Draggable,
    DraggableOverlay,
    Droppable,
} from '../../components'


import {
    DndContext,
    useDraggable,
    CollisionDetection as CollisionDetectionType,
    Modifiers,
} from '@dnd-kit/core';
import { Button } from '@nextui-org/react';

function DashboardMain() {





    return (
        <div >
            {BasicSetup()}
        </div>
    )
}

export default DashboardMain






interface Props {
    collisionDetection?: CollisionDetectionType;
    containers?: string[];
    modifiers?: Modifiers;
    value?: string;
}

type DraggableProps = {
    parentId: string;
    childId: string;
};

function DroppableStory({
    containers = ['A'],
    collisionDetection,
    modifiers,
}: Props) {
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
        <DndContext
            collisionDetection={collisionDetection}
            modifiers={parent === null ? undefined : modifiers}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            onDragCancel={() => setIsDragging(false)}
        >
            <div className='grid grid-cols-3' >

                {draggables
                    .filter((id) => !parent.some((item) => item.childId === id))
                    .map((id) => (
                        <DraggableItem
                            key={id}
                            ids={id}
                            removeChild={removeChild}
                            isInList={false}
                        >
                        </DraggableItem>
                    ))}
            </div>
            <div className='grid grid-cols-3' >
                {containers.map((id) => (
                    <Droppable
                        key={id} id={id} dragging={isDragging}>
                        {parent?.filter((item) => item.parentId === id).map((item) =>
                            <DraggableItem
                                key={item.childId}
                                ids={item.childId}
                                removeChild={removeChild}
                                isInList={true}
                            >
                            </DraggableItem>
                        )}
                    </Droppable>
                ))}
                <DraggableOverlay />
            </div>
        </DndContext>
    );
}

type props = {
    ids: string;
    removeChild: (childId: string) => void;
    isInList: boolean;

}
function DraggableItem({ ids, removeChild, isInList }: props) {
    const { isDragging, setNodeRef, listeners } = useDraggable({
        id: ids,
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
                    <Button color='primary' onClick={() => removeChild(ids)} >
                        Remove
                    </Button>
                }

                <p className='font-bold text-lg'>Child ID: #{ids}</p>
            </div>

        </Draggable>
    );
}

export const BasicSetup = () => <DroppableStory containers={['A', 'B', 'C']} />;

