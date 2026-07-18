export interface User {


    id: number;

    name: string;

    username: string;

    email: string;


}


export interface CreateUserRequest {


    name: string;

    username: string;

    email: string;


}


export interface UpdateUserRequest {


    name?: string;

    username?: string;

    email?: string;


}