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
import { InvoiceDto } from '../models';
import { PaymentIntentDTO } from '../models';
import { PaymentsResponse } from '../models';
import { SubscriptionsResponse } from '../models';
/**
 * DonationsApi - axios parameter creator
 * @export
 */
export const DonationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelSubscription: async (subscriptionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'subscriptionId' is not null or undefined
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling cancelSubscription.');
            }
            const localVarPath = `/donations/cancel-subscription/{subscriptionId}`
                .replace(`{${"subscriptionId"}}`, encodeURIComponent(String(subscriptionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
         * @param {PaymentIntentDTO} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDonation: async (body: PaymentIntentDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createDonation.');
            }
            const localVarPath = `/donations`;
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
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerPayments: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/donations`;
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
        getSubscriptionInvoice: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getSubscriptionInvoice.');
            }
            const localVarPath = `/donations/invoice/{id}`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSubscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/donations/my-active-subscriptions`;
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
    }
};

/**
 * DonationsApi - functional programming interface
 * @export
 */
export const DonationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelSubscription(subscriptionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DonationsApiAxiosParamCreator(configuration).cancelSubscription(subscriptionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {PaymentIntentDTO} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDonation(body: PaymentIntentDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DonationsApiAxiosParamCreator(configuration).createDonation(body, options);
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
        async getCustomerPayments(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<PaymentsResponse>>> {
            const localVarAxiosArgs = await DonationsApiAxiosParamCreator(configuration).getCustomerPayments(options);
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
        async getSubscriptionInvoice(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InvoiceDto>>> {
            const localVarAxiosArgs = await DonationsApiAxiosParamCreator(configuration).getSubscriptionInvoice(id, options);
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
        async getSubscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SubscriptionsResponse>>> {
            const localVarAxiosArgs = await DonationsApiAxiosParamCreator(configuration).getSubscriptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DonationsApi - factory interface
 * @export
 */
export const DonationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelSubscription(subscriptionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DonationsApiFp(configuration).cancelSubscription(subscriptionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PaymentIntentDTO} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDonation(body: PaymentIntentDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DonationsApiFp(configuration).createDonation(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerPayments(options?: AxiosRequestConfig): Promise<AxiosResponse<PaymentsResponse>> {
            return DonationsApiFp(configuration).getCustomerPayments(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubscriptionInvoice(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InvoiceDto>> {
            return DonationsApiFp(configuration).getSubscriptionInvoice(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSubscriptions(options?: AxiosRequestConfig): Promise<AxiosResponse<SubscriptionsResponse>> {
            return DonationsApiFp(configuration).getSubscriptions(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DonationsApi - object-oriented interface
 * @export
 * @class DonationsApi
 * @extends {BaseAPI}
 */
export class DonationsApi extends BaseAPI {
    /**
     * 
     * @param {string} subscriptionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DonationsApi
     */
    public async cancelSubscription(subscriptionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DonationsApiFp(this.configuration).cancelSubscription(subscriptionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {PaymentIntentDTO} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DonationsApi
     */
    public async createDonation(body: PaymentIntentDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DonationsApiFp(this.configuration).createDonation(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DonationsApi
     */
    public async getCustomerPayments(options?: AxiosRequestConfig) : Promise<AxiosResponse<PaymentsResponse>> {
        return DonationsApiFp(this.configuration).getCustomerPayments(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DonationsApi
     */
    public async getSubscriptionInvoice(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InvoiceDto>> {
        return DonationsApiFp(this.configuration).getSubscriptionInvoice(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DonationsApi
     */
    public async getSubscriptions(options?: AxiosRequestConfig) : Promise<AxiosResponse<SubscriptionsResponse>> {
        return DonationsApiFp(this.configuration).getSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }
}