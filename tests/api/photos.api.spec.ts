import { test, expect } from '@playwright/test';


test.describe('Photos API Testing', () => {


    test('GET photos',
        async ({ request }) => {


            const response =
                await request.get(
                    'https://jsonplaceholder.typicode.com/photos'
                );


            expect(response.status())
                .toBe(200);


            const body =
                await response.json();


            expect(body[0].url)
                .toContain('http');


        });



    test('GET photo by id',
        async ({ request }) => {


            const response =
                await request.get(
                    'https://jsonplaceholder.typicode.com/photos/1'
                );


            expect(response.status())
                .toBe(200);


        });


});