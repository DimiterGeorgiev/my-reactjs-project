import { Link } from "react-router-dom";
import "./Register.css";

import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        username: '',
        email: '',
        password: '',
    }, onRegisterSubmit);

    return (
        <div>
            <div className="register">
                <span className="registerTitle">Register</span>
                <form className="registerForm" method="POST" onSubmit={onSubmit}>
                    <label>Username</label>
                    <input
                        className="registerInput"
                        type="text"
                        placeholder="Enter your username..."
                        name="username"
                        value={values.username}
                        onChange={changeHandler}
                    />
                    <label>Email</label>
                    <input
                        className="registerInput"
                        type="text"
                        placeholder="Enter your email..."
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label>Password</label>
                    <input
                        className="registerInput"
                        type="password"
                        placeholder="Enter your password..."
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                    
                </button>
            </div>
        </div>
    );
}
