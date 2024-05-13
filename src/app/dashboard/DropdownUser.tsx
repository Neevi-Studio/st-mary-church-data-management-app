'use client'
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useAuthContext } from '@/components/context/AuthContext';
import { useAuth } from '@/components/hooks/useAuth';
import { apiLogoutUser } from '@/components/utils/HiddenRequests';
const DropdownUser = () => {
    const { userData } = useAuthContext();

    const { clearCookies } = useAuth()

    async function logout() {
        await apiLogoutUser()
        clearCookies()
    }

    return (
        <div className="relative">
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="light" >
                        <p className="font-semibold" >
                            {userData?.firstname} {userData?.lastname}
                        </p>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem onClick={logout} key="Logout" className="text-danger" color="danger">
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DropdownUser;
