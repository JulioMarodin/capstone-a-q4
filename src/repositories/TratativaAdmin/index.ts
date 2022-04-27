import { getRepository, Repository } from 'typeorm';
import { TratativaAdmin } from '../../entities/TratativaAdmin';
import { IdataUpdateTratativaAdmin, ITratativaAdminRepo } from './interfaces';

class TratativaAdminRepository implements ITratativaAdminRepo {
  private ormTratativaAdminsRepo : Repository<TratativaAdmin>;

  constructor() {
    this.ormTratativaAdminsRepo = getRepository(TratativaAdmin);
  }

  createTratativaAdmin = (tratativaAdmin: TratativaAdmin) => this.ormTratativaAdminsRepo.create(tratativaAdmin);

  saveTratativaAdmin = async (tratativaAdmin: TratativaAdmin) => await this.ormTratativaAdminsRepo.save(tratativaAdmin);

  findTratativaAdmin = (id) => this.ormTratativaAdminsRepo.findOne(id);

  findTratativaAdmins = async () => await this.ormTratativaAdminsRepo.find();

  findTratativaAdminsNotRead = async () => await this.ormTratativaAdminsRepo.find({ where: { sorted_out: false} });

  findTratativaAdminsRead = async () => await this.ormTratativaAdminsRepo.find({ where: { sorted_out: true} });

  updateTratativaAdmin = async (dataTratativaAdmin: IdataUpdateTratativaAdmin, update: IdataUpdateTratativaAdmin) => await this.ormTratativaAdminsRepo.update(dataTratativaAdmin, update);

  deleteTratativaAdmin = async (dataTratativaAdmin: IdataUpdateTratativaAdmin) => await this.ormTratativaAdminsRepo.delete(dataTratativaAdmin);
}

export default TratativaAdminRepository;
