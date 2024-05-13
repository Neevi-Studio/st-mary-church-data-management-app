import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useMutation } from "@tanstack/react-query"
import React, { createContext, useContext, useEffect, } from 'react';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { useAuth } from '../hooks/useAuth';
import { User } from '@/Api';
import { UserApi } from '@/Api/apis/user-api';


type contextType = {
    isLoggedIn: boolean
    userData: User | undefined
    getMyInfo: () => Promise<void>;
}

export const AuthContextProvider = createContext<contextType>({
    isLoggedIn: false,
    userData: undefined,
    getMyInfo: async () => { }
})

type Props = {
    children: React.ReactNode
};

export const useAuthContext = () => {
    return useContext(AuthContextProvider);
};

function AuthContext({ children }: Props) {

    const currentPathname = usePathname()
    const { push } = useRouter()
    const { isLoggedIn, clearCookies } = useAuth()


    useEffect(() => {
        if (isLoggedIn && currentPathname === '/') {
            push('/')
        }
        if (!isLoggedIn && currentPathname.includes('/dashboard')) {
            push('/dashboard')
        }
    }, [isLoggedIn, currentPathname])

    const { data: userData, mutate: getMyInfo } = useMutation({
        mutationKey: ['user'],
        mutationFn: async () => {
            // const res = await new UserApi(AXIOS_CONFIG).getMyInfo()
            // return res.data
            return undefined
        },
        onError: () => {
            clearCookies()
        }
    })

    React.useEffect(() => {
        if (isLoggedIn) {
            getMyInfo()
        }
    }, [])




    return (
        <AuthContextProvider.Provider
            value={{
                isLoggedIn,
                userData,
                getMyInfo: async () => {
                    await getMyInfo();
                }
            }}
        >
            {children}
        </AuthContextProvider.Provider>
    );
}

export default AuthContext;
