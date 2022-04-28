import { getRepository, Repository, ILike } from 'typeorm';
import { Posts } from '../../entities/Posts';
import { IdataUpdatePosts, IpostsRepo } from './interfaces';

class PostsRepository implements IpostsRepo {
  private ormPostsRepo: Repository<Posts>;

  constructor() {
    this.ormPostsRepo = getRepository(Posts);
  }

  createPost = (post: Posts) => this.ormPostsRepo.create(post);

  savePost = (post: Posts) => this.ormPostsRepo.save(post);

  findPost = async (id: string) => await this.ormPostsRepo.findOne(id);

  findPosts = async (description: string, page: number, limit: number) => {
    return await this.ormPostsRepo.find({
      relations: ['book', 'author'],
      where: { visible: true, description: ILike(`%${description}%`) },
      skip: page,
      take: limit,
      order: { create_date: 'DESC' },
    });
  };

  findPostsByAuthor = async (id: number, page: number, limit: number) => await this.ormPostsRepo.find({
    relations: ['author', 'book'],
    where: { author: { id }, visible: true },
    skip: page,
    take: limit,
    order: { create_date: 'DESC' },
   });

  findPostsByUser = async (id: string, page: number, limit: number) => await this.ormPostsRepo.find({
    where: { user: { id } },
    skip: page,
    take: limit,
    order: { create_date: 'DESC' },
   });

  findPostsByBook = async (id: number, page: number, limit: number) => await this.ormPostsRepo.find({
    where: { book: { id }, visible: true },
    skip: page,
    take: limit,
    order: { create_date: 'DESC' },
   });

  updatePost = async (dataPost: IdataUpdatePosts, update: IdataUpdatePosts) => {
    return await this.ormPostsRepo.update(dataPost, update);
  };

  deletePost = async (dataPost: IdataUpdatePosts) => await this.ormPostsRepo.delete(dataPost);
}

export default PostsRepository;
