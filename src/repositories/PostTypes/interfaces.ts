interface IPostsTypes {
    id:number;
    type:string;
    visible:boolean;
}

interface IDataUpdate {
    [key:string]:string;
}

interface IPostsTypesRepo {
    findPostType:(id:number)=>Promise<IPostsTypes>;
    findPostsTypes:()=>Promise<IPostsTypes[]>;
}

export { IPostsTypes, IDataUpdate, IPostsTypesRepo };
