import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/podcasts';



export const podcastServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const posts = Object.values(result);
        return posts;
    };
    
    const getOne = async (podcastId) => {
        const result = await request.get(`${baseUrl}/${podcastId}`);
        
        return result;
    };
    
    const create = async (podcastData) => {
        const result = await request.post(baseUrl, podcastData)
    
        return result;
    };
    
    // const addComment = async (podcastId, data) => {
    //     const result = await request.post(`${baseUrl}/${podcastId}/comments`, data);
    //     return result;
    // };

    const edit = (podcastId, data) => request.put(`${baseUrl}/${podcastId}`, data);

    const deletePodcast = (podcastId) => request.delete(`${baseUrl}/${podcastId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        //addComment,
        delete: deletePodcast,
    };
}