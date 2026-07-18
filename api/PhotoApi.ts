import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';


export class PhotoApi extends BaseApi {


    constructor(request: APIRequestContext) {

        super(request);

    }


    getPhotos() {

        return this.get('/photos');

    }


    getPhotoById(id: number) {

        return this.get(`/photos/${id}`);

    }


    getPhotosByAlbumId(id: number) {

        return this.get(`/photos?albumId=${id}`);

    }


    createPhoto(payload: any) {

        return this.post(
            '/photos',
            payload
        );

    }


    updatePhoto(
        id: number,
        payload: any
    ) {

        return this.put(
            `/photos/${id}`,
            payload
        );

    }


    deletePhoto(id: number) {

        return this.delete(
            `/photos/${id}`
        );

    }


}