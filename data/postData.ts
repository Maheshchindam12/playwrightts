import {
    CreatePostRequest,
    UpdatePostRequest
} from '../types/post.types';


export const postData: {

    createPost: CreatePostRequest;

    updatePost: UpdatePostRequest;

} = {


    createPost: {

        title: "Playwright API Testing",

        body: "Automation using Playwright",

        userId: 1

    },


    updatePost: {

        title: "Updated Post Title",

        body: "Updated Post Body",

        userId: 1

    }


};