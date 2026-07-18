import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';

import {
    CreatePostRequest,
    UpdatePostRequest,
    Post
} from '../types/post.types';


export class PostApi extends BaseApi {


    constructor(request: APIRequestContext) {

        super(request);

    }

    getPostResponse(id: number) {

        return this.get(`/posts/${id}`);

    }


    getAllPosts() {

        return this.get('/posts');

    }



    async getPostById(
        id: number
    ): Promise<Post> {


        const response =
            await this.get(`/posts/${id}`);


        return await response.json();

    }



    createPost(
        payload: CreatePostRequest
    ) {

        return this.post(
            '/posts',
            payload
        );

    }



    updatePost(
        id: number,
        payload: UpdatePostRequest
    ) {

        return this.put(
            `/posts/${id}`,
            payload
        );

    }


    deletePost(
        id: number
    ) {

        return this.delete(
            `/posts/${id}`
        );

    }


}