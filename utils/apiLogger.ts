export class ApiLogger {


    static logRequest(
        method:string,
        url:string,
        body?:any
    ){

        console.log('\n========== REQUEST ==========');

        console.log('Method:', method);

        console.log('URL:', url);


        if(body){

            console.log(
                'Payload:',
                JSON.stringify(
                    body,
                    null,
                    2
                )
            );

        }

        console.log(
            '============================\n'
        );

    }



    static logResponse(
        status:number,
        body:any
    ){

        console.log('\n========== RESPONSE ==========');

        console.log(
            'Status:',
            status
        );


        console.log(
            'Body:',
            JSON.stringify(
                body,
                null,
                2
            )
        );


        console.log(
            '==============================\n'
        );

    }

}