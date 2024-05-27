'use client'
import React, { useMemo } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { apiGetSemiConfirmedFamilies } from '@/components/utils/HiddenRequests';
import FullScreenLoader from '@/app';

function SemiConfirmed() {
    const router = useRouter()
    const { data: pendingFamilies, isLoading } = useQuery({
        queryKey: ['apiGetSemiConfirmedFamilies'],
        queryFn: apiGetSemiConfirmedFamilies
    })

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorFn: (row) => `${row?.temporaryFamilyId || ''}`,
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
            onClick: () => router.push(`/dashboard/single-semiconfirmed-family?id=${row.original?.temporaryFamilyId}`),
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

export default SemiConfirmed
