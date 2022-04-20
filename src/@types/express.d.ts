import { IAuthor } from '../repositories/Authors/interfaces';

declare global{
    namespace Express {
        interface Request {
            params: any;
        }
    }
}
