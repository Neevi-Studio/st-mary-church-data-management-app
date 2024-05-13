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

import { ObjectId } from './object-id';
 /**
 * 
 *
 * @export
 * @interface CreateWeeklyCallDto
 */
export interface CreateWeeklyCallDto {

    /**
     * @type {ObjectId}
     * @memberof CreateWeeklyCallDto
     */
    user: ObjectId;

    /**
     * @type {ObjectId}
     * @memberof CreateWeeklyCallDto
     */
    responsibleServant: ObjectId;

    /**
     * @type {ObjectId}
     * @memberof CreateWeeklyCallDto
     */
    serviceTrustee: ObjectId;

    /**
     * @type {ObjectId}
     * @memberof CreateWeeklyCallDto
     */
    classTrustee: ObjectId;

    /**
     * @type {ObjectId}
     * @memberof CreateWeeklyCallDto
     */
    classId: ObjectId;

    /**
     * @type {string}
     * @memberof CreateWeeklyCallDto
     */
    notes?: string;

    /**
     * @type {Date}
     * @memberof CreateWeeklyCallDto
     */
    dateTime: Date;

    /**
     * @type {string}
     * @memberof CreateWeeklyCallDto
     */
    status: string;
}
