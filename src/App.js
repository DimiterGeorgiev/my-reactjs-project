import Home from "./components/Home/Home";
import Single from "./components/Single/Single";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import TopBar from "./components/TopBar/TopBar";
import Write from "./components/Write/Write";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
    const user = false;

    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={user ? <Home /> : <Register />}/>
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/settings" element={user ? <Settings /> : <Register />}/>
                <Route path="/write" element={user ? <Write /> : <Register />}/>
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </Router>
    );
}

export default App;
