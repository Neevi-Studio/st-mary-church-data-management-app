'use client'
import React, { useContext, useMemo, useState } from 'react'
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
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';

import { MdDeleteForever, MdEditDocument } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { UserApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { useRouter } from 'next/navigation';

function DashboardMain() {

    const router = useRouter()

    const { data: pendingFamilies } = useQuery({
        queryKey: ['pendingFamilies'],
        queryFn: async () => {
            const res = await new UserApi(AXIOS_CONFIG).getPendingFamiliesAndUsers()
            return res?.data
        }
    })

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorFn: (row) => `${row?.familyId || ''}`,
                header: 'Family Id',
                size: 150
            },
            {
                accessorFn: (row) => `${row?.familyLastName || ''}`,
                header: 'Family last name',
                size: 150
            },
            {
                accessorFn: (row) => `${row?.familyAddress || ''}`,
                header: 'Family address',
                size: 150
            },
        ],
        []
    );


    const table = useMaterialReactTable({
        muiTableContainerProps: {
            sx: { overflow: 'scroll' }
        },
        columns,
        data: pendingFamilies || [],
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableGrouping: true,
        enableColumnPinning: true,
        enableFacetedValues: true,

        muiTableBodyRowProps: ({ row }) => ({
            onClick: () => router.push(`/dashboard/singleFamily?id=${row.original?.familyId}`),
            sx: {
                cursor: 'pointer',
            },
        }),
        // enableRowActions: true,`
        // initialState: {
        //     columnPinning: {
        //         right: ['mrt-row-actions']
        //     }
        // },
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiSearchTextFieldProps: {
            size: 'small',
            variant: 'outlined'
        },
        muiPaginationProps: {
            color: 'primary',
            shape: 'rounded',
            variant: 'outlined'
        },
        // renderRowActions: ({ row }) => (
        //     <div className="w-full flex items-center justify-around">
        //         <MdDeleteForever
        //             className="cursor-pointer"
        //             onClick={() => {
        //                 console.log(row)
        //                 toggleDeleteModal(row?.original)
        //             }}
        //             size={25}
        //             color="darkred"
        //         />
        //         <MdEditDocument
        //             className="cursor-pointer"
        //             onClick={() => toggleInfoModal(row?.original)}
        //             size={25}
        //         />
        //     </div>
        // ),
    });



    return (
        <div >

            <div className="flex-1  ">
                <MaterialReactTable table={table} />
            </div>


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

