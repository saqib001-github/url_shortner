import wrapAsync from "../utils/wrap-async.js";
import { getAllUserUrlsDao } from "../dao/user.dao.js";

export const getAllUserUrls = wrapAsync(async (req, res) => {
    const userId = req.user.id;
    const urls = await getAllUserUrlsDao(userId);
    res.status(200).json({
        success: true,
        message: "User URLs retrieved successfully",
        data: urls,
    });
});