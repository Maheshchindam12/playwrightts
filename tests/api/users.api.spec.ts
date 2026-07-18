import { test, expect } from '../../fixtures/apiFixture';


test.describe('Users API Testing', () => {


    test('GET all users', async ({ userApi }) => {

        const response =
            await userApi.getUsers();


        expect(response.status())
            .toBe(200);


        const body =
            await response.json();


        expect(body.length)
            .toBeGreaterThan(0);


    });



    test('GET user by id', async ({ userApi }) => {


        const response =
            await userApi.getUserById(1);


        expect(response.status())
            .toBe(200);


        const body =
            await response.json();


        expect(body.id)
            .toBe(1);


        expect(body.email)
            .toContain('@');


    });



    test('GET invalid user', async ({ userApi }) => {


        const response =
            await userApi.getUserById(9999);


        expect(response.status())
            .toBe(404);


    });



    test('CREATE user', async ({ userApi }) => {


        const response =
            await userApi.createUser({

                name: "John",

                username: "john123",

                email: "john@test.com"

            });


        expect(response.status())
            .toBe(201);


    });



    test('UPDATE user', async ({ userApi }) => {


        const response =
            await userApi.updateUser(
                1,
                {
                    name: "Updated User"
                }
            );


        expect(response.status())
            .toBe(200);


    });



    test('DELETE user', async ({ userApi }) => {


        const response =
            await userApi.deleteUser(1);


        expect(response.status())
            .toBe(200);


    });


});