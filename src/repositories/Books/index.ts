import { getRepository, Repository } from 'typeorm';
import { Books } from '../../entities/Books';
import { IBooks, IdataUpdateBooks, IbooksRepo } from './interfaces';

class booksRepository implements IbooksRepo {
    private ormBooksRepo : Repository<Books>;

    constructor() {
        this.ormBooksRepo = getRepository(Books);
    }

    createBook = (book:IBooks) => this.ormBooksRepo.create(book);

    saveBook = async (book:IBooks) => await this.ormBooksRepo.save(book);

    findBook = async (id:string) => await this.ormBooksRepo.findOne(id);

    findBooks = async () => await this.ormBooksRepo.find();

    updateBook = async (dataBook:IdataUpdateBooks, update:IdataUpdateBooks) => await this.ormBooksRepo.update(dataBook, update);

    deleteBook = async (dataBook:IdataUpdateBooks) => await this.ormBooksRepo.delete(dataBook);
}

export default booksRepository;
