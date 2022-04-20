import express, {
 json, NextFunction, Request, Response,
} from 'express';
import { handleError } from './services/errors';

const app = express();

app.use(json());
app.use((_err:any, _req:Request, res:Response, _next:NextFunction) => handleError(_err, res));

export default app;
