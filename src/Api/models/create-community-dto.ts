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

import { Comment } from './comment';
 /**
 * 
 *
 * @export
 * @interface CreateCommunityDto
 */
export interface CreateCommunityDto {

    /**
     * @type {string}
     * @memberof CreateCommunityDto
     */
    title?: string;

    /**
     * @type {string}
     * @memberof CreateCommunityDto
     */
    content?: string;

    /**
     * @type {string}
     * @memberof CreateCommunityDto
     */
    imageUrl?: string;

    /**
     * @type {string}
     * @memberof CreateCommunityDto
     */
    createdBy?: string;

    /**
     * @type {boolean}
     * @memberof CreateCommunityDto
     */
    anonymous?: boolean;

    /**
     * @type {boolean}
     * @memberof CreateCommunityDto
     */
    accepted?: boolean;

    /**
     * @type {boolean}
     * @memberof CreateCommunityDto
     */
    pinned?: boolean;

    /**
     * @type {Date}
     * @memberof CreateCommunityDto
     */
    acceptedAt?: Date;

    /**
     * @type {Array<Comment>}
     * @memberof CreateCommunityDto
     */
    comments?: Array<Comment>;

    /**
     * @type {Array<string>}
     * @memberof CreateCommunityDto
     */
    likes?: Array<string>;
}
