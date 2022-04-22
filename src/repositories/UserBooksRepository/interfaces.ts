import { UpdateResult, DeleteResult } from 'typeorm';

interface IUserBooks {
    id:number;
    read: boolean;
    reading:boolean;
    want_to_read:boolean;
    favorites:boolean;
    rating:number;
}

interface IData {
    [key:string]:boolean|number;
}

interface IUserBooksRepo {
    createUserBooks: (data:IUserBooks)=>IUserBooks;
    saveUserBooks: (data:IUserBooks)=>void;
    findUserBook: (data:IData)=>Promise<IUserBooks>;
    findUserBooks: ()=>Promise<Array<IUserBooks>>;
    updateUserBooks: (data:IData, dataChange:IData)=>Promise<UpdateResult>;
    deleteUserBooks: (data:IData)=>Promise<DeleteResult>;
}

export { IUserBooks, IData, IUserBooksRepo };
