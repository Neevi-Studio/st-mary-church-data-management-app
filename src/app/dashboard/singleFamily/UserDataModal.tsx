import React from 'react'
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, } from '@nextui-org/react'
import { User } from '@/Api'

type props = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    userData: User
    onConfirm: (user: User) => void
}

function UserDataModal({ isOpen, setIsOpen, userData, onConfirm }: props) {
    return (
        <Modal
            size={'2xl'}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">User data</ModalHeader>
                    <ModalBody>
                        <div
                            className='  h-fit  rounded-lg border-gray400 flex relative flex-col text-left   px-3 pt-2'>

                            <div className='flex flex-row gap-x-2 items-center -ml-1'>
                                <Avatar
                                    src={userData?.avatar}
                                    alt='avatar'
                                    size='lg'
                                    className='mb-2'
                                    name={userData?.firstname + ' ' + userData?.lastname}
                                />
                                <div className='flex flex-col ' >
                                    <p className='font-semibold'>{userData?.firstname} {userData?.lastname}</p>
                                    <p >{userData?.phoneNumber}</p>
                                </div>
                            </div>

                            {userData?.email &&
                                <p >Email: {userData?.email}</p>
                            }


                            {userData?.address &&
                                <p >Address: {userData?.address}</p>
                            }

                            {userData?.userAge &&
                                <p >Age: {userData?.userAge} years old</p>
                            }


                            {userData?.fatherOfConfession &&
                                <p >father Of Confession: {userData?.fatherOfConfession}</p>
                            }

                            {userData?.dateOfBirth &&
                                <p >Date of birth: {new Date(userData?.dateOfBirth)?.toLocaleDateString()}</p>
                            }


                            {userData?.lastSeen &&
                                <p >Last time opened the app: {new Date(userData?.lastSeen)?.toLocaleDateString()}</p>
                            }

                            {userData?.grade &&
                                <p >Grade: {userData?.grade}</p>
                            }

                            {userData?.familyMember &&
                                <p >familyMember: {userData?.familyMember}</p>
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
                            Close
                        </Button>
                        <Button
                            onClick={() => onConfirm(userData)}
                            color="primary" >
                            Add to list
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}

export default UserDataModal