import { UpdateResult, DeleteResult } from "typeorm";
import { TratativaAdmin } from "../../entities/TratativaAdmin";

interface IdataUpdateTratativaAdmin {
  [key:string]:string | number;
}

interface ITratativaAdminRepo {
  createTratativaAdmin:(tratativaAdmin:TratativaAdmin)=>TratativaAdmin;
  saveTratativaAdmin:(tratativaAdmin:TratativaAdmin)=>void;
  findTratativaAdmin:(id:number)=>Promise<TratativaAdmin>;
  findTratativaAdmins:()=>Promise<Array<TratativaAdmin>>;
  updateTratativaAdmin:(dataTratativaAdmin:IdataUpdateTratativaAdmin, update:IdataUpdateTratativaAdmin)=>Promise<UpdateResult>;
  deleteTratativaAdmin:(dataTratativaAdmin:IdataUpdateTratativaAdmin)=>Promise<DeleteResult>;
}

export { IdataUpdateTratativaAdmin, ITratativaAdminRepo };
