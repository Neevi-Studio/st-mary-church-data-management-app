import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import React from 'react'



type props = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    EditPendingFamilyMember: (editUserBody: any) => void
    selectedIndividual: any
}

function EditFamilyMemberModal({ isOpen, setIsOpen, EditPendingFamilyMember, selectedIndividual }: props) {

    const [pendingUserData, setPendingUserData] = React.useState<any>(selectedIndividual)

    React.useEffect(() => {
        setPendingUserData(selectedIndividual)
    }, [selectedIndividual, isOpen])

    const grades = [
        'Pre-K',
        'Kindergarten',
        '1st Grade',
        '2nd Grade',
        '3rd Grade',
        '4th Grade',
        '5th Grade',
        '6th Grade',
        '7th Grade',
        '8th Grade',
        '9th Grade',
        '10th Grade',
        '11th Grade',
        '12th Grade',
        'Adult',
    ]



    return (
        <Modal
            size={'2xl'}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Edit user</ModalHeader>
                    <ModalBody>
                        <Input
                            label='First name'
                            placeholder='First name'
                            value={pendingUserData?.firstname}
                            onChange={(e) => setPendingUserData((old: any) => ({ ...old, firstname: e.target.value }))}
                        />

                        <Input
                            label='Last name'
                            placeholder='Last name'
                            value={pendingUserData?.lastname}
                            onChange={(e) => setPendingUserData((old: any) => ({ ...old, lastname: e.target.value }))}
                        />

                        <Select
                            label="Gender"
                            selectedKeys={[pendingUserData?.gender]}
                            onChange={(e) => setPendingUserData((old: any) => ({ ...pendingUserData, gender: e.target.value }))}
                        >
                            <SelectItem key="Male" value="Male">
                                Male
                            </SelectItem>
                            <SelectItem key="Female" value="Female">
                                Female
                            </SelectItem>
                        </Select>

                        <Select
                            label="Grade"
                            selectedKeys={[pendingUserData?.grade]}
                            onChange={(e) => {
                                setPendingUserData((old: any) => ({ ...old, grade: e?.target?.value }))
                            }}
                        >
                            {grades?.map((grade) => (
                                <SelectItem key={grade} value={grade}>
                                    {grade}
                                </SelectItem>
                            ))}
                        </Select>

                        <Input
                            label='Email'
                            placeholder='Email'
                            value={pendingUserData?.email}
                            onChange={(e) => setPendingUserData((old: any) => ({ ...old, email: e.target.value }))}
                        />

                        <Input
                            label='Date of birth'
                            type='date'
                            placeholder='Date of birth'
                            value={pendingUserData?.dateOfBirth}
                            onChange={(e) => setPendingUserData((old: any) => ({ ...old, dateOfBirth: e.target.value }))}
                        />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
                            Close
                        </Button>
                        <Button color="primary" onPress={() => EditPendingFamilyMember(
                            {
                                familyId: pendingUserData?.familyId,
                                studentId: pendingUserData?.studentId,
                                body: {
                                    firstname: pendingUserData?.firstname,
                                    lastname: pendingUserData?.lastname,
                                    gender: pendingUserData?.gender,
                                    email: pendingUserData?.email,
                                    dateOfBirth: pendingUserData?.dateOfBirth,
                                    grade: pendingUserData?.grade
                                }
                            }
                        )}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>


    )
}

export default EditFamilyMemberModal