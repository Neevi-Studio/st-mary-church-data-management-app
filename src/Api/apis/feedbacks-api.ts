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
import { CreateFeedbackDto } from '../models';
import { PopulatedFeedBack } from '../models';
/**
 * FeedbacksApi - axios parameter creator
 * @export
 */
export const FeedbacksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFeedback: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteFeedback.');
            }
            const localVarPath = `/feedbacks/{id}`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllFeedbacks: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/feedbacks`;
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
         * @param {CreateFeedbackDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitFeedback: async (body: CreateFeedbackDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling submitFeedback.');
            }
            const localVarPath = `/feedbacks`;
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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers!['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FeedbacksApi - functional programming interface
 * @export
 */
export const FeedbacksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFeedback(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await FeedbacksApiAxiosParamCreator(configuration).deleteFeedback(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllFeedbacks(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<PopulatedFeedBack>>>> {
            const localVarAxiosArgs = await FeedbacksApiAxiosParamCreator(configuration).getAllFeedbacks(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CreateFeedbackDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitFeedback(body: CreateFeedbackDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PopulatedFeedBack>>> {
            const localVarAxiosArgs = await FeedbacksApiAxiosParamCreator(configuration).submitFeedback(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FeedbacksApi - factory interface
 * @export
 */
export const FeedbacksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteFeedback(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return FeedbacksApiFp(configuration).deleteFeedback(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllFeedbacks(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<PopulatedFeedBack>>> {
            return FeedbacksApiFp(configuration).getAllFeedbacks(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateFeedbackDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitFeedback(body: CreateFeedbackDto, options?: AxiosRequestConfig): Promise<AxiosResponse<PopulatedFeedBack>> {
            return FeedbacksApiFp(configuration).submitFeedback(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FeedbacksApi - object-oriented interface
 * @export
 * @class FeedbacksApi
 * @extends {BaseAPI}
 */
export class FeedbacksApi extends BaseAPI {
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedbacksApi
     */
    public async deleteFeedback(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return FeedbacksApiFp(this.configuration).deleteFeedback(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedbacksApi
     */
    public async getAllFeedbacks(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<PopulatedFeedBack>>> {
        return FeedbacksApiFp(this.configuration).getAllFeedbacks(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CreateFeedbackDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FeedbacksApi
     */
    public async submitFeedback(body: CreateFeedbackDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<PopulatedFeedBack>> {
        return FeedbacksApiFp(this.configuration).submitFeedback(body, options).then((request) => request(this.axios, this.basePath));
    }
}
