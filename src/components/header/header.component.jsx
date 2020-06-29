import React from 'react';
import './header.styles.scss';
import logo from '../../images/header-logo.png';

function Header() {
    return (
        <div className='header-container'>
            <div className='hamburger-button'>
                <div className='hamburger-button-div'></div>
                <div className='hamburger-button-div'></div>
                <div className='hamburger-button-div'></div>
            </div>
            <div className='header-logo'>
                <img alt='header-logo-img' src={logo}  />
            </div>
            <div className='header-search'>
                <input placeholder='Search'></input>
                <button><i className="material-icons">search</i></button>                
            </div>
            <div className='header-icons'>
                <i class="material-icons">video_call</i>
                <i class="material-icons">apps</i>
                <i class="material-icons">more_vert</i>
            </div>
            <div className='sign-in-button'>
                <button>
                    <i class="material-icons">account_circle</i>
                    SIGN IN
                </button>
            </div>
        </div>
    )
}

export default Header;