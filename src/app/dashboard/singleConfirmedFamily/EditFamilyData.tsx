import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

type props = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    familyData: any
    EditPendingFamily: (editFamilyData: any) => void
}
function EditFamilyData({ isOpen, setIsOpen, familyData, EditPendingFamily }: props) {
    const [familyDataState, setFamilyDataState] = React.useState<any>()


    React.useEffect(() => {
        setFamilyDataState(familyData)
    }, [familyData])



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
                            label='Family last name'
                            value={familyDataState?.familyLastName}
                            placeholder='last name'
                            onChange={(e) => {
                                setFamilyDataState((old: any) => ({ ...old, familyLastName: e.target.value }))
                            }}
                        />

                        <Input
                            label='Family address'
                            value={familyDataState?.familyAddress}
                            placeholder='full address'
                            onChange={(e) => {
                                setFamilyDataState((old: any) => ({ ...old, familyAddress: e.target.value }))
                            }}
                        />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
                            Close
                        </Button>
                        <Button color="primary" onPress={() => EditPendingFamily({
                            familyAddress: familyDataState?.familyAddress,
                            familyLastName: familyDataState?.familyLastName,
                        })}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>

    )
}

export default EditFamilyData