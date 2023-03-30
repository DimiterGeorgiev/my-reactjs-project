import { Link } from "react-router-dom";
import "./TopBar.css"

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function TopBar() {
    const { isAuthenticated, userEmail } = useContext(AuthContext);


    let user = false;
    if (isAuthenticated){
        user = true
    }

    
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        </div>
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/podcasts">PODCASTS</Link></li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}


