import { UpdateResult, DeleteResult } from 'typeorm';
import { PostLike } from '../../entities/PostLike';

interface IdataUpdatePostLikes {
    [key:string]:string | number;
}

interface IPostLikesRepo {
    createLike:(like:PostLike)=>PostLike;
    saveLike:(like:PostLike)=>void;
    findLikes:()=>Promise<Array<PostLike>>;
    updateLike:(dataLike:IdataUpdatePostLikes, update:IdataUpdatePostLikes)=>Promise<UpdateResult>;
    deleteLike:(dataLike:IdataUpdatePostLikes)=>Promise<DeleteResult>;
}

export { IdataUpdatePostLikes, IPostLikesRepo };
