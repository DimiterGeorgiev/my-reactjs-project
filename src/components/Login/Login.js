import { Link } from "react-router-dom";
import "./Login.css";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
    const { onLoginSubmit } = useContext(AuthContext);


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={onLoginSubmit}>
                <label>Email</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your email..."
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}
