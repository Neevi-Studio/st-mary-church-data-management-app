'use client'
import React, { useMemo, useState } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { apiGetConfirmedFamilies } from '@/components/utils/HiddenRequests';
import FullScreenLoader from '@/app';
import { FamiliesApi, Family } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { Button } from '@nextui-org/react';
import BeforeDeleteModal from '@/app/dashboard/BeforeDeleteModal';

type props = {
    page: string
}

function MainTable({ page }: props) {

    const router = useRouter()

    const { data: pendingFamilies, isLoading } = useQuery({
        queryKey: ['apiGetConfirmedFamilies'],
        queryFn: async () => {
            const result = await new FamiliesApi(AXIOS_CONFIG).getAllFamilies()
            return result.data
        }
    })

    const { mutate, isPending: isDeleting } = useMutation({
        mutationKey: ['apiGetConfirmedFamilies'],
        mutationFn: async (familyId: string) => {
            const response = await new FamiliesApi(AXIOS_CONFIG).deleteFamily(familyId)
            return response
        }
    })



    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorFn: (row) => `${row?._id || ''}`,
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


    const [selectedFamily, setSelectedUser] = useState<any>(null)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const toggleDeleteModal = (singleFamily?: Family) => {
        setIsDeleteModalOpen(!isDeleteModalOpen)
        if (singleFamily) {
            setSelectedUser(singleFamily)
        } else {
            setSelectedUser(null)
        }
    }

    const table = useMaterialReactTable({
        muiTableContainerProps: {
            sx: { overflow: 'scroll' }
        },
        initialState: {
            columnPinning: {
                left: ['mrt-row-expand', 'mrt-row-select'],
                right: ['mrt-row-actions'],
            },
        },
        columns,
        data: pendingFamilies || [],
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableGrouping: true,
        enableColumnPinning: true,
        enableFacetedValues: true,

        muiTableBodyRowProps: ({ row }) => ({
            onClick: () => router.push(`/dashboard/singleConfirmedFamily?id=${row.original?.id}`),
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
        enableRowActions: true,
        renderRowActionMenuItems: ({ closeMenu, row }) => [
            <Button
                onClick={() => {
                    closeMenu()
                    toggleDeleteModal(row.original)
                }}
                className='bg-transparent rounded-none'
            >
                Delete Family
            </Button>
        ]
    });

    return (
        <div >
            {(isLoading) &&
                <FullScreenLoader />
            }
            <BeforeDeleteModal
                isOpen={isDeleteModalOpen}
                toggleDeleteModal={toggleDeleteModal}
                onDelete={() => mutate(selectedFamily?.id)}
            />
            <div className="flex-1  ">
                <MaterialReactTable table={table} />
            </div>
        </div>
    )
}

export default MainTable
