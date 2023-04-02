import { Link } from "react-router-dom";
import "./Login.css";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler } = useForm({ //onSubmit
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={onLoginSubmit}>
                <label>Email</label>
                <input
                    className="loginInput"
                    type="email"
                    name={LoginFormKeys.Email}
                    placeholder="Enter your email..."
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    name={LoginFormKeys.Password}
                    placeholder="Enter your password..."
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
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
