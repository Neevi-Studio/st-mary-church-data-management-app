'use client'
import { UpdatePendingUserDto, User } from '@/Api'
import { Droppable } from '@/components'
import { Button } from '@nextui-org/react'
import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import DraggableItem from '../DraggableItem'



type editUser = {
    familyId: string;
    studentId: number;
    body: UpdatePendingUserDto;
}
type props = {
    individual: any
    removeFamilyMember: (memberFullName: string) => void
    parent: any
    pendingUsers: any
    removeChild: (childId: string) => void
    isDragging: boolean
    handleOpenEditModal: (value: boolean) => void
}
function DropComponent({ individual, removeFamilyMember, parent, pendingUsers, removeChild, isDragging, handleOpenEditModal }: props) {
console.log(individual)

    return (
        <Droppable
            key={individual?.firstname + individual?.lastname} id={individual?.firstname + individual?.lastname} dragging={isDragging}>
            <div className='flex flex-col gap-y-1 p-4 relative w-full h-full '>
                <div className='flex flex-row gap-x-1 items-center absolute top-0 right-0 m-3' >
                    {parent?.filter((item: any) => item.parentId === individual?.firstname + individual?.lastname)?.length === 0 &&
                        <Button
                            size='sm'
                            isIconOnly
                            color='danger'
                            onClick={() => removeFamilyMember(individual?.firstname + individual?.lastname)}
                        >
                            <MdDelete size={25} />
                        </Button>
                    }
                    {individual?.studentId &&
                        <Button
                            size='sm'
                            onClick={() => {
                                handleOpenEditModal(individual)
                            }}
                            isIconOnly
                        >
                            <MdEdit size={23} />
                        </Button>
                    }
                </div>
                <div className='flex flex-col items-start self-start' >
                    <p>Name: {individual?.firstname} {individual?.lastname} </p>
                    <p>Gender: {individual?.gender}</p>
                    <p>familyMember: {individual?.familyMember}</p>
                    <p>Email: {individual?.email}</p>
                    <p>Date of birth: {individual?.dateOfBirth}</p>
                    <p>Grade: {individual?.grade}</p>
                </div>
                {parent?.filter((item: any) => item.parentId === individual?.firstname + individual?.lastname).map((itemm: any) =>
                    <DraggableItem
                        key={itemm?.childId}
                        user={pendingUsers?.filter((user: User) => user?.id === itemm?.childId)[0]}
                        removeChild={removeChild}
                        isInList={true}
                    >
                    </DraggableItem>
                )}

            </div>
        </Droppable >
    )
}

export default DropComponent