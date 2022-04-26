import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';
import { ErrorHandler } from '../services/errors';

const checkEmail = async (data) => {
    if (Object.keys(data).filter((e) => e === 'email').length === 1) {
        const email = await getRepository(Users).findOne({ where: { email: data.email } });
        if (email) {
            throw new ErrorHandler(401, 'Email registered');
        }
    }
};

export default checkEmail;
