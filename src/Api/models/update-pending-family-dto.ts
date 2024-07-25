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

import { StudentDto } from './student-dto';
 /**
 * 
 *
 * @export
 * @interface UpdatePendingFamilyDto
 */
export interface UpdatePendingFamilyDto {

    /**
     * @type {string}
     * @memberof UpdatePendingFamilyDto
     */
    familyLastName?: string;

    /**
     * @type {string}
     * @memberof UpdatePendingFamilyDto
     */
    familyAddress?: string;

    /**
     * @type {number}
     * @memberof UpdatePendingFamilyDto
     */
    temporaryFamilyId?: number;

    /**
     * @type {number}
     * @memberof UpdatePendingFamilyDto
     */
    familyId?: number;

    /**
     * @type {Array<StudentDto>}
     * @memberof UpdatePendingFamilyDto
     */
    individuals?: Array<StudentDto>;

    /**
     * @type {Date}
     * @memberof UpdatePendingFamilyDto
     */
    createdAt?: Date;

    /**
     * @type {Date}
     * @memberof UpdatePendingFamilyDto
     */
    updatedAt?: Date;
}
