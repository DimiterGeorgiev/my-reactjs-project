import "./SinglePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor
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
                    <span>1 day ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error quibusdam ipsa quis quidem doloribus eos, dolore
                    ea iusto impedit! Voluptatum necessitatibus eum beatae,
                    adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Iste error quibusdam ipsa
                    quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Iste error quibusdam ipsa quis quidem
                    doloribus eos, dolore ea iusto impedit! Voluptatum
                    necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos,
                    dolore ea iusto impedit! Voluptatum necessitatibus eum
                    beatae, adipisci voluptas a odit modi eos! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci
                    voluptas a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste error quibusdam ipsa quis quidem doloribus eos, dolore
                    ea iusto impedit! Voluptatum necessitatibus eum beatae,
                    adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Iste error quibusdam ipsa
                    quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Iste error quibusdam ipsa quis quidem
                    doloribus eos, dolore ea iusto impedit! Voluptatum
                    necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
}
