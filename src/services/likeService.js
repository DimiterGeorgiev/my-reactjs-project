import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/likes';

const request = requestFactory();

export const getAll = async (postId) => {



    ///data/likes?distinct=_ownerId&count

    const query = encodeURIComponent(`postId="${postId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const likes = Object.values(result);

    return likes;

} 



export const create = async (postId, userId) => {
    const result = await request.post(baseUrl, {postId, userId});
    return result;
};