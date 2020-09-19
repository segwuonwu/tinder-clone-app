import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import Logo from "../images/tinder-logo.png";

//console.log(Logo)

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img className="header__logo" src={Logo} alt="tinder logo" />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>

        </div>
    );
}

export default Header;