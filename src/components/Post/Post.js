import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({
    _id,
    title,
    imageUrl,
    category,
    date,
    description
}) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={imageUrl}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">{category}</span>
                </div>
                <Link to={`/podcasts/${_id}`} className="link">
                    <span className="postTitle">{title}</span>
                </Link>

                
                
                <hr />
                <span className="postDate">{date}</span>
            </div>
            <p className="postDesc">
                {description}
            </p>
        </div>
    );
}
