import { UpdateResult, DeleteResult } from 'typeorm';
import { Posts } from '../../entities/Posts';

interface IdataUpdatePosts {
  [key:string]:string | number;
}

interface IpostsRepo {
  createPost:(post:Posts)=>Posts;
  savePost:(post:Posts)=>void;
  findPost:(id:string)=>Promise<Posts>;
  findPosts:()=>Promise<Array<Posts>>;
  findPostsByAuthor:(id:string)=>Promise<Array<Posts>>;
  updatePost:(dataPost:IdataUpdatePosts, update:IdataUpdatePosts)=>Promise<UpdateResult>;
  deletePost:(dataPost:IdataUpdatePosts)=>Promise<DeleteResult>;
}

export { IdataUpdatePosts, IpostsRepo };
