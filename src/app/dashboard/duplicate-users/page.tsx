'use client'
import React, { useMemo } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import FullScreenLoader from '@/app';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { UserApi } from '@/Api';

function DuplicateUsers() {
    const router = useRouter()
    const { data: pendingFamilies, isLoading } = useQuery({
        queryKey: ['apiGetConfirmedFamilies'],
        queryFn: async () => {
            const result = await new UserApi(AXIOS_CONFIG).getDuplicateUsers()
            return result?.data
        }
    })

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorFn: (row) => `${row?.[0]?.firstname + ' ' + row?.[0]?.lastname || ''}`,
                header: 'User Name',
                size: 150
            },
            {
                accessorFn: (row) => `${row?.length || ''}`,
                header: 'Duplicate count',
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
            onClick: () => router.push(`/dashboard/singleDuplicateUser?id=${row.original?.[0]?.id}`),
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

export default DuplicateUsers
