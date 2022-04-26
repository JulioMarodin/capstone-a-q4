import { Request, Response } from 'express';

type AsyncControl = (req: Request, res: Response) => Promise<Response | void>

export default AsyncControl;
