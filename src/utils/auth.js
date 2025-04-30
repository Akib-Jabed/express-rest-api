import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import environments from '../config/environment.config.js';

const {secret, expiresIn} = environments.jwt;

export const generateToken = payload => {
    return jwt.sign(payload, secret, {
        expiresIn: expiresIn
    });
}

export const hashPassword = async password => {
    const salt = await bcrypt.genSalt(11);
    return await bcrypt.hash(password, salt);
}

export const verifyPassword = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash);
}