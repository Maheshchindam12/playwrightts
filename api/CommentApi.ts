import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';


export class CommentApi extends BaseApi {


constructor(request:APIRequestContext){

    super(request);

}



getComments(){

    return this.get('/comments');

}



getCommentById(id:number){

    return this.get(`/comments/${id}`);

}



getCommentsByPostId(id:number){

    return this.get(`/comments?postId=${id}`);

}



createComment(payload:any){

    return this.post(
        '/comments',
        payload
    );

}


}