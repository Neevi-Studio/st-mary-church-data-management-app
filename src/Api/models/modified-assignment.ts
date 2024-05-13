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

import { PostSubmissionDTO } from './post-submission-dto';
 /**
 * 
 *
 * @export
 * @interface ModifiedAssignment
 */
export interface ModifiedAssignment {

    /**
     * @type {string}
     * @memberof ModifiedAssignment
     */
    id: string;

    /**
     * @type {string}
     * @memberof ModifiedAssignment
     */
    assignmentName: string;

    /**
     * @type {string}
     * @memberof ModifiedAssignment
     */
    assignmentDescription: string;

    /**
     * @type {Date}
     * @memberof ModifiedAssignment
     */
    assignmentDueDate: Date;

    /**
     * @type {number}
     * @memberof ModifiedAssignment
     */
    assignmentMaxPoints: number;

    /**
     * @type {string}
     * @memberof ModifiedAssignment
     */
    assignmentType: string;

    /**
     * @type {string}
     * @memberof ModifiedAssignment
     */
    notes: string;

    /**
     * @type {PostSubmissionDTO}
     * @memberof ModifiedAssignment
     */
    userSubmission: PostSubmissionDTO;
}
