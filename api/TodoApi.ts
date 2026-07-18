import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';


export class TodoApi extends BaseApi {


    constructor(request: APIRequestContext) {

        super(request);

    }


    getTodos() {

        return this.get('/todos');

    }


    getTodoById(id: number) {

        return this.get(`/todos/${id}`);

    }


    getTodosByUserId(id: number) {

        return this.get(`/todos?userId=${id}`);

    }


    getCompletedTodos() {

        return this.get(
            '/todos?completed=true'
        );

    }


    createTodo(payload: any) {

        return this.post(
            '/todos',
            payload
        );

    }


    updateTodo(
        id: number,
        payload: any
    ) {

        return this.put(
            `/todos/${id}`,
            payload
        );

    }


    deleteTodo(id: number) {

        return this.delete(
            `/todos/${id}`
        );

    }


}