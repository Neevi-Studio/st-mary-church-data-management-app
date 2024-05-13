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

import { RepeatedAssignment } from './repeated-assignment';
import { Service } from './service';
import { SingleClassTimeSlot } from './single-class-time-slot';
import { User } from './user';
 /**
 * 
 *
 * @export
 * @interface PopulatedClass
 */
export interface PopulatedClass {

    /**
     * @type {string}
     * @memberof PopulatedClass
     */
    id: string;

    /**
     * @type {string}
     * @memberof PopulatedClass
     */
    className: string;

    /**
     * @type {Service}
     * @memberof PopulatedClass
     */
    classService: Service;

    /**
     * @type {Array<User>}
     * @memberof PopulatedClass
     */
    classServants: Array<User>;

    /**
     * @type {Array<User>}
     * @memberof PopulatedClass
     */
    classUsers: Array<User>;

    /**
     * @type {User}
     * @memberof PopulatedClass
     */
    trustee: User;

    /**
     * @type {string}
     * @memberof PopulatedClass
     */
    classGrade: string;

    /**
     * @type {string}
     * @memberof PopulatedClass
     */
    notes?: string;

    /**
     * @type {Array<number>}
     * @memberof PopulatedClass
     */
    byweekday: Array<number>;

    /**
     * @type {Array<SingleClassTimeSlot>}
     * @memberof PopulatedClass
     */
    timeSlots: Array<SingleClassTimeSlot>;

    /**
     * @type {Array<RepeatedAssignment>}
     * @memberof PopulatedClass
     */
    repeatedAssignments: Array<RepeatedAssignment>;

    /**
     * @type {string}
     * @memberof PopulatedClass
     */
    rrule?: string;
}
