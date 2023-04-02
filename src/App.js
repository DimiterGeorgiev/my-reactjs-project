import Home from "./components/Home/Home";
import Single from "./components/Single/Single";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import TopBar from "./components/TopBar/TopBar";
import Write from "./components/Write/Write";
import Podcasts from "./components/Podcasts/Podcasts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPost from "./components/EditPost/EditPost";
import { PostProvider } from "./contexts/PostContext";
import { AuthProvider } from "./contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
    const { isAuthenticated } = useContext(AuthContext);

    let user = false;
    if (isAuthenticated) {
        user = false;
    }

    return (
        <AuthProvider>
        <PostProvider>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={user ? <Home /> : <Register />}/>
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/settings" element={user ? <Settings /> : <Register />}/>
                <Route path="/write" element={<Write />}/>
                <Route path="/podcasts" element={<Podcasts />}/>
                <Route path="/podcasts/:postId" element={<Single />} />
                <Route path="/podcasts/:postId/edit" element={<EditPost />}/>
            </Routes>
        </PostProvider>
        </AuthProvider>
    );
}

export default App;
