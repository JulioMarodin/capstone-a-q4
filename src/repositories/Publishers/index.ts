import { getRepository, Repository } from 'typeorm';
import { Publishers } from '../../entities/Publishers';
import { IPublishers, IDataUpdate, IPublishersRepo } from './interfaces';

class PublisherRepository implements IPublishersRepo {
    private ormRepo : Repository<Publishers>;

    constructor() {
        this.ormRepo = getRepository(Publishers);
    }

    createPublisher = (publisher: IPublishers) => this.ormRepo.create(publisher);

    savePublisher = async (publisher: IPublishers) => await this.ormRepo.save(publisher);

    findPublisher = async (id) => await this.ormRepo.findOne(id);

    findPublishers = async (page: number = 0, limit: number = 20) => await this.ormRepo.find({
        skip: page,
        take: limit,
        order: { name: 'ASC' },
      });

    updatePublisher = async (dataPublisher:IDataUpdate, update:IDataUpdate) => await this.ormRepo.update(dataPublisher, update);

    deletePublisher = async (dataPublisher) => await this.ormRepo.delete(dataPublisher);
}

export default PublisherRepository;
