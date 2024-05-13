import { Configuration } from './configuration';
import globalAxios from 'axios';
// import { useCookies } from 'next-client-cookies';
// import { cookies } from 'next/headers';


globalAxios.interceptors.request.use((config) => {
  // Decode cookie to get token using cookie parser , password is process.env.SECRET_COOKIE_PASSWORD
  if (config.baseURL === process.env.NEXT_PUBLIC_API_URL) {
    if (typeof window !== 'undefined' && localStorage ) {
      // const cookies = useCookies();
      // const token = cookies().get('token')
      // console.log(cookies ,'KOKO')
      // console.log(document.cookie)
      config.headers.Authorization = `Bearer ${localStorage?.getItem('authToken')}`;
    }
  }
  return config;
});

const ABORT_CONTROLLER = new AbortController();
export const AXIOS_CONFIG = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL,
  baseOptions: {
    signal: ABORT_CONTROLLER.signal,
    // MONKEY PATCH
    timeout: 10000,
    baseURL: process.env.NEXT_PUBLIC_API_URL
  }
});
