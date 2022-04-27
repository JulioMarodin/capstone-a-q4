import { getRepository, Repository } from 'typeorm';
import { UserBooks } from '../../entities/UserBooks';
import { IUserBooks, IUserBooksRepo, IData } from './interfaces';

class UserBooksRepository implements IUserBooksRepo {
  private ormRepo: Repository<UserBooks>;

  constructor() {
    this.ormRepo = getRepository(UserBooks);
  }

  createUserBooks = (data: IUserBooks) => this.ormRepo.create(data);

  saveUserBooks = async (data: IUserBooks) => await this.ormRepo.save(data);

  findUserBook = async (data: IData) => await this.ormRepo.findOne({ where: data });

  findUserBookById = async (id: string) => await this.ormRepo.find({ where: { user: { id } } });

  findUserBooks = async () => await this.ormRepo.find();

  updateUserBooks = async (data: IData, dataChange: IData) => await this.ormRepo.update(data, dataChange);

  deleteUserBooks = async (data: IData) => await this.ormRepo.delete(data);
}

export default UserBooksRepository;