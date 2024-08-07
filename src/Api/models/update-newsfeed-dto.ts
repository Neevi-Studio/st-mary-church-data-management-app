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
 * @interface UpdateNewsfeedDto
 */
export interface UpdateNewsfeedDto {

    /**
     * @type {Date}
     * @memberof UpdateNewsfeedDto
     */
    createdAt?: Date;

    /**
     * @type {string}
     * @memberof UpdateNewsfeedDto
     */
    id?: string;

    /**
     * @type {string}
     * @memberof UpdateNewsfeedDto
     */
    title?: string;

    /**
     * @type {string}
     * @memberof UpdateNewsfeedDto
     */
    content?: string;

    /**
     * @type {string}
     * @memberof UpdateNewsfeedDto
     */
    imageUrl?: string;

    /**
     * @type {string}
     * @memberof UpdateNewsfeedDto
     */
    authorId?: string;

    /**
     * @type {Array<Comment>}
     * @memberof UpdateNewsfeedDto
     */
    comments?: Array<Comment>;

    /**
     * @type {Array<string>}
     * @memberof UpdateNewsfeedDto
     */
    likes?: Array<string>;
}