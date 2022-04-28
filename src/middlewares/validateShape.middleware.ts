import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const validateShape = (shape: AnySchema) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const validated = await shape.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    req.validated = validated;
    return next();
  } catch (e) {
    // return res.status(e.statusCode).json({ error: e.errors });
    return next({statusCode: 400, message: e.errors});
  }
};

export default validateShape;
