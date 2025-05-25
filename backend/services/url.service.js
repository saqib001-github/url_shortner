import {generateNanoId} from '../utils/helper.js'
import { getCustomShortUrl, saveShortUrl } from '../dao/short-url.js';


export const createShortUrlWithoutUser = async (url) => {
    const shorturl = generateNanoId();
    if(!shorturl) throw new Error('Error generating short URL');
    await saveShortUrl(url, shorturl);
    return shorturl;
}

export const createShortUrlWithUser = async (url, userId, slug) => {
    const shorturl = slug || generateNanoId();
    const exist = await getCustomShortUrl(slug);
    if(exist) throw new Error('Custom URL already exists');
    await saveShortUrl(url, shorturl, userId);
    return shorturl;
}
