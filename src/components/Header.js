import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import Logo from "../images/tinder-logo.png"

//console.log(Logo)

function Header() {
    return (
        <div className="header">
            <PersonIcon />
            <img className="header__logo" src={Logo} alt="tinder logo" />
            <ForumIcon />
        </div>
    );
}

export default Header;