import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import usersRepository from '../repositories/Users';
import { AsyncMid } from '../@types';

dotenv.config();

// eslint-disable-next-line consistent-return
const verifyAuth: AsyncMid = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    if (!token) return res.status(201).json({ error: 'Missing authorization headers' });

    jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid acess token' });
    }

    const { id } = decoded as any;

    // eslint-disable-next-line new-cap
    req.user = await new usersRepository().findUserToId(id);
    return next();
    });
  } catch (e) {
    return res.status(401).json({ error: 'Missing authorization headers' });
  }
};

export default verifyAuth;
