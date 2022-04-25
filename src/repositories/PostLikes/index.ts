import { getRepository, Repository } from 'typeorm';
import { PostLike } from '../../entities/PostLike';
import { IdataUpdatePostLikes, IPostLikesRepo } from './interfaces';

class postsLikesRepository implements IPostLikesRepo {
  private ormPostsLikesRepo : Repository<PostLike>;

  constructor() {
    this.ormPostsLikesRepo = getRepository(PostLike);
  }

  createLike = (like: PostLike) => this.ormPostsLikesRepo.create(like);

  saveLike = async (like: PostLike) => await this.ormPostsLikesRepo.save(like);

  findLikes = async () => await this.ormPostsLikesRepo.find();

  updateLike = async (dataLike: IdataUpdatePostLikes, update: IdataUpdatePostLikes) => await this.ormPostsLikesRepo.update(dataLike, update);

  deleteLike = async (dataLike: IdataUpdatePostLikes) => await this.ormPostsLikesRepo.delete(dataLike);
}

export default postsLikesRepository;
