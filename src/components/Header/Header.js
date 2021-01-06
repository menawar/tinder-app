import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                     <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
           <Link to="/">
                 <img
                   className="header__logo"
                   src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo" 
                 />
           </Link>
            <Link to="/chat">
               <ForumIcon className="header__icon" fontSize="large" />
                 <IconButton>
               </IconButton>
            </Link>
        </div>
    )
}

export default Header
