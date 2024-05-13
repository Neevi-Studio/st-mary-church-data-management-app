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

import { SubmissionDTO } from './submission-dto';
 /**
 * 
 *
 * @export
 * @interface UpdateAssignmentDto
 */
export interface UpdateAssignmentDto {

    /**
     * @type {string}
     * @memberof UpdateAssignmentDto
     */
    assignmentName?: string;

    /**
     * @type {string}
     * @memberof UpdateAssignmentDto
     */
    assignmentDescription?: string;

    /**
     * @type {string}
     * @memberof UpdateAssignmentDto
     */
    assignmentDueDate?: string;

    /**
     * @type {number}
     * @memberof UpdateAssignmentDto
     */
    assignmentMaxPoints?: number;

    /**
     * @type {string}
     * @memberof UpdateAssignmentDto
     */
    assignmentType?: string;

    /**
     * @type {string}
     * @memberof UpdateAssignmentDto
     */
    notes?: string;

    /**
     * @type {string}
     * @memberof UpdateAssignmentDto
     */
    singleClass?: string;

    /**
     * @type {Array<SubmissionDTO>}
     * @memberof UpdateAssignmentDto
     */
    submittedBy?: Array<SubmissionDTO>;

    /**
     * @type {boolean}
     * @memberof UpdateAssignmentDto
     */
    isARepeatedAssignment?: boolean;
}