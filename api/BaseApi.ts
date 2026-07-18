import { APIRequestContext } from '@playwright/test';
import { AppConfig } from '../constants/AppConfig';
import { ApiLogger } from '../utils/apiLogger';


export class BaseApi {


    constructor(
        protected request: APIRequestContext
    ) { }



    async get(endpoint: string) {


        const url =
            `${AppConfig.apiUrl}${endpoint}`;


        ApiLogger.logRequest(
            'GET',
            url
        );


        const response =
            await this.request.get(url);



        const body =
            await response.json();



        ApiLogger.logResponse(
            response.status(),
            body
        );



        return response;


    }


    async post(
        endpoint: string,
        data: any
    ) {


        const url =
            `${AppConfig.apiUrl}${endpoint}`;



        ApiLogger.logRequest(
            'POST',
            url,
            data
        );



        const response =
            await this.request.post(
                url,
                {
                    data
                }
            );



        const body =
            await response.json();



        ApiLogger.logResponse(
            response.status(),
            body
        );



        return response;


    }



    async put(
        endpoint: string,
        data: any
    ) {

        return await this.request.put(
            `${AppConfig.apiUrl}${endpoint}`,
            {
                data
            }
        );

    }



    async patch(
        endpoint: string,
        data: any
    ) {

        return await this.request.patch(
            `${AppConfig.apiUrl}${endpoint}`,
            {
                data
            }
        );

    }



    async delete(endpoint: string) {


        const url =
            `${AppConfig.apiUrl}${endpoint}`;


        ApiLogger.logRequest(
            'DELETE',
            url
        );

        const response =
            await this.request.delete(url);



        console.log(
            "DELETE Status:",
            response.status()
        );



        return response;


    }

}