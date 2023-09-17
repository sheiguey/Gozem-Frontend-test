import React, { useContext } from "react";
import './header.css'
import StateBar from "./StateBar";
import { Context } from "../../context/Context";
import Nav from "./Nav";



export default function Header(){
    const {displayMenuMob}=useContext(Context)
    return (
        <header className="navbar-container">
            <img className="logo" src="/assets/logo.png" alt="Gozem logo"/>
            <Nav/>
            <StateBar/>
            <img onClick={displayMenuMob} className="logo-menu" src="/assets/icons/menu-nav.png" alt="menu logo"/>
            
        </header>
    )
}