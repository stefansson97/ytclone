import React, { useState, useEffect } from 'react';
import './content.styles.scss';
import axios from 'axios';
import HomepageVideo from '../homepage-video/homepage-video.component';
import { useNavbarStyle } from '../../store/NavbarContext';

function Content() {

    const [videos, setVideos] = useState(null);

    const [trendingButton, setTrendingButton] = useState(false);

    let navStyle = useNavbarStyle();

    useEffect( () => {
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=RS&key=AIzaSyC22PzHEq4j0q7OOp7ZSharUT7bPt5LuCk')
            .then(response => setVideos(response.data));
    }, []);

    function handleTrendingClick() {
        setTrendingButton(true);
    }

    return(
        <div className={'content' + (navStyle ? ' nav-toggle-active-content' : ' no-sidebar-and-screen-size-medium')}>
            <div className='content-title'>
                <p>Recommended</p>
            </div>
            <div className='videos-container'>
            {videos === null ? null :
                videos.items.map((video, idx) => {
                    if(idx <= 7) {
                        return <HomepageVideo key={video.id} data={video}/>
                    } else {
                        return null;
                    }
                })
            }
            </div>
            <hr className='content-hr'/>
            <div className='content-title content-title-trending'>
                <p>Trending</p>
            </div>
            <div className='videos-container'>
            {videos === null ? null :
                videos.items.map((video, idx) => {
                    if(idx > 7 && (trendingButton ? (idx < 20) : (idx < 12))) {
                        return <HomepageVideo key={video.id} data={video}/>
                    } else {
                        return null;
                    }
                })
            }
            </div>
            {trendingButton ? (
                <hr className='content-hr trending-hr'/>
            ) : (
                <div className='trending-arrow' onClick={handleTrendingClick}><i className="material-icons">keyboard_arrow_down</i></div>
            )}
            <div className='videos-container'>
            {videos === null ? null :
                videos.items.map((video, idx) => {
                    if(idx >= 20) {
                        return <HomepageVideo key={video.id} data={video}/>
                    } else {
                        return null;
                    }
                })
            }
            </div>
        </div>
    )
}

export default Content;
