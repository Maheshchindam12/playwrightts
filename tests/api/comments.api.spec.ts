import { test, expect } from '../../fixtures/apiFixture';


test.describe('Comments API Testing', () => {


    test('GET all comments', async ({ commentApi }) => {


        const response =
            await commentApi.getComments();


        expect(response.status())
            .toBe(200);


        const body =
            await response.json();


        expect(body.length)
            .toBeGreaterThan(0);


    });



    test('GET comment by id', async ({ commentApi }) => {


        const response =
            await commentApi.getCommentById(1);


        expect(response.status())
            .toBe(200);


        const body =
            await response.json();


        expect(body.id)
            .toBe(1);


    });



    test('GET comments by post id',
        async ({ commentApi }) => {


            const response =
                await commentApi.getCommentsByPostId(1);


            expect(response.status())
                .toBe(200);


            const body =
                await response.json();


            expect(body[0].postId)
                .toBe(1);


        });



    test('CREATE comment',
        async ({ commentApi }) => {


            const response =
                await commentApi.createComment({

                    postId: 1,

                    name: "Test Comment",

                    email: "test@test.com",

                    body: "API Testing"

                });


            expect(response.status())
                .toBe(201);


        });


});