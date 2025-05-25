import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(' ')[1];
    console.log(token,'token')
    try {
        const decoded = verifyToken(token);
        console.log(decoded,'decoded')
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = decoded.body;
        console.log(decoded,'lllllllllllllll')
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
