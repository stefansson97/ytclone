import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setNavigationToggle } from '../../redux/navigation-toggle/navigation-toggle.actions';
import './header.styles.scss';
import logo from '../../images/header-logo.png';
import SearchBar from '../search-bar/search-bar.component';
import SignInButton from '../sign-in-button/sign-in-button.component';
import { useHistory } from 'react-router-dom';

function Header({setNavigationToggle}) {

    const [respSearch, setRespSearch] = useState(false);
    const history = useHistory();

    function handleClick() {
        setRespSearch(!respSearch);
    }

    function handleLogoClick() {
        history.push('/');
    }

    return (
            <div className='header-container'>
                {(respSearch) ? 
                       (<div className='responsive-search'>
                            <i className="material-icons arrow-back" onClick={handleClick}>arrow_back</i>
                            <SearchBar />
                        </div>)
                    
                    : 
                    <div className='regular-search'>
                        <div className='col-1-8'>
                            <div className='hamburger-button' onClick={setNavigationToggle}>
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
                                <i className="material-icons search-icon-responsive hidden" onClick={handleClick}>search</i>
                                <i className="material-icons header-icon">video_call</i>
                                <i className="material-icons header-icon">apps</i>
                                <i className="material-icons header-icon">more_vert</i>
                            </div>
                            <div className='sign-in-button'>
                                <SignInButton />
                            </div>
                        </div>
                    </div>
                }
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setNavigationToggle: () => dispatch(setNavigationToggle())
});

export default connect(null, mapDispatchToProps)(Header);