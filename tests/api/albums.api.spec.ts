import { test, expect } from '../../fixtures/apiFixture';


test.describe('Albums API Testing', () => {


    test('GET albums',
        async ({ request }) => {


            const response =
                await request.get(
                    'https://jsonplaceholder.typicode.com/albums'
                );


            expect(response.status())
                .toBe(200);


            const body =
                await response.json();


            expect(body.length)
                .toBeGreaterThan(0);


        });



    test('GET album by id',
        async ({ request }) => {


            const response =
                await request.get(
                    'https://jsonplaceholder.typicode.com/albums/1'
                );


            expect(response.status())
                .toBe(200);


        });


});