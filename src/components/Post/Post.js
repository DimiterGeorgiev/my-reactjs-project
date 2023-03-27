import "./Post.css";

export default function Post({
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
                <span className="postTitle">{title}</span>
                <hr />
                <span className="postDate">{date}</span>
            </div>
            <p className="postDesc">
                {description}
            </p>
        </div>
    );
}
