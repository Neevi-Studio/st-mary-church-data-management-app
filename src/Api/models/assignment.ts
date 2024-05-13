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
import { PostSubmissionDTO } from './post-submission-dto';
 /**
 * 
 *
 * @export
 * @interface Assignment
 */
export interface Assignment {

    /**
     * @type {string}
     * @memberof Assignment
     */
    id: string;

    /**
     * @type {string}
     * @memberof Assignment
     */
    assignmentName: string;

    /**
     * @type {boolean}
     * @memberof Assignment
     */
    isARepeatedAssignment: boolean;

    /**
     * @type {string}
     * @memberof Assignment
     */
    assignmentDescription: string;

    /**
     * @type {Date}
     * @memberof Assignment
     */
    assignmentDueDate: Date;

    /**
     * @type {number}
     * @memberof Assignment
     */
    assignmentMaxPoints: number;

    /**
     * @type {string}
     * @memberof Assignment
     */
    assignmentType: string;

    /**
     * @type {ObjectId}
     * @memberof Assignment
     */
    singleClass: ObjectId;

    /**
     * @type {string}
     * @memberof Assignment
     */
    notes: string;

    /**
     * @type {Array<PostSubmissionDTO>}
     * @memberof Assignment
     */
    submittedBy: Array<PostSubmissionDTO>;

    /**
     * @type {Date}
     * @memberof Assignment
     */
    createdAt: Date;

    /**
     * @type {Date}
     * @memberof Assignment
     */
    updatedAt: Date;
}