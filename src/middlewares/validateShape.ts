import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const validateShape = (shape: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user) req.body.user_id = req.user.id;
    const validated = await shape.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    req.validated = validated;
    return next();
  } catch (e) {
    return res.status(400).json({ error: e.errors });
  }
};

export default validateShape;
