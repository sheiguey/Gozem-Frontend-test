import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./mobileMenu.css";
import LanguageList from "./languages/LanguageList";

const MobileMenu=()=>{
    const {display,displayMenu}=useContext(Context)
    return(
      <React.Fragment>
         <nav className="navigation-bar_mobile">
            <ul className="navigation-bar_mobile">
                <li className="navigation-bar-mobile_item">
                    <Link to='/' >
                        <img src="/assets/icons/dashboard.png" alt="dashboard icon" />
                        {/* <img  className="dashboard-icon" src="/assets/icons/car-dashboard-speed.png" alt="dashboard icon" /> */}
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li className="navigation-bar-mobile_item" >
                    <Link >
                        <img src="/assets/icons/Group.png" alt="languages icons" />
                        <p onClick={display}>Languages</p>
                        {
                            displayMenu && <LanguageList/>
                        }
                    </Link>
                </li>
                <li className="navigation-bar-mobile_item">
                    <Link >
                        <img src="/assets/icons/conversation-chat-1.png" alt="conversation chat icons" />
                        <p>Mentoring</p>
                    </Link>

                </li>
                <li className="navigation-bar-mobile_item">
                    <Link >
                        <img src="/assets/icons/contribute.png" alt="contribute icons" />
                        <p>Contribute</p>
                    </Link>

                </li>
            </ul>
        </nav>
       
    </React.Fragment>
    )
}

export default MobileMenu;