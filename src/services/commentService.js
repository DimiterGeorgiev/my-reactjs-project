import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

const request = requestFactory();

export const getAll = async (postId) => {
    const query = encodeURIComponent(`postId="${postId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (postId, comment) => {
    const result = await request.post(baseUrl, {postId, comment});

    return result;
};