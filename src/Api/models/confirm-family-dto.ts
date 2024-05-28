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
 /**
 * 
 *
 * @export
 * @interface ConfirmFamilyDTO
 */
export interface ConfirmFamilyDTO {

    
    /**
     * @type {string}
     * @memberof ConfirmFamilyDTO
     */
    id: string;
    /**
     * @type {string}
     * @memberof ConfirmFamilyDTO
     */
    familyLastName: string;
    /**
     * @type {string}
     * @memberof ConfirmFamilyDTO
     */
    familyAddress: string;

    /**
     * @type {number}
     * @memberof ConfirmFamilyDTO
     */
    temporaryFamilyId: number;

    /**
     * @type {Array<ConfirmUserDTO>}
     * @memberof ConfirmFamilyDTO
     */
    individuals: Array<ConfirmUserDTO>;
}
