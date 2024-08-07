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
 * @interface UpdateCommunityDto
 */
export interface UpdateCommunityDto {

    /**
     * @type {string}
     * @memberof UpdateCommunityDto
     */
    title?: string;

    /**
     * @type {string}
     * @memberof UpdateCommunityDto
     */
    content?: string;

    /**
     * @type {string}
     * @memberof UpdateCommunityDto
     */
    imageUrl?: string;

    /**
     * @type {string}
     * @memberof UpdateCommunityDto
     */
    createdBy?: string;

    /**
     * @type {boolean}
     * @memberof UpdateCommunityDto
     */
    anonymous?: boolean;

    /**
     * @type {boolean}
     * @memberof UpdateCommunityDto
     */
    accepted?: boolean;

    /**
     * @type {boolean}
     * @memberof UpdateCommunityDto
     */
    pinned?: boolean;

    /**
     * @type {Date}
     * @memberof UpdateCommunityDto
     */
    acceptedAt?: Date;

    /**
     * @type {Array<Comment>}
     * @memberof UpdateCommunityDto
     */
    comments?: Array<Comment>;

    /**
     * @type {Array<string>}
     * @memberof UpdateCommunityDto
     */
    likes?: Array<string>;
}
