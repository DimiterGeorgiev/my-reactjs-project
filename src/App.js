import { podcastServiceFactory } from "./services/podcastService";
//TODO: import as does not work.
//import * as podcastService from './services/podcastService';

import Home from "./components/Home/Home";
import Single from "./components/Single/Single";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import TopBar from "./components/TopBar/TopBar";
import Write from "./components/Write/Write";
import Podcasts from "./components/Podcasts/Podcasts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import { AuthContext } from './contexts/AuthContext';

function App() {
    const user = false;
    const [podcasts, setPodcasts] = useState([]);
    const [auth, setAuth] = useState({})
    const podcastService = podcastServiceFactory();

    //const navigate = useNavigate();

    useEffect(() => {
        podcastService.getAll()
            .then(result => {
                setPodcasts(result)
            })
    }, [podcastService]);


    

    const onCreatePostSubmit = async (data) => {
        console.log(data);

        const newPost = await podcastService.create(data);
        setPodcasts(state => [...state, newPost]);
        // TODO: navigate does not work
        //navigate('/podcasts');
        
    }

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(Object.fromEntries(new FormData(e.target)));
    }



    return (
        <AuthContext.Provider value={{onLoginSubmit}}>
            <Router>
                <TopBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/register" element={user ? <Home /> : <Register />}/>
                        <Route path="/login" element={user ? <Home /> : <Login />} />
                        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
                        <Route path="/write" element={user ? <Write onCreatePostSubmit={onCreatePostSubmit}/> : <Register />}/>
                        <Route path="/podcasts" element={<Podcasts podcasts={podcasts} />} />
                        <Route path="/podcasts/:postId" element={<Single />} />
                    </Routes>
            </Router>
        </AuthContext.Provider>
       
    );
}

export default App;
