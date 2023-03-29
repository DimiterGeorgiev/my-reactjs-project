import "./SinglePost.css";

import { useParams } from "react-router-dom";

//import * as podcastService from "../../services/podcastService";
import { podcastServiceFactory } from "../../services/podcastService";

import { useEffect, useState } from "react";

export default function SinglePost() {
    const { postId } = useParams();
    const [ post, setPost ] = useState({});
    const podcastService = podcastServiceFactory();

    useEffect(() => {
        podcastService.getOne(postId)
            .then(result => {
                setPost(result)
            });
    }, [postId])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={post.imageUrl}
                    alt=""
                />
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">Safak</b>
                    </span>
                    <span>23.03.2023</span>
                </div>
                <p className="singlePostDesc">
                    {post.description}
                </p>
            </div>
        </div>
    );
}
