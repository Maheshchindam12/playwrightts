import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';


export class UserApi extends BaseApi {


    constructor(request: APIRequestContext){
        super(request);
    }


    getUsers(){

        return this.get('/users');

    }


    getUserById(id:number){

        return this.get(`/users/${id}`);

    }


    createUser(payload:any){

        return this.post(
            '/users',
            payload
        );

    }


    updateUser(
        id:number,
        payload:any
    ){

        return this.put(
            `/users/${id}`,
            payload
        );

    }


    deleteUser(id:number){

        return this.delete(
            `/users/${id}`
        );

    }

}