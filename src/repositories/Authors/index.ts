import { getRepository, Repository } from 'typeorm';
import { Authors } from '../../entities/Authors';
import { IAuthor, IAuthorsRepo, IdataUpdate } from './interfaces';

class AuthorsRepository implements IAuthorsRepo {
  private ormRepo: Repository<Authors>;

  constructor() {
    this.ormRepo = getRepository(Authors);
  }

  createAuthor = (author: IAuthor) => this.ormRepo.create(author);

  saveAuthor = async (author: IAuthor) => await this.ormRepo.save(author);

  findAuthor = async (name: string) => await this.ormRepo.findOne(name);

  findAuthors = async () => await this.ormRepo.find();

  updateAuthor = async (dataAuthor: IdataUpdate, update: IdataUpdate) => await this.ormRepo.update(dataAuthor, update);

  deleteAuthor = async (dataAuthor: IdataUpdate) => await this.ormRepo.delete(dataAuthor);
}

export default AuthorsRepository;
