import { UpdateResult, DeleteResult } from 'typeorm';
import { Genres } from '../../entities/Genres';

interface IDataUpdateGenres {
  [key: string]: string | number;
}

interface IGenres {
  createGenre: (genre: Genres) => Genres;
  saveGenre: (genre: Genres) => void;
  findGenre: () => Promise<Genres[]>;
  findGenreById: (id: number) => Promise<Genres>;
  updateGenre: (genre: IDataUpdateGenres, update: IDataUpdateGenres) => Promise<UpdateResult>;
  deleteGenre: (genre: IDataUpdateGenres) => Promise<DeleteResult>;
}

export { IGenres, IDataUpdateGenres };
