import React from 'react';
import './navigation.styles.scss';
import SignInButton from '../sign-in-button/sign-in-button.component';

function Navigation() {
    return(
        <div className='navigation-container'>
            <div className='navigation-container-default'>
                <div className='navigation-line'>
                    <i className="material-icons">home</i>
                    <p>Home</p>
                </div>
                <div className='navigation-line'>
                    <i className="material-icons">local_fire_department</i>
                    <p>Trending</p>
                </div>
                <div className='navigation-line'>
                    <i className="material-icons">subscriptions</i>
                    <p>Subscriptions</p>
                </div>
                <hr />
                <div className='navigation-line'>
                    <i className="material-icons">video_library</i>
                    <p>Library</p>
                </div>
                <div className='navigation-line'>
                    <i className="material-icons">restore</i>
                    <p>History</p>
                </div>
                <hr />
                <div className='sign-in-call-container'>
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <div className='sign-in-button'>
                        <SignInButton />
                    </div>
                </div>
                <hr />
                <div className='best-of-youtube'>
                    <p className='title'>BEST OF YOUTUBE</p>
                    <div className='navigation-line'>
                        <img src={require('./images/music.jpg')} alt='music-img'></img>
                        <p>Music</p>
                    </div>
                    <div className='navigation-line'>
                        <img src={require('./images/sports.jpg')} alt='sports-img'></img>
                        <p>Sports</p>
                    </div>
                    <div className='navigation-line'>
                        <img src={require('./images/gaming.jpg')} alt='gaming-img'></img>
                        <p>Gaming</p>
                    </div>
                    <div className='navigation-line'>
                        <img src={require('./images/news.jpg')} alt='news-img'></img>
                        <p>News</p>
                    </div>
                    <div className='navigation-line'>
                        <img src={require('./images/live.jpg')} alt='live-img'></img>
                        <p>Live</p>
                    </div>
                    <div className='navigation-line'>
                        <img src={require('./images/360-video.jpg')} alt='360°-video-img'></img>
                        <p>360° Video</p>
                    </div>
                </div>
                <hr/>
                <div className='navigation-line'>
                    <i className="material-icons">add_circle</i>
                    <p>Browse channels</p>
                </div>
                <hr/>
                <div className='more-from-youtube'>
                    <p className='title'>MORE FROM YOUTUBE</p>
                    <div className='navigation-line'>
                        <i className="fab fa-youtube fa-icons"></i>
                        <p>YouTube Premium</p>
                    </div>
                    <div className='navigation-line'>
                        <i className="fas fa-stream fa-icons"></i>
                        <p>Live</p>
                    </div>
                </div>
                <hr/>
                <div className='navigation-line'>
                    <i className="material-icons">settings</i>
                    <p>Settings</p>
                </div>
                <div className='navigation-line'>
                    <i className="material-icons">flag</i>
                    <p>Report history</p>
                </div>
                <div className='navigation-line'>
                    <i className="material-icons">help</i>
                    <p>Help</p>
                </div>
                <div className='navigation-line'>
                    <i className="material-icons">feedback</i>
                    <p>Send feedback</p>
                </div>
                <hr/>
                <div className='navigation-bottom-container'> 
                    <div className='navigation-bottom'>
                        <div className='navigation-bottom-row'>
                            <a href="youtube.com">About</a>
                            <a href="youtube.com">Press</a>
                            <a href="youtube.com">Copyright</a>
                        </div>
                        <div className='navigation-bottom-row'>
                            <a href="youtube.com">Contact us</a>
                            <a href="youtube.com">Creators</a>
                        </div>
                        <div className='navigation-bottom-row'>
                            <a href="youtube.com">Advertise</a>
                            <a href="youtube.com">Developers</a>
                        </div>  
                    </div>
                    <div className='navigation-bottom'>
                        <div className='navigation-bottom-row'>
                            <a href="youtube.com">Terms</a>
                            <a href="youtube.com">Privacy</a>
                            <a href="youtube.com">Policy & Safety</a>
                        </div>
                        <div className='navigation-bottom-row'>
                            <a href="youtube.com">Test new features</a>
                        </div>
                    </div>
                    <p className='copyright-text'>© 2020 Google LLC</p>
                </div>
            </div>
            <div className='navigation-container-responsive'>
                <div className='navigation-line-responsive'>
                    <i className="material-icons">home</i>
                    <p>Home</p>
                </div>
                <div className='navigation-line-responsive'>
                    <i className="material-icons">local_fire_department</i>
                    <p>Trending</p>
                </div>
                <div className='navigation-line-responsive'>
                    <i className="material-icons">subscriptions</i>
                    <p>Subscriptions</p>
                </div>
                <div className='navigation-line-responsive'>
                    <i className="material-icons">video_library</i>
                    <p>Library</p>
                </div>
                <div className='navigation-line-responsive'>
                    <i className="material-icons">restore</i>
                    <p>History</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation;