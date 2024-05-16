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

import { User } from './user';
 /**
 * 
 *
 * @export
 * @interface GeneratedSingleEventDTO
 */
export interface GeneratedSingleEventDTO {

    /**
     * @type {string}
     * @memberof GeneratedSingleEventDTO
     */
    id: string;


    /**
     * @type {string}
     * @memberof GeneratedSingleEventDTO
     */
    eventName: string;

    /**
     * @type {string}
     * @memberof GeneratedSingleEventDTO
     */
    eventType: string;

    /**
     * @type {string}
     * @memberof GeneratedSingleEventDTO
     */
    eventInfo: string;

    /**
     * @type {Date}
     * @memberof GeneratedSingleEventDTO
     */
    startDate: Date;

    /**
     * @type {Date}
     * @memberof GeneratedSingleEventDTO
     */
    endDate: Date;

    /**
     * @type {Array<string>}
     * @memberof GeneratedSingleEventDTO
     */
    classUsers?: Array<string>;

    /**
     * @type {Array<User>}
     * @memberof GeneratedSingleEventDTO
     */
    servants?: Array<User>;

    /**
     * @type {string}
     * @memberof GeneratedSingleEventDTO
     */
    trustee?: string;

    /**
     * @type {string}
     * @memberof GeneratedSingleEventDTO
     */
    classServiceTrustee?: string;
}
