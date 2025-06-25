import { createUser, getUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utils/error-handler.js";
import { signToken } from "../utils/helper.js";
import bcrypt from 'bcryptjs';

export const registerUser = async (name, email, password) => {
    const user = await getUserByEmail(email);
    if(user) throw new ConflictError("User already exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({ name, email, password: hashedPassword });
    const token = await signToken({ id: newUser.id, email: newUser.email });
    return {user:newUser, token};
}

export const loginUser = async (email, password) => {
    const user = await getUserByEmail(email);
    console.log(user)
    if (!user) throw new ConflictError("Invalid credentials");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new ConflictError("Invalid credentials");
    const token = await signToken({ id: user.id, email: user.email });
    return {user, token};
}