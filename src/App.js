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


function App() {

    return (
        <AuthProvider>
        <PostProvider>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/settings" element={<Settings />}/>
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
