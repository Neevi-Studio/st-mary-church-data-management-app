'use client'
import React from 'react'
import { BasicSetup } from '../page'
import { useQuery } from '@tanstack/react-query'
import { UserApi } from '@/Api'
import { AXIOS_CONFIG } from '@/Api/wrapper'
import { useRouter, useSearchParams } from 'next/navigation'

function SingleFamilyEdit() {

    const id = useSearchParams().get('id')
    console.log(id)

    const { data: selectedFamily } = useQuery({
        queryKey: ['pendingFamilies'],
        queryFn: async () => {
            const res = await new UserApi(AXIOS_CONFIG).getPendingFamiliesAndUsers()
            return res?.data?.filter((item: any) => item?.familyId == id)[0]
        }
    })

    console.log(selectedFamily)
    return (
        <div>
            <div className='flex flex-col gap-y-3 border-2 border-gray-500 p-3 rounded-lg' >
                <p className='font-bold text-3xl'>Family last name: {selectedFamily?.familyLastName}</p>
                <p className='font-bold text-xl'>{selectedFamily?.familyLastName}</p>

            </div>
            {BasicSetup()}
        </div>
    )
}

export default SingleFamilyEdit