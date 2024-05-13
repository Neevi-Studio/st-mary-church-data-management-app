import { useCookies } from 'next-client-cookies';

export function useAuth() {
    const cookies = useCookies();
    const token = cookies.get('dashToken')
    const isLoggedIn = cookies.get('dash-logged-in')

    const clearCookies = () => {
        cookies.remove('dashToken')
        cookies.remove('dash-logged-in')
    }

    return {
        token,
        isLoggedIn: isLoggedIn ? true : false,
        clearCookies
    }
}