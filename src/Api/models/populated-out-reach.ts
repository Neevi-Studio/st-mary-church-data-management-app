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

import { SingleClass } from './single-class';
import { User } from './user';
 /**
 * 
 *
 * @export
 * @interface PopulatedOutReach
 */
export interface PopulatedOutReach {

    /**
     * @type {string}
     * @memberof PopulatedOutReach
     */
    id: string;

    /**
     * @type {User}
     * @memberof PopulatedOutReach
     */
    user: User;

    /**
     * @type {SingleClass}
     * @memberof PopulatedOutReach
     */
    classId: SingleClass;

    /**
     * @type {Array<User>}
     * @memberof PopulatedOutReach
     */
    servants: Array<User>;

    /**
     * @type {string}
     * @memberof PopulatedOutReach
     */
    notes: string;

    /**
     * @type {Date}
     * @memberof PopulatedOutReach
     */
    dateTime: Date;

    /**
     * @type {Date}
     * @memberof PopulatedOutReach
     */
    doneAt: Date;

    /**
     * @type {string}
     * @memberof PopulatedOutReach
     */
    status: string;
}
