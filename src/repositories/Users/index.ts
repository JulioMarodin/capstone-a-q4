import { getRepository, Repository } from 'typeorm';
import { Users } from '../../entities/Users';
import { IUsers, IdataUpdate, IusersRepo } from './interfaces';

class UsersRepository implements IusersRepo {
  private ormRepo: Repository<Users>;

  constructor() {
    this.ormRepo = getRepository(Users);
  }

  createUser = (user: IUsers) => this.ormRepo.create(user);

  saveUser = async (user: IUsers) => await this.ormRepo.save(user);

  findUser = async (id: string) => await this.ormRepo.findOne(id);

  findUsers = async () => await this.ormRepo.find();

  updateUser = async (dataUser: IdataUpdate, update: IdataUpdate) => await this.ormRepo.update(dataUser, update);

  deleteUser = async (dataUser: IdataUpdate) => await this.ormRepo.delete(dataUser);
}

export default UsersRepository;
