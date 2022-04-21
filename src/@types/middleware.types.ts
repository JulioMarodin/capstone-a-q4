import { Request, Response, NextFunction } from 'express';

type Mid = (req: Request, res:Response, next:NextFunction) => void | Response
type AsyncMid = (req: Request, res:Response, next:NextFunction) => Promise<void> | Promise<any>

export { Mid, AsyncMid };
