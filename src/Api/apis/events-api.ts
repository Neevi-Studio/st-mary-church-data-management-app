/* tslint:disable */
/* eslint-disable */
/**
 * Sunday School API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CreateEventDto } from '../models';
import { Event } from '../models';
import { GeneratedEventsDTO } from '../models';
import { UpdateEventDto } from '../models';
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateEventDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEvent: async (body: CreateEventDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createEvent.');
            }
            const localVarPath = `/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEvent: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteEvent.');
            }
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Date} startDate 
         * @param {Date} endDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEvents: async (startDate: Date, endDate: Date, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startDate' is not null or undefined
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling getAllEvents.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling getAllEvents.');
            }
            const localVarPath = `/events/{startDate}/{endDate}`
                .replace(`{${"startDate"}}`, encodeURIComponent(String(startDate)))
                .replace(`{${"endDate"}}`, encodeURIComponent(String(endDate)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneEvent: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getOneEvent.');
            }
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateEventDto} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEvent: async (body: UpdateEventDto, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateEvent.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateEvent.');
            }
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateEventDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEvent(body: CreateEventDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Event>>> {
            const localVarAxiosArgs = await EventsApiAxiosParamCreator(configuration).createEvent(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEvent(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await EventsApiAxiosParamCreator(configuration).deleteEvent(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {Date} startDate 
         * @param {Date} endDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllEvents(startDate: Date, endDate: Date, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GeneratedEventsDTO>>> {
            const localVarAxiosArgs = await EventsApiAxiosParamCreator(configuration).getAllEvents(startDate, endDate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneEvent(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Event>>> {
            const localVarAxiosArgs = await EventsApiAxiosParamCreator(configuration).getOneEvent(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateEventDto} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEvent(body: UpdateEventDto, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Event>>> {
            const localVarAxiosArgs = await EventsApiAxiosParamCreator(configuration).updateEvent(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CreateEventDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEvent(body: CreateEventDto, options?: AxiosRequestConfig): Promise<AxiosResponse<Event>> {
            return EventsApiFp(configuration).createEvent(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEvent(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return EventsApiFp(configuration).deleteEvent(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Date} startDate 
         * @param {Date} endDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllEvents(startDate: Date, endDate: Date, options?: AxiosRequestConfig): Promise<AxiosResponse<GeneratedEventsDTO>> {
            return EventsApiFp(configuration).getAllEvents(startDate, endDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneEvent(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Event>> {
            return EventsApiFp(configuration).getOneEvent(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateEventDto} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEvent(body: UpdateEventDto, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Event>> {
            return EventsApiFp(configuration).updateEvent(body, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI {
    /**
     * 
     * @param {CreateEventDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public async createEvent(body: CreateEventDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<Event>> {
        return EventsApiFp(this.configuration).createEvent(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public async deleteEvent(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return EventsApiFp(this.configuration).deleteEvent(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public async getAllEvents(startDate: Date, endDate: Date, options?: AxiosRequestConfig) : Promise<AxiosResponse<GeneratedEventsDTO>> {
        return EventsApiFp(this.configuration).getAllEvents(startDate, endDate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public async getOneEvent(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Event>> {
        return EventsApiFp(this.configuration).getOneEvent(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateEventDto} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public async updateEvent(body: UpdateEventDto, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Event>> {
        return EventsApiFp(this.configuration).updateEvent(body, id, options).then((request) => request(this.axios, this.basePath));
    }
}
