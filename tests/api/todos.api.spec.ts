import { test, expect } from '@playwright/test';


test.describe('Todos API Testing', () => {


    test('GET all todos',
        async ({ request }) => {


            const response =
                await request.get(
                    'https://jsonplaceholder.typicode.com/todos'
                );


            expect(response.status())
                .toBe(200);



            const body =
                await response.json();


            expect(body.length)
                .toBeGreaterThan(0);


        });



    test('GET completed todos',
        async ({ request }) => {


            const response =
                await request.get(
                    'https://jsonplaceholder.typicode.com/todos?completed=true'
                );



            expect(response.status())
                .toBe(200);



            const body =
                await response.json();


            expect(body[0].completed)
                .toBeTruthy();


        });



    test('CREATE todo',
        async ({ request }) => {


            const response =
                await request.post(
                    'https://jsonplaceholder.typicode.com/todos',
                    {
                        data: {
                            title: "Automation",
                            completed: false,
                            userId: 1
                        }
                    }
                );



            expect(response.status())
                .toBe(201);


        });


});