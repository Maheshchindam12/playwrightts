import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';


export class AlbumApi extends BaseApi {


    constructor(request: APIRequestContext) {

        super(request);

    }


    getAlbums() {

        return this.get('/albums');

    }


    getAlbumById(id: number) {

        return this.get(`/albums/${id}`);

    }


    getAlbumsByUserId(id: number) {

        return this.get(`/albums?userId=${id}`);

    }


    createAlbum(payload: any) {

        return this.post(
            '/albums',
            payload
        );

    }


    updateAlbum(
        id: number,
        payload: any
    ) {

        return this.put(
            `/albums/${id}`,
            payload
        );

    }


    deleteAlbum(id: number) {

        return this.delete(
            `/albums/${id}`
        );

    }

}