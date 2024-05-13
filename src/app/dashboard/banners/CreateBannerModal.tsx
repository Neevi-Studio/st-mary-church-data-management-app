import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import { MdAlignHorizontalCenter } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import Image from "next/image";

import { Select, SelectItem } from "@nextui-org/react";
type props = {
    isOpen: boolean;
    onOpenChange: () => void;
};

function CreateBannerModal({ isOpen, onOpenChange }: props) {


    const [imageBLob, SetFile] = useState<any>();
    const [image, SetImage] = useState<any>();

    const onImageChange = (file: File) => {
        SetImage(URL.createObjectURL(file))
        SetFile(new Blob([file], { type: file.type }));
    };



    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            size="xl"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                        <ModalBody>

                            <Input
                                type="url"
                                label="Banner Link"
                                placeholder="redirect to it upon banner click"
                                variant="bordered"
                            />

                            <Select
                                label="User Type"
                                variant="bordered"
                            >
                                <SelectItem key="All" value={'All'}>
                                    All
                                </SelectItem>
                                <SelectItem key="Say" value={'FreeUsers'}>
                                    Free users
                                </SelectItem>
                                <SelectItem key="Instagram" value={'PremiumUsers'}>
                                    Premium users
                                </SelectItem>
                            </Select>

                            <Select
                                label="Banner Type"
                                variant="bordered"
                            >
                                <SelectItem key="" value={''}>
                                    None
                                </SelectItem>
                                <SelectItem key="Say" value={'Say'}>
                                    Say
                                </SelectItem>
                                <SelectItem key="Instagram" value={'Instagram'}>
                                    Instagram
                                </SelectItem>
                                <SelectItem key="Rate" value={'Rate'}>
                                    Rate
                                </SelectItem>
                                <SelectItem key="123" value={'Email'}>
                                    Email
                                </SelectItem>

                            </Select>


                            {!image &&
                                <p className="mt-1 -mb-1 font-semibold" >Banner Image</p>}

                            {!image &&
                                <input
                                    accept="image/*"
                                    multiple={false}
                                    onChange={(e) => e?.target?.files && onImageChange(e?.target?.files?.[0])}
                                    type="file"
                                />}

                            {image &&
                                <div className="flex flex-col gap-y-3 mt-3 items-end" >
                                    <p className="font-semibold self-start text-start" >Selected Image</p>
                                    <div className="relative w-full h-[150px]" >
                                        <Image src={image} alt="" fill className="object-cover" />
                                    </div>
                                    <Button
                                        onClick={() => {
                                            SetFile(null)
                                            SetImage(null)
                                        }}
                                        size="sm" variant="faded">
                                        Clear Image
                                    </Button>
                                </div>
                            }


                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Confirm
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}


export default CreateBannerModal