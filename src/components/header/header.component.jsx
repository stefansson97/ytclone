import React, { useState } from 'react';
import './header.styles.scss';
import logo from '../../images/header-logo.png';
import SearchBar from '../search-bar/search-bar.component';
import SignInButton from '../sign-in-button/sign-in-button.component';
import { useHistory } from 'react-router-dom';
import { useToggleNavbarStyle } from '../../store/NavbarContext';

function Header() {

    //implementing resp(onsive)Search state to change header style if window size changes 

    const [respSearch, setRespSearch] = useState(false);
    const history = useHistory();

    //toggle between two styles of side navbar

    const navToggle = useToggleNavbarStyle();

    function handleClick() {
        setRespSearch(!respSearch);
    }

    function handleLogoClick() {
        history.push('/');
    }

    return (
            <header>
                {(respSearch) ? 
                       (<div className='responsive-search' data-testid='hdr-rspnsv-srch'>
                            <i className="material-icons arrow-back" data-testid='hdr-arrow-back' onClick={handleClick}>arrow_back</i>
                            <SearchBar />
                        </div>)
                    
                    : 
                    <div className='regular-search'>
                        <div className='col-1-8'>
                            <div className='hamburger-button' data-testid='hamb-btn' onClick={navToggle}>
                                <div className='hamburger-button-div'></div>
                                <div className='hamburger-button-div'></div>
                                <div className='hamburger-button-div'></div>
                            </div>
                            <div className='header-logo'>
                                <img alt='header-logo-img' src={logo} className='header-logo-img' onClick={handleLogoClick}  />
                            </div>
                        </div>
                        <div className='col-1-2'>
                            <SearchBar />
                        </div>
                        <div className='col-1-3'>
                            <div className='header-icons'>
                                <i className="material-icons search-icon-responsive hidden" onClick={handleClick} data-testid='hdr-resp-srch-btn'>search</i>
                                <i className="material-icons header-icon header-icon-video">video_call</i>
                                <i className="material-icons header-icon header-icon-apps">apps</i>
                                <i className="material-icons header-icon header-icon-more">more_vert</i>
                            </div>
                            <div className='sign-in-button'>
                                <SignInButton />
                            </div>
                        </div>
                    </div>
                }
            </header>
    )
}

export default Header;