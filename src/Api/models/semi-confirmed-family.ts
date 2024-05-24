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

import { ConfirmUserDTO } from './confirm-user-dto';
import { ObjectId } from './object-id';
 /**
 * 
 *
 * @export
 * @interface SemiConfirmedFamily
 */
export interface SemiConfirmedFamily {

    /**
     * @type {ObjectId}
     * @memberof SemiConfirmedFamily
     */
    id: ObjectId;

    /**
     * @type {string}
     * @memberof SemiConfirmedFamily
     */
    familyLastName: string;

    /**
     * @type {string}
     * @memberof SemiConfirmedFamily
     */
    familyAddress: string;

    /**
     * @type {number}
     * @memberof SemiConfirmedFamily
     */
    temporaryFamilyId: number;

    /**
     * @type {Array<ConfirmUserDTO>}
     * @memberof SemiConfirmedFamily
     */
    individuals: Array<ConfirmUserDTO>;

    /**
     * @type {Date}
     * @memberof SemiConfirmedFamily
     */
    createdAt: Date;

    /**
     * @type {Date}
     * @memberof SemiConfirmedFamily
     */
    updatedAt: Date;
}
