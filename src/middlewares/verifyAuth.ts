import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import usersRepository from "../repositories/Users"
import { AsyncMid } from "../@types";

dotenv.config();

const verifyAuth: AsyncMid = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if (!token) res.status(201).json({ error: "Missing authorization headers" });

    jwt.verify(token, secret, async (err, decoded) => {
    if (err) res.status(401).json({ error: "Invalid acess token" });
    const { id } = decoded as any;

    req.user = await new usersRepository().findUser(id);
    return next();
    });
  } catch (e) {
      res.status(401).json({ error: "Missing authorization headers" });
  }
};
