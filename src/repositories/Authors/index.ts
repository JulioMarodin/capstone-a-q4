import { getRepository, Repository } from 'typeorm';
import { Authors } from '../../entities/Authors';
import { IAuthor, IAuthorsRepo, IdataUpdate } from './interfaces';

class authorsRepository implements IAuthorsRepo {
  private ormRepo: Repository<Authors>;

  constructor() {
    this.ormRepo = getRepository(Authors);
  }

  createAuthor = (author: IAuthor) => this.ormRepo.create(author);

  saveAuthor = async (author: IAuthor) => await this.ormRepo.save(author);

  findAuthor = async (id: string) => await this.ormRepo.findOne(id);

  findAuthors = async () => await this.ormRepo.find();

  updateAuthor = async (dataAuthor: IdataUpdate, update: IdataUpdate) => await this.ormRepo.update(dataAuthor, update);

  deleteAuthor = async (dataAuthor: IdataUpdate) => await this.ormRepo.delete(dataAuthor);
}

export default authorsRepository;