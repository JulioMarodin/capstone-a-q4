import { getRepository, Repository } from 'typeorm';

import { IGenres, IDataUpdateGenres } from './interfaces';
import { Genres } from '../../entities/Genres';

class genreRepository implements IGenres {
  private ormRepo: Repository<Genres>;

  constructor() {
    this.ormRepo = getRepository(Genres);
  }

  createGenre = (genre: Genres) => this.ormRepo.create(genre);

  saveGenre = async (genre: Genres) => await this.ormRepo.save(genre);

  findGenre = async () => await this.ormRepo.find();

  findGenreById = async (id) => await this.ormRepo.findOne(id);

  updateGenre = async (genre: IDataUpdateGenres, update: IDataUpdateGenres) => await this.ormRepo.update(genre, update);

  deleteGenre = async (genre: IDataUpdateGenres) => await this.ormRepo.delete(genre);
}

export default genreRepository;
