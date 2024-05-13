/* tslint:disable */
/* eslint-disable */
/**
 * Tiker App API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface User
 */
export interface User {

    /**
     * @type {string}
     * @memberof User
     */
    id: string;

    /**
     * @type {string}
     * @memberof User
     */
    email: string;

    /**
     * @type {string}
     * @memberof User
     */
    password: string;

    /**
     * @type {string}
     * @memberof User
     */
    firstname: string;

    /**
     * @type {string}
     * @memberof User
     */
    lastname: string;

    /**
     * @type {string}
     * @memberof User
     */
    role: string;

    /**
     * @type {Date}
     * @memberof User
     */
    dateOfBirth: Date;

    /**
     * @type {string}
     * @memberof User
     */
    notificationsToken: string;

    /**
     * @type {Date}
     * @memberof User
     */
    lastSeen: Date;

    /**
     * @type {Date}
     * @memberof User
     */
    lastLogin: Date;

    /**
     * @type {string}
     * @memberof User
     */
    avatar: string;

    /**
     * @type {string}
     * @memberof User
     */
    appleId: string;

    /**
     * @type {string}
     * @memberof User
     */
    registerationMethod: string;
}
