import { Configuration } from './configuration';
import globalAxios from 'axios';
import { getUser } from '../Contexts/AuthContext';

export const BaseUrl = "http://3.135.166.30:3333"; // DEPLOYED
// export const BaseUrl = "http://192.168.1.9:3333"; // GEORGE LOCAL
// export const BaseUrl = "http://192.168.66.152:3333"; // GEORGE LOCAL
// export const BaseUrl = "http://192.168.1.4:3333"; // BOTROS LOCAL

globalAxios.interceptors.request.use(async (config) => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }
  config.headers = config.headers ?? {};

  const userSession = await getUser();
  config.headers.Authorization = `Bearer ${userSession?.authToken}`;
  return config;
});

const ABORT_CONTROLLER = new AbortController();

export const AXIOS_CONFIG = new Configuration({
  basePath: BaseUrl,
  baseOptions: {
    signal: ABORT_CONTROLLER.signal,
    timeout: 20000,
  }
});
