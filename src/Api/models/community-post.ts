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
 * @interface CommunityPost
 */
export interface CommunityPost {

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    id: string;

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    title: string;

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    content: string;

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    imageUrl: string;

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    authorId: string;

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    authorName: string;

    /**
     * @type {boolean}
     * @memberof CommunityPost
     */
    anonymous: boolean;

    /**
     * @type {boolean}
     * @memberof CommunityPost
     */
    accepted: boolean;

    /**
     * @type {boolean}
     * @memberof CommunityPost
     */
    pinned: boolean;

    /**
     * @type {Date}
     * @memberof CommunityPost
     */
    acceptedAt: Date;

    /**
     * @type {Array<Comment>}
     * @memberof CommunityPost
     */
    comments: Array<Comment>;

    /**
     * @type {Array<string>}
     * @memberof CommunityPost
     */
    likes: Array<string>;

    /**
     * @type {string}
     * @memberof CommunityPost
     */
    userAvatar: string;
}
