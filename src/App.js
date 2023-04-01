import { podcastServiceFactory } from "./services/podcastService";
//TODO: import as does not work.
//import * as podcastService from './services/podcastService';

//import * as authService from './services/authService';

import { authServiceFactory } from "./services/authService";

import { useService } from "./hooks/useService";

import Home from "./components/Home/Home";
import Single from "./components/Single/Single";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import TopBar from "./components/TopBar/TopBar";
import Write from "./components/Write/Write";
import Podcasts from "./components/Podcasts/Podcasts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { AuthContext } from './contexts/AuthContext';

import { useContext } from "react";
import EditPost from "./components/EditPost/EditPost";

function App() {
    
    const [podcasts, setPodcasts] = useState([]);
    const [auth, setAuth] = useState({})
    const podcastService = podcastServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

    //const navigate = useNavigate();

    useEffect(() => {
        podcastService.getAll()
            .then(result => {
                setPodcasts(result)
            })
    }, []);


    const onCreatePostSubmit = async (data) => {
        //console.log(data);
        const newPost = await podcastService.create(data);
        setPodcasts(state => [...state, newPost]);
        // TODO: navigate does not work
        //navigate('/podcasts');
    }

    const onLoginSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            //console.log(Object.fromEntries(new FormData(e.target)));
            const result = await authService.login(data);
            setAuth(result)
            //console.log(result);
            //TODO navigate does not work
            //navigate('/podcasts');
            
        } catch (error) {
            console.log('There is a problem');
        }
    }

    const onRegisterSubmit = async (value) => {
        try {
            const result = await authService.register(value);
            setAuth(result);

            //navigate('/podcasts')
        } catch (error) {
            console.log('There is a problem');
        }
    }

    const onLogout = async () => {
        
        await authService.logout();
        setAuth({});
    };

    const onPostEditSubmit = async (values) => {
        const result = await podcastService.edit(values._id, values);

        setPodcasts(state => state.map(x => x._id === values._id ? result : x))

        //TODO Change state
        //TODO navigate does not work
        //navigate(`/podcasts/${values._id}`)

    }

    const contextValues = {
        onLogout,
        onLoginSubmit,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    let user = false;
    if (!!auth.accessToken){
        user = true
    }

  

    return (
        <AuthContext.Provider value={contextValues}>
            <Router>
                <TopBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/register" element={user ? <Home /> : <Register />}/>
                        <Route path="/login" element={user ? <Home /> : <Login />} />
                        <Route path="/logout" element={<Logout />}/>
                        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
                        <Route path="/write" element={user ? <Write onCreatePostSubmit={onCreatePostSubmit}/> : <Register />}/>
                        <Route path="/podcasts" element={<Podcasts podcasts={podcasts} />} />
                        <Route path="/podcasts/:postId" element={<Single />} />
                        <Route path="/podcasts/:postId/edit" element={<EditPost onPostEditSubmit={onPostEditSubmit} />} />
                        
                    </Routes>
            </Router>
        </AuthContext.Provider>
       
    );
}

export default App;
