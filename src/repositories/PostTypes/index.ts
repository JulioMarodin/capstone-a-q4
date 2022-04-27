import { getRepository, Repository } from 'typeorm';
import { PostsTypes } from '../../entities/PostsTypes';
import { IPostsTypes, IDataUpdate, IPostsTypesRepo } from './interfaces';

class PostsTypesRepository implements IPostsTypesRepo {
    private ormRepo : Repository<PostsTypes>;

    constructor() {
        this.ormRepo = getRepository(PostsTypes);
    }

    findPostType = async (id: number) => await this.ormRepo.findOne(id);

    findPostsTypes = async () => await this.ormRepo.find();
}

export default PostsTypesRepository;
