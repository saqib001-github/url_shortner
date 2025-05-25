import nJwt from 'njwt';
import { customAlphabet } from 'nanoid';
export const generateNanoId = () => {
    const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);
    return nanoid();
}

export const signToken = (payload) => {
    return nJwt.create(payload, process.env.JWT_SECRET).compact();
};

export const verifyToken = (token) => {
    return nJwt.verify(token,process.env.JWT_SECRET);
};