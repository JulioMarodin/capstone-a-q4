import { getRepository, Repository } from 'typeorm';
import { Posts } from '../../entities/Posts';
import { IdataUpdatePosts, IpostsRepo } from './interfaces';

class PostsRepository implements IpostsRepo {
  private ormPostsRepo : Repository<Posts>;

  constructor() {
    this.ormPostsRepo = getRepository(Posts);
  }

  createPost = (post: Posts) => this.ormPostsRepo.create(post);

  savePost = (post: Posts) => this.ormPostsRepo.save(post);

  findPost = async (id: string) => await this.ormPostsRepo.findOne(id);

  findPostsByAuthor = async (id: string) => await this.ormPostsRepo.find({ where: { author_id: { id } } });

  findPosts = async () => await this.ormPostsRepo.find();

  updatePost = async (dataPost: IdataUpdatePosts, update: IdataUpdatePosts) => await this.ormPostsRepo.update(dataPost, update);

  deletePost = async (dataPost: IdataUpdatePosts) => await this.ormPostsRepo.delete(dataPost);
}

export default PostsRepository;
