import { getRepository, Repository, ILike } from 'typeorm';
import { Books } from '../../entities/Books';
import { IBooks, IdataUpdateBooks, IbooksRepo } from './interfaces';

class booksRepository implements IbooksRepo {
  private ormBooksRepo: Repository<Books>;

  constructor() {
    this.ormBooksRepo = getRepository(Books);
  }

  createBook = (book: IBooks) => this.ormBooksRepo.create(book);

  saveBook = async (book: IBooks) => await this.ormBooksRepo.save(book);

  findBook = async (id: number) => await this.ormBooksRepo.findOne(id);

  findBookByName = async (title: string|void) => {
    return await this.ormBooksRepo.findOne({ where: { title } });
  };

  findBooks = async (title: string, page: number = 0, limit: number = 15) => {
      return await this.ormBooksRepo.find({
          relations: ['author'],
          where: { title: ILike(`%${title}%`) },
          skip: page,
          take: limit,
          order: { title: 'ASC' },
        });
    };

  updateBook = async (dataBook: IdataUpdateBooks, update: IdataUpdateBooks) => {
      return await this.ormBooksRepo.update(dataBook, update);
    };

  deleteBook = async (dataBook: IdataUpdateBooks) => await this.ormBooksRepo.delete(dataBook);
}

export default booksRepository;
