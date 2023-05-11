import React from "react";
import logo from '../images/logo.PNG';
import '../stylesheets/header.css';

function Header(){

    return(

        <div className="App-header">
            <img src={logo} alt="logo" className="icono-walker"/>
        </div>

    )
}
export default Header;