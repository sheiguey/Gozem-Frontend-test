import React, { useContext } from "react";
import LanguageList from "./languages/LanguageList";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

const Nav =()=>{
    const {display,displayMenu}=useContext(Context)
    return (
        <nav className="navigation-bar">
            <ul className="navigation-bar_menu">
                <li className="navigation-bar_item">
                    <Link to='/' >
                        <img src="/assets/icons/dashboard.png" alt="dashboard icon" />
                        
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li className="navigation-bar_item" >
                    <Link >
                        <img src="/assets/icons/Group.png" alt="languages icons" />
                        <p onClick={display}>Languages</p>
                        {
                            displayMenu && <LanguageList />
                        }
                    </Link>
                </li>
                <li className="navigation-bar_item">
                    <Link >
                        <img src="/assets/icons/conversation-chat-1.png" alt="conversation chat icons" />
                        <p>Mentoring</p>
                    </Link>

                </li>
                <li className="navigation-bar_item">
                    <Link >
                        <img src="/assets/icons/contribute.png" alt="contribute icons" />
                        <p>Contribute</p>
                    </Link>

                </li>
            </ul>
        </nav>
    )
}

export default Nav;