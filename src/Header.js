import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="Header">
            {backButton ? (
                < IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon" />
                 </IconButton >
            ) : (
                    <Link to="/Id-Entry">
                < IconButton >
                <PersonIcon fontSize="large" className="header_icon" />
                        </IconButton>
                    </Link>
            )
        }
            <Link to ="/">
            <img className="header_logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="tinder logo"
                />
            </Link>
            <Link to = "/chats">
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
             </IconButton>
            </Link>
                

        </div>
    );
}

export default Header;
