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

import { PopulatedComment } from './populated-comment';
import { User } from './user';
 /**
 * 
 *
 * @export
 * @interface PopulatedPost
 */
export interface PopulatedPost {

    /**
     * @type {string}
     * @memberof PopulatedPost
     */
    id?: string;

    /**
     * @type {Date}
     * @memberof PopulatedPost
     */
    createdAt?: Date;

    /**
     * @type {string}
     * @memberof PopulatedPost
     */
    title?: string;

    /**
     * @type {string}
     * @memberof PopulatedPost
     */
    content?: string;

    /**
     * @type {string}
     * @memberof PopulatedPost
     */
    imageUrl?: string;

    /**
     * @type {boolean}
     * @memberof PopulatedPost
     */
    anonymous?: boolean;

    /**
     * @type {boolean}
     * @memberof PopulatedPost
     */
    accepted?: boolean;

    /**
     * @type {boolean}
     * @memberof PopulatedPost
     */
    pinned?: boolean;

    /**
     * @type {Date}
     * @memberof PopulatedPost
     */
    acceptedAt?: Date;

    /**
     * @type {User}
     * @memberof PopulatedPost
     */
    createdBy: User;

    /**
     * @type {Array<User>}
     * @memberof PopulatedPost
     */
    likes: Array<User>;

    /**
     * @type {Array<PopulatedComment>}
     * @memberof PopulatedPost
     */
    comments: Array<PopulatedComment>;
}
