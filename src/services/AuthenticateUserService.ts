import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { email } });
        const passwordMatched = await compare(password, user.password);

        if (!user || !passwordMatched) {
            throw new Error('Incorrect email/password combination');
        }

        return {
            user,
        };
    }
}

export default AuthenticateUserService;
