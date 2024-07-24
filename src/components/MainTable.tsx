'use client'
import React, { useMemo, useState } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef
} from 'material-react-table';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import FullScreenLoader from '@/app';
import { FamiliesApi, Family, UserApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { Button } from '@nextui-org/react';
import BeforeDeleteModal from '@/app/dashboard/BeforeDeleteModal';

type props = {
    page: string
}

function MainTable({ page }: props) {

    const router = useRouter()

    const data = () => {
        let get
        let redirectLink
        if (page === 'pending') {
            get = async () => {
                const result = await new UserApi(AXIOS_CONFIG).getPendingFamiliesAndUsers()
                return result.data
            }
            redirectLink = 'singleFamily'
        } else if (page === 'confirmed') {
            get = async () => {
                const result = await new FamiliesApi(AXIOS_CONFIG).getAllFamilies()
                return result.data
            }
            redirectLink = 'singleConfirmedFamily'
        } else if (page === 'semiConfirmed') {
            get = async () => {
                const result = await new UserApi(AXIOS_CONFIG).getSemiConfirmedFamilies()
                return result.data
            }
            redirectLink = 'single-semiconfirmed-family'
        }
        return { get, redirectLink }
    }

    const { data: pendingFamilies, isLoading } = useQuery({
        queryKey: ['families' + page],
        queryFn: data().get
    })
    const queryClient = useQueryClient()

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


    const { mutate } = useMutation({
        mutationKey: ['apiGetConfirmedFamilies'],
        mutationFn: async (familyId: string) => {
            const response = await new FamiliesApi(AXIOS_CONFIG).deleteFamily(familyId)
            return response
        },
        onSuccess: () => {
            toggleDeleteModal()
            queryClient.invalidateQueries({ queryKey: ['families' + page] })
        }
    })


    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorFn: (row) => `${page === 'pending' ? row?.familyId : row?.id || ''}`,
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
            onClick: () => router.push(`/dashboard/${data().redirectLink}?id=${page === 'pending' ? row.original?.familyId : row.original?.id}`),
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
        enableRowActions: page === 'confirmed' ? true : false,
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
