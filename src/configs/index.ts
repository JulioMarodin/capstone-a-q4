import dotenv from 'dotenv';

dotenv.config();

const jwtConfig = {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.EXPIRES_IN && '1h',
};

export { jwtConfig };
