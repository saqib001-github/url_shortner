import jwt from 'jsonwebtoken';
import { customAlphabet } from 'nanoid';

export const generateNanoId = () => {
    const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);
    return nanoid();
}

export const signToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
