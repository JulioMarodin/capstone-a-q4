import { UpdateResult, DeleteResult } from 'typeorm';

interface IBooks {
    id?:number;
    rating:number;
    number_reviews:number;
    isbn:string;
    title:string;
    volume:number;
    cover_image:string;
    released_date:Date;
    number_pages:number;
}

interface IdataUpdateBooks {
    [key:string]:string | number;
}

interface IbooksRepo {
    createBook:(book:IBooks)=>IBooks;
    saveBook:(book:IBooks)=>void;
    findBook:(id:number)=>Promise<IBooks>;
    findBookByName:(title:string)=>Promise<IBooks>;
    findBooks:()=>Promise<Array<IBooks>>;
    updateBook:(dataBook:IdataUpdateBooks, update:IdataUpdateBooks)=>Promise<UpdateResult>;
    deleteBook:(dataBook:IdataUpdateBooks)=>Promise<DeleteResult>;
}

export { IBooks, IdataUpdateBooks, IbooksRepo };
