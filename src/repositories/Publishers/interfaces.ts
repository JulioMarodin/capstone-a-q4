import { UpdateResult, DeleteResult } from 'typeorm';

interface IPublishers {
    id?:number;
    name:string;
}

interface IDataUpdate {
    [key:string]:string;
}

interface IPublishersRepo {
    createPublisher:(publisher:IPublishers)=>IPublishers;
    savePublisher:(publisher:IPublishers)=>void;
    findPublisher:(id:number)=>Promise<IPublishers>;
    findPublishers:(page: number, limit: number)=>Promise<IPublishers[]>;
    updatePublisher:(publisher:IDataUpdate, update:IDataUpdate)=>Promise<UpdateResult>;
    deletePublisher:(publisher:IDataUpdate)=>Promise<DeleteResult>;
}

export { IPublishers, IDataUpdate, IPublishersRepo };
