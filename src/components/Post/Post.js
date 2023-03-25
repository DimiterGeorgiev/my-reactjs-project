import "./Post.css";

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Live</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda officia architecto deserunt deleniti? Labore ipsum
                aspernatur magnam fugiat, reprehenderit praesentium blanditiis
                quos cupiditate ratione atque, exercitationem quibusdam,
                reiciendis odio laboriosam?
            </p>
        </div>
    );
}
