import { useCookies } from 'next-client-cookies';

export function useAuth() {
    const cookies = useCookies();
    const token = cookies.get('saintmary-dashToken')
    const isLoggedIn = cookies.get('saintmary-dash-logged-in')

    const clearCookies = () => {
        cookies.remove('saintmary-dashToken')
        cookies.remove('saintmary-dash-logged-in')
    }

    return {
        token,
        isLoggedIn: isLoggedIn ? true : false,
        clearCookies
    }
}