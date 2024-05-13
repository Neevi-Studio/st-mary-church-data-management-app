'use client'
import { useRouter } from 'next/navigation';
import { removeCookie } from '../../components/utils/local-storage.util'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useSession } from '@/components/contexts/sessionContext';

const DropdownUser = () => {
    const { push } = useRouter()
    const { user } = useSession()

    const handleLogout = () => {
        removeCookie("token");
        document.cookie = 'loggedIn=false'
        removeCookie("loggedIn");
        localStorage.removeItem("authToken");
        push("/login")
    };

    return (
        <div className="relative">
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="light" >
                        <p className="font-semibold" >
                            {user?.firstname} {user?.lastname}
                        </p>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem onClick={handleLogout} key="Logout" className="text-danger" color="danger">
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DropdownUser;
