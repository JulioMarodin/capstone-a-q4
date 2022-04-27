import express, {
 json, NextFunction, Request, Response,
} from 'express';
import { handleError } from './services/errors';
import apiRouter from './routes';

const app = express();

app.use(json());
app.use((err:any, _req:Request, res:Response, _next:NextFunction) => {
  return handleError(err, res);
});
app.use('/api', apiRouter);

export default app;
