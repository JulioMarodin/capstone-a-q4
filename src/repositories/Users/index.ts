import { getRepository, Repository, ILike } from 'typeorm';
import { Users } from '../../entities/Users';
import { IUsers, IdataUpdate, IusersRepo } from './interfaces';

class UsersRepository implements IusersRepo {
  private ormRepo: Repository<Users>;

  constructor() {
    this.ormRepo = getRepository(Users);
  }

  createUser = (user: IUsers) => this.ormRepo.create(user);

  saveUser = async (user: IUsers) => await this.ormRepo.save(user);

  findUser = async (name: string) => await this.ormRepo.findOne({
    relations: ['userBooks', 'posts'],
      where: { name: ILike(`%${name}%`) },
      loadEagerRelations: true,
    });

  findToLogin = async (email: string) => await this.ormRepo.findOne({
    where: { email },
  });

  findUserToId = async (id) => await this.ormRepo.findOne({ id });

  findUsers = async (page: number = 0, limit: number = 15) => await this.ormRepo.find({
      skip: page,
      take: limit,
      order: { name: 'ASC' },
    });

  findFilteredUsers = async (name: string, page: number = 0, limit: number = 15) => await this.ormRepo.find({
      where: { name: ILike(`%${name}%`) },
      skip: page,
      take: limit,
      order: { name: 'ASC' },
      loadEagerRelations: false,
    });

  updateUser = async (dataUser: IdataUpdate, update: IdataUpdate) => await this.ormRepo.update(dataUser, update);

  deleteUser = async (dataUser: IdataUpdate) => await this.ormRepo.delete(dataUser);
}

export default UsersRepository;
