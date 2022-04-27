import { UpdateResult, DeleteResult } from 'typeorm';

interface IUsers {
    id?:string;
    name:string;
    email:string;
    password:string;
    biography:string;
    birthday:Date;
    city:string;
}

interface IdataUpdate {
    [key:string]:string | number;
}

interface IusersRepo {
    createUser:(user:IUsers)=>IUsers;
    saveUser:(user:IUsers)=>void;
    findUser:(name:string)=>Promise<IUsers>;
    findUserToId:(id:string)=>Promise<IUsers>;
    findUsers:()=>Promise<Array<IUsers>>;
    updateUser:(dataUser:IdataUpdate, update:IdataUpdate)=>Promise<UpdateResult>;
    deleteUser:(dataUser:IdataUpdate)=>Promise<DeleteResult>;
}

export { IUsers, IdataUpdate, IusersRepo };
