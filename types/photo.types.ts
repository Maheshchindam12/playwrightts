export interface Photo {


    albumId: number;

    id: number;

    title: string;

    url: string;

    thumbnailUrl: string;


}


export interface CreatePhotoRequest {


    albumId: number;

    title: string;

    url: string;

    thumbnailUrl: string;


}   