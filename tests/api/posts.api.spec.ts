import { test, expect } from '../../fixtures/apiFixture';
import { postData } from '../../data/postData';
import { postSchema } from '../../schemas/postSchema';
import { validateSchema } from '../../utils/schemaValidator';


test.describe('Posts API Testing', () => {


    test('GET all posts', async ({ postApi }) => {


        const response =
            await postApi.getAllPosts();


        expect(response.status())
            .toBe(200);


        const body =
            await response.json();


        expect(body.length)
            .toBeGreaterThan(0);


    });



    test('GET post by id', async ({ postApi }) => {


        const post =
            await postApi.getPostById(1);


        expect(post.id)
            .toBe(1);


        expect(post.title)
            .toBeTruthy();


        expect(post.body)
            .toBeTruthy();

        const response =
            await postApi.getPostResponse(1);

        expect(response.status())
            .toBe(200);

    });



    test('CREATE post', async ({ postApi }) => {


        const response =
            await postApi.createPost(
                postData.createPost
            );


        expect(response.status())
            .toBe(201);


        const body =
            await response.json();


        expect(body.title)
            .toBe(
                postData.createPost.title
            );


    });



    test('UPDATE post', async ({ postApi }) => {


        const response =
            await postApi.updatePost(
                1,
                {
                    title: "Updated Title",
                    body: "Updated Body",
                    userId: 1
                }
            );


        expect(response.status())
            .toBe(200);


    });



    test('DELETE post', async ({ postApi }) => {


        const response =
            await postApi.deletePost(1);


        expect(response.status())
            .toBe(200);


    });



    test('Validate post response schema',
        async ({ postApi }) => {


            const post =
                await postApi.getPostById(1);



            const isValid =
                validateSchema(
                    postSchema,
                    post
                );



            expect(isValid)
                .toBeTruthy();


        });


});