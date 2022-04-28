import { getRepository, Repository, ILike } from 'typeorm';
import { Authors } from '../../entities/Authors';
import { IAuthor, IAuthorsRepo, IdataUpdate } from './interfaces';

class AuthorsRepository implements IAuthorsRepo {
  private ormRepo: Repository<Authors>;

  constructor() {
    this.ormRepo = getRepository(Authors);
  }

  createAuthor = (author: IAuthor) => this.ormRepo.create(author);

  saveAuthor = async (author: IAuthor) => await this.ormRepo.save(author);

  findAuthor = async (name: string | void) => await this.ormRepo.findOne({ where: { name } });

  findAuthors = async (name: string, page: number, limit: number) => {
    return await this.ormRepo.find({
      relations: ['books'],
      where: { name: ILike(`%${name}%`) },
      skip: page,
      take: limit,
      order: { name: 'ASC' },
    });
  };

  updateAuthor = async (dataAuthor: IdataUpdate, update: IdataUpdate) => await this.ormRepo.update(dataAuthor, update);

  deleteAuthor = async (dataAuthor: IdataUpdate) => await this.ormRepo.delete(dataAuthor);
}

export default AuthorsRepository;
