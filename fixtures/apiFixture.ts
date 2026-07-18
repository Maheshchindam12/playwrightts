import { test as base } from '@playwright/test';

import { PostApi } from '../api/PostApi';
import { UserApi } from '../api/UserApi';
import { CommentApi } from '../api/CommentApi';
import { AlbumApi } from '../api/AlbumApi';
import { PhotoApi } from '../api/PhotoApi';
import { TodoApi } from '../api/TodoApi';



type ApiFixtures = {


    postApi: PostApi;

    userApi: UserApi;

    commentApi: CommentApi;

    albumApi: AlbumApi;

    photoApi: PhotoApi;

    todoApi: TodoApi;

};



export const test =
    base.extend<ApiFixtures>({



        postApi: async ({ request }, use) => {

            await use(
                new PostApi(request)
            );

        },



        userApi: async ({ request }, use) => {

            await use(
                new UserApi(request)
            );

        },



        commentApi: async ({ request }, use) => {

            await use(
                new CommentApi(request)
            );

        },



        albumApi: async ({ request }, use) => {

            await use(
                new AlbumApi(request)
            );

        },



        photoApi: async ({ request }, use) => {

            await use(
                new PhotoApi(request)
            );

        },



        todoApi: async ({ request }, use) => {

            await use(
                new TodoApi(request)
            );

        }


    });



export { expect } from '@playwright/test';