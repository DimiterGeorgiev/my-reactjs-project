import { createContext, useContext, useEffect, useState } from "react";

import { podcastServiceFactory } from "../services/podcastService";
import { useNavigate } from "react-router-dom";


export const PostConstext = createContext();

export const PostProvider = ({
    children,
}) => {
    const [podcasts, setPodcasts] = useState([]);
    const podcastService = podcastServiceFactory();
    const navigate = useNavigate();

    useEffect(() => {
        podcastService.getAll().then((result) => {
            setPodcasts(result);
        });
    }, []);

    const onCreatePostSubmit = async (data) => {
        const newPost = await podcastService.create(data);
        setPodcasts((state) => [...state, newPost]);
        navigate("/podcasts");
    };

    const onPostEditSubmit = async (values) => {
        const result = await podcastService.edit(values._id, values);
        setPodcasts((state) =>
            state.map((x) => (x._id === values._id ? result : x))
        );

        navigate(`/podcasts/${values._id}`);
    };

    const deletePost = (postId) => {
        setPodcasts(state => state.filter(post => post._id !== postId))
    }

    const getPost = (postId) => {
        return podcasts.find(post => post._id === postId);
    }

    const contextValues = {
        podcasts,
        onCreatePostSubmit,
        onPostEditSubmit,
        getPost,
        deletePost,
    }


    return (
        <PostConstext.Provider value={contextValues}>
            {children}
        </PostConstext.Provider>
    )
}

export const usePostContext = () => {
    const context = useContext(PostConstext);

    return context;
};