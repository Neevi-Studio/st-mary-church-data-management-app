import { useDraggable } from '@dnd-kit/core';
import { Avatar, Button } from '@nextui-org/react';
import React from 'react'
import { MdDelete, MdDragIndicator } from 'react-icons/md';
import { CSS } from '@dnd-kit/utilities';

type props = {
    user?: any;
    removeChild?: (childId: string) => void;
    isInList?: boolean;
}

function DraggableItem({ user, removeChild, isInList }: props) {
    const { isDragging, setNodeRef, listeners, transform, attributes, } = useDraggable({
        id: user?.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? '100' : 'auto',
        opacity: isDragging ? 0.7 : 1
    };

    return (
        <div
            ref={setNodeRef}
            style={style as React.CSSProperties}
            {...listeners}
            className='bg-white w-[300px] min-h-[300px] h-fit border-2 rounded-lg border-gray400 flex relative flex-col text-left   px-3 pt-2'>
            <div className='flex flex-row gap-x-2 items-center absolute top-0 right-0 m-3'>
                <Button
                    color='primary'
                    size='sm'
                    isIconOnly
                >
                    <button
                        {...attributes}
                        {...listeners}
                    >
                        <MdDragIndicator size={28} />
                    </button>
                </Button>
                {isInList &&
                    <Button
                        size='sm'
                        isIconOnly
                        color='danger'
                        onClick={() => removeChild && removeChild(user?.id)}
                    >
                        <MdDelete size={28} />
                    </Button>
                }
            </div>
            <div className='flex flex-row gap-x-2 items-center -ml-1'>
                <Avatar
                    src={user?.avatar}
                    alt='avatar'
                    size='lg'
                    className='mb-2'
                    name={user?.firstname + ' ' + user?.lastname}
                />
                <div className='flex flex-col ' >
                    <p className='font-semibold'>{user?.firstname} {user?.lastname}</p>
                    <p >{user?.phoneNumber}</p>
                </div>
            </div>
            {user?.email &&
                <p >Email: {user?.email}</p>
            }
            {user?.address &&
                <p >Address: {user?.address}</p>}
            {user?.dateOfBirth && <p >Date of birth: {new Date(user?.dateOfBirth)?.toLocaleDateString()}</p>}
            {user?.grade &&
                <p >Grade: {user?.grade}</p>}
            {user?.familyMember &&
                <p >familyMember: {user?.familyMember}</p>}
        </div>
    );
}


export default DraggableItem