import "./SinglePost.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { podcastServiceFactory } from "../../services/podcastService";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState, useContext } from "react";
import { useService } from "../../hooks/useService";
import { usePostContext } from "../../contexts/PostContext";
import LikeButton from "../LikeButton/LikeButton";


export default function SinglePost() {
    const { userId } = useContext(AuthContext);
    const { postId } = useParams();
    const [ post, setPost ] = useState({});
    const podcastService = useService(podcastServiceFactory);
    const navigate = useNavigate();
    const { deletePost } = usePostContext();
    const { isAuthenticated } = useContext(AuthContext); 
    // const { isAuthenticated, userEmail } = useContext(AuthContext); 

    let user = false;
    if (isAuthenticated){
        user = true
    }

    useEffect(() => {
        podcastService.getOne(postId)
            .then(result => {
                setPost(result)
            });
    }, [postId]);

    const isOwner = post._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${post.title}`);
        
        if (result) {
            await podcastService.delete(post._id);

            deletePost(post._id);
    
            navigate('/podcasts');
        }
       
    };

   
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
                    {isOwner && (
                        <div className="singlePostEdit">
                            <Link to={`/podcasts/${post._id}/edit`} className="link green"><i className="singlePostIcon fa-regular fa-pen-to-square green"></i>Edit</Link>
                            <i className="singlePostIcon fa-regular fa-trash-can red" onClick={onDeleteClick} >Delete</i>
                        </div>
                    )}
                    
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author: Dimitar
                        <b className="singlePostAuthor">{}</b>
                    </span>
                    {user && <LikeButton/>}
                    <span>{Date(Date.parse(post._createdOn))}</span>
                </div>
                <p className="singlePostDesc">
                    {post.description}
                </p>
            </div>
        </div>
    );
}
