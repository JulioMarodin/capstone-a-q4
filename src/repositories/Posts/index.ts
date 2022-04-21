import { getRepository, Repository } from 'typeorm';
import { Posts } from '../../entities/Posts';
import { IdataUpdatePosts, IpostsRepo } from './interfaces';

class postsRepository implements IpostsRepo {
  private ormPostsRepo : Repository<Posts>;

  constructor() {
    this.ormPostsRepo = getRepository(Posts);
  }

  createPost = (post: Posts) => this.ormPostsRepo.create(post);

  savePost = async (post: Posts) => await this.ormPostsRepo.save(post);

  findPost = (id: string) => this.ormPostsRepo.findOne(id);

  findPosts = async () => await this.ormPostsRepo.find();

  updatePost = async (dataPost: IdataUpdatePosts, update: IdataUpdatePosts) => await this.ormPostsRepo.update(dataPost, update);

  deletePost = async (dataPost: IdataUpdatePosts) => await this.ormPostsRepo.delete(dataPost);
}

export default postsRepository;
