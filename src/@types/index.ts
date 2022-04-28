import { AsyncMid, Mid } from './middleware.types';
import AsyncControl from './controller.types';

declare global {
  namespace Express {
    interface Request {
      user: any;
      validated: any;
      paginate: {
        page: number;
        limit: number;
        name: string;
      };
      navlinks: object;
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

export { AsyncMid, Mid, AsyncControl };
