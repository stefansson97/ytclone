import React from 'react';
import './header.styles.scss';
import logo from '../../images/header-logo.png';

function Header() {
    return (
            <div className='header-container'>
                <div className='col-1-8'>
                    <div className='hamburger-button'>
                        <div className='hamburger-button-div'></div>
                        <div className='hamburger-button-div'></div>
                        <div className='hamburger-button-div'></div>
                    </div>
                    <div className='header-logo'>
                        <img alt='header-logo-img' src={logo}  />
                    </div>
                </div>
                    <div className='header-search col-1-2'>
                        <input placeholder='Search'></input>
                        <button><i className="material-icons">search</i></button>                
                    </div>
                <div className='col-1-3'>
                    <div className='header-icons'>
                        <i className="material-icons">video_call</i>
                        <i className="material-icons">apps</i>
                        <i className="material-icons">more_vert</i>
                    </div>
                    <div className='sign-in-button'>
                        <button>
                            <i className="material-icons">account_circle</i>
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Header;