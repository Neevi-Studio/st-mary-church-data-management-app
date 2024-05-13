'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import { MdAddCircle } from 'react-icons/md'
import CreateBannerModal from './CreateBannerModal';
import { useDisclosure } from '@nextui-org/react';
function Banners() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <div className='flex flex-col py-2' >
            <CreateBannerModal isOpen={isOpen} onOpenChange={onOpenChange} />
            <div className='flex flex-row items-center justify-between' >
                <h1 className='text-3xl font-bold' >Banners</h1>
                <Button onClick={onOpen}  startContent={<MdAddCircle size={25} />} color='primary' variant='bordered'>
                    <p className='font-semibold tracking-wide px-8' >
                        Create Banner
                    </p>
                </Button>
            </div>

        </div>
    )
}

export default Banners