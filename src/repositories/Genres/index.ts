import { getRepository, Repository } from 'typeorm';

import { IGenres, IDataUpdateGenres } from './interfaces';
import { Genres } from '../../entities/Genres';
import { Users } from '../../entities/Users';

class GenreRepository implements IGenres {
  private ormRepo: Repository<Genres>;

  constructor() {
    this.ormRepo = getRepository(Genres);
  }

  createGenre = (genre: Genres) => this.ormRepo.create(genre);

  saveGenre = async (genre: Genres) => await this.ormRepo.save(genre);

  findGenre = async (name: string) => await this.ormRepo.findOne(name);

  findGenreById = async (id: number) => await this.ormRepo.findOne(id);

  // findOrCreate = async (genre: string) =>  {
  //   const test = this.findGenre(genre)
  //   if 
  // }

  updateGenre = async (genre: IDataUpdateGenres, update: IDataUpdateGenres) => await this.ormRepo.update(genre, update);

  deleteGenre = async (genre: IDataUpdateGenres) => await this.ormRepo.delete(genre);
}

export default GenreRepository;
