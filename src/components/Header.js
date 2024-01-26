
import { logoURL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    let [btnNameReact, setButtonNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    
    return (
        <div className="flex justify-between bg-pink-10 shadow-xl px-1 mb-1">
            <div className="logo">
                <img className="w-12 p-1 m-1 align-center" src={logoURL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online :{(onlineStatus)? "Yes" : "No" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="px-4" onClick={() => {
                        btnNameReact === "Login" ? setButtonNameReact("Logout") : setButtonNameReact("Login");
                    }}>
                    {btnNameReact}
                    </button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    );
}

export default Header;