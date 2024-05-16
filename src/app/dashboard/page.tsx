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
    DndContext,
    useDraggable,
    CollisionDetection as CollisionDetectionType,
    Modifiers,
} from '@dnd-kit/core';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { apiGetFamilies } from '@/components/utils/HiddenRequests';

function DashboardMain() {

    const router = useRouter()


    const { data: pendingFamilies } = useQuery({
        queryKey: ['pendingFamilies'],
        queryFn: apiGetFamilies
    })


    // const { data: pendingFamilies } = useQuery({
    //     queryKey: ['pendingFamilies'],
    //     queryFn: async () => {
    //         const res = await new UserApi(AXIOS_CONFIG).getPendingFamiliesAndUsers()
    //         return res?.data
    //     }
    // })

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
        data: pendingFamilies?.result || [],
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




