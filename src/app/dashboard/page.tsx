'use client'
import React, { useMemo } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { apiGetFamilies } from '@/components/utils/HiddenRequests';
import FullScreenLoader from '..';

function DashboardMain() {
    const router = useRouter()
    const { data: pendingFamilies, isLoading } = useQuery({
        queryKey: ['pendingFamilies'],
        queryFn: apiGetFamilies
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
    });

    return (
        <div >
            {(isLoading) &&
                <FullScreenLoader />
            }
            <div className="flex-1  ">
                <MaterialReactTable table={table} />
            </div>
        </div>
    )
}

export default DashboardMain
