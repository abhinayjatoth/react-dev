
import { logoURL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    let [btnNameReact, setButtonNameReact] = useState("Login")

    return (
        <div className="header">
            <div className="logo">
                <img src={logoURL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login" ? setButtonNameReact("Logout") : setButtonNameReact("Login");
                    }}>
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>

    );
}

export default Header;