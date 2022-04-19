import { AsyncMid, Mid } from './middleware.types';

declare global {
  namespace Express {
    interface Request {
      user: any;
      validated: any;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

export { AsyncMid, Mid };
