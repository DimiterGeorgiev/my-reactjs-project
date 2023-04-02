import { podcastServiceFactory } from "./services/podcastService";
import Home from "./components/Home/Home";
import Single from "./components/Single/Single";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import TopBar from "./components/TopBar/TopBar";
import Write from "./components/Write/Write";
import Podcasts from "./components/Podcasts/Podcasts";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditPost from "./components/EditPost/EditPost";

function App() {
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

    let user = false;

    return (
        <>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={user ? <Home /> : <Register />}/>
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/settings" element={user ? <Settings /> : <Register />}/>
                <Route path="/write" element={<Write onCreatePostSubmit={onCreatePostSubmit} />}/>
                <Route path="/podcasts" element={<Podcasts podcasts={podcasts} />}/>
                <Route path="/podcasts/:postId" element={<Single />} />
                <Route path="/podcasts/:postId/edit" element={<EditPost onPostEditSubmit={onPostEditSubmit} />}/>
            </Routes>
        </>
    );
}

export default App;
