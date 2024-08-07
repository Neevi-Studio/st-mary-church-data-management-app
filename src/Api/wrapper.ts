import { Configuration } from './configuration';
import globalAxios from 'axios';
import { getCookie } from 'cookies-next';


globalAxios.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = getCookie('saintmary-dashToken')
    if (token)
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const ABORT_CONTROLLER = new AbortController();
export const AXIOS_CONFIG = new Configuration({
  basePath: 'https://api.saint-mary.net',
  // basePath: 'http://localhost:3333',
  // basePath: process.env.NEXT_PUBLIC_API_URL,
  baseOptions: {
    signal: ABORT_CONTROLLER.signal,
    // MONKEY PATCH
    timeout: 100000,
    basePath: 'https://api.saint-mary.net',
    // basePath: 'http://localhost:3333',
    // baseURL: process.env.NEXT_PUBLIC_API_URL
  }
});
