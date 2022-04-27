import { getRepository, Repository } from 'typeorm';

import { IGenres, IDataUpdateGenres } from './interfaces';
import { Genres } from '../../entities/Genres';

class GenreRepository implements IGenres {
  private ormRepo: Repository<Genres>;

  constructor() {
    this.ormRepo = getRepository(Genres);
  }

  createGenre = (genre: Genres) => this.ormRepo.create(genre);

  saveGenre = async (genre: Genres) => await this.ormRepo.save(genre);

  findGenre = async (name: string) => await this.ormRepo.findOne({ where: { name } });

  findGenreById = async (id: number) => await this.ormRepo.findOne(id);

  updateGenre = async (genre: IDataUpdateGenres, update: IDataUpdateGenres) => await this.ormRepo.update(genre, update);

  deleteGenre = async (data: IDataUpdateGenres) => await this.ormRepo.delete(data);
}

export default GenreRepository;
