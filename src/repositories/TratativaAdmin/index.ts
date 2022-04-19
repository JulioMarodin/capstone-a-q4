import { getRepository, Repository } from "typeorm";
import { TratativaAdmin } from "../../entities/TratativaAdmin";
import { IdataUpdateTratativaAdmin, ITratativaAdminRepo } from "./interfaces";

class tratativaAdminRepository implements ITratativaAdminRepo {
  private ormTratativaAdminsRepo : Repository<TratativaAdmin>;

  constructor() {
    this.ormTratativaAdminsRepo = getRepository(TratativaAdmin);
  }

  createTratativaAdmin = (tratativaAdmin: TratativaAdmin) => this.ormTratativaAdminsRepo.create(tratativaAdmin);

  saveTratativaAdmin = async (tratativaAdmin: TratativaAdmin) => await this.ormTratativaAdminsRepo.save(tratativaAdmin);

  findTratativaAdmin = (id: number) => this.ormTratativaAdminsRepo.findOne(id);

  findTratativaAdmins = async () => await this.ormTratativaAdminsRepo.find();

  updateTratativaAdmin = async (dataTratativaAdmin: IdataUpdateTratativaAdmin, update: IdataUpdateTratativaAdmin) => await this.ormTratativaAdminsRepo.update(dataTratativaAdmin, update);

  deleteTratativaAdmin = async (dataTratativaAdmin: IdataUpdateTratativaAdmin) => await this.ormTratativaAdminsRepo.delete(dataTratativaAdmin);
}

export default tratativaAdminRepository;
