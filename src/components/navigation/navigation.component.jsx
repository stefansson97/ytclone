import React, { useState, useEffect } from 'react';
import './navigation.styles.scss';
import SignInButton from '../sign-in-button/sign-in-button.component';
import NavigationLine from '../navigation-line/navigation-line.component';
import NavigationBottom from '../navigation-bottom-row/navigation-bottom-row.component';
import { useLocation } from 'react-router-dom';
import { useNavbarStyle } from '../../store/NavbarContext';

function Navigation() {

    //using location to check are we at the homepage, if are then need to higlight home tab on sidebar navigation
    
    let location = useLocation();

    let navStyle = useNavbarStyle();

    const [areWeAtHome, setAreWeAtHome] = useState(false);

    useEffect(() => {
        if(location.pathname === '/') {
            setAreWeAtHome(true);
        } else {
            setAreWeAtHome(false);
        }
    }, [location.pathname])

    return(
        <div className={'navigation-container' + (navStyle ? ' nav-toggle-active-navigation' : ' no-navigation-and-screen-size-medium' )}>
            {navStyle ? (
            <div className='navigation-container-responsive'>
                <div className={areWeAtHome ? ' we-at-home-responsive' : '' }>
                    <NavigationLine iconName='home' lineText='Home' responsive={true} />
                </div>
                <NavigationLine iconName='local_fire_department' lineText='Trending' responsive={true} />
                <NavigationLine iconName='subscriptions' lineText='Subscriptions' responsive={true} />
                <NavigationLine iconName='video_library' lineText='Library' responsive={true} />
                <NavigationLine iconName='restore' lineText='History' responsive={true} />
            </div>
            ) : (
            <div className='navigation-container-default'>
                <div className={areWeAtHome ? ' we-at-home' : '' }>
                    <NavigationLine iconName='home' lineText='Home' />
                </div>
                <NavigationLine iconName='local_fire_department' lineText='Trending' />
                <NavigationLine iconName='subscriptions' lineText='Subscriptions' />
                <hr />
                <NavigationLine iconName='video_library' lineText='Library' />
                <NavigationLine iconName='restore' lineText='History' />
                <hr />
                <div className='sign-in-call-container'>
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <div className='sign-in-button'>
                        <SignInButton />
                    </div>
                </div>
                <hr />
                <div className='best-of-youtube'>
                    <p className='navigation-title'>BEST OF YOUTUBE</p>
                    <NavigationLine img='./images/music.jpg' lineText='Music' alt={'music-img'} />
                    <NavigationLine img='./images/sports.jpg' lineText='Sports' alt={'sports-img'} />
                    <NavigationLine img='./images/gaming.jpg' lineText='Gaming' alt={'gaming-img'} />
                    <NavigationLine img='./images/news.jpg' lineText='News' alt={'news-img'} />
                    <NavigationLine img='./images/live.jpg' lineText='Live' alt={'live-img'} />
                    <NavigationLine img='./images/360-video.jpg' lineText='360° Video' alt={'360°-video-img'} />
                </div>
                <hr />
                <NavigationLine iconName='add_circle' lineText='Browse channels' />
                <hr />
                <div className='more-from-youtube'>
                    <p className='navigation-title'>MORE FROM YOUTUBE</p>
                    <NavigationLine lineText='YouTube Premium' fa='fab fa-youtube fa-icons' />
                    <NavigationLine lineText='Live' fa='fas fa-stream fa-icons' />
                </div>
                <hr />
                <NavigationLine iconName='settings' lineText='Settings' />
                <NavigationLine iconName='flag' lineText='Report history' />
                <NavigationLine iconName='help' lineText='Help' />
                <NavigationLine iconName='feedback' lineText='Send feedback' />
                <hr />
                <div className='navigation-bottom-container'>
                    <NavigationBottom>
                        <NavigationBottom.Row>
                            <NavigationBottom.Row.OneLine>About</NavigationBottom.Row.OneLine>
                            <NavigationBottom.Row.OneLine>Press</NavigationBottom.Row.OneLine>
                            <NavigationBottom.Row.OneLine>Copyright</NavigationBottom.Row.OneLine>
                        </NavigationBottom.Row>
                        <NavigationBottom.Row>
                            <NavigationBottom.Row.OneLine>Contact us</NavigationBottom.Row.OneLine>
                            <NavigationBottom.Row.OneLine>Creators</NavigationBottom.Row.OneLine>
                        </NavigationBottom.Row>
                        <NavigationBottom.Row>
                            <NavigationBottom.Row.OneLine>Advertise</NavigationBottom.Row.OneLine>
                            <NavigationBottom.Row.OneLine>Developers</NavigationBottom.Row.OneLine>
                        </NavigationBottom.Row>
                    </NavigationBottom>
                    <NavigationBottom>
                        <NavigationBottom.Row>
                            <NavigationBottom.Row.OneLine>Terms</NavigationBottom.Row.OneLine>
                            <NavigationBottom.Row.OneLine>Privacy</NavigationBottom.Row.OneLine>
                            <NavigationBottom.Row.OneLine>Policy & Safety</NavigationBottom.Row.OneLine>
                        </NavigationBottom.Row>
                        <NavigationBottom.Row>
                            <NavigationBottom.Row.OneLine>Test new features</NavigationBottom.Row.OneLine>
                        </NavigationBottom.Row>
                    </NavigationBottom>
                    <p className='copyright-text'>© 2020 Google LLC</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default Navigation;