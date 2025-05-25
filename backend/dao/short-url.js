import { prismadb } from "../prisma/client.js";

export const saveShortUrl = async (url, shortUrl, userId = null) => {
    const newUrl = await prismadb.shortUrl.create({
        data: {
            fullUrl: url,
            shortUrl,
            userId
        }
    });
    return newUrl;
};

export const getShortUrl = async (shortUrl) => {
    // First get the URL to return later
    const url = await prismadb.shortUrl.findUnique({
        where: { shortUrl }
    });
    
    if (url) {
        // Then update the click count
        await prismadb.shortUrl.update({
            where: { shortUrl },
            data: { clicks: { increment: 1 } }
        });
    }
    
    return url;
};

export const getCustomShortUrl = async (shortUrl) => {
    const url = await prismadb.shortUrl.findUnique({
        where: { shortUrl }
    });
    return url;
};