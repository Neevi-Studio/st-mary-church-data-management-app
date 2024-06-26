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

import { AssignmentType } from './assignment-type';
import { ObjectId } from './object-id';
 /**
 * 
 *
 * @export
 * @interface CreateAttendanceDto
 */
export interface CreateAttendanceDto {

    /**
     * @type {ObjectId}
     * @memberof CreateAttendanceDto
     */
    service: ObjectId;

    /**
     * @type {string}
     * @memberof CreateAttendanceDto
     */
    grade: string;

    /**
     * @type {ObjectId}
     * @memberof CreateAttendanceDto
     */
    singleClass: ObjectId;

    /**
     * @type {ObjectId}
     * @memberof CreateAttendanceDto
     */
    user: ObjectId;

    /**
     * @type {Array<AssignmentType>}
     * @memberof CreateAttendanceDto
     */
    assignment?: Array<AssignmentType>;

    /**
     * @type {Date}
     * @memberof CreateAttendanceDto
     */
    dateTime: Date;

    /**
     * @type {boolean}
     * @memberof CreateAttendanceDto
     */
    present: boolean;

    /**
     * @type {string}
     * @memberof CreateAttendanceDto
     */
    notes?: string;

    /**
     * @type {boolean}
     * @memberof CreateAttendanceDto
     */
    tardiness: boolean;

    /**
     * @type {boolean}
     * @memberof CreateAttendanceDto
     */
    excusedAbsence: boolean;

    /**
     * @type {boolean}
     * @memberof CreateAttendanceDto
     */
    badBehavior: boolean;
}
