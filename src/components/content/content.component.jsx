import React, { useState, useEffect } from 'react';
import './content.styles.scss';
import HomepageVideo from '../homepage-video/homepage-video.component';
import { connect } from 'react-redux';

function Content({navigationToggle}) {

    const [videos, setVideos] = useState(null);

    const [trendingButton, setTrendingButton] = useState(false);

    useEffect( () => {
        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=RS&key=AIzaSyC22PzHEq4j0q7OOp7ZSharUT7bPt5LuCk')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    function handleTrendingClick() {
        setTrendingButton(true);
    }

    return(
        <div className={'content' + (navigationToggle ? ' nav-toggle-active-content' : '')}>
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

//pulling navigationToggle from redux to change component style (width) if it's true or false

const mapStateToProps = (state) => {
    const { navigationToggle } = state;
    return navigationToggle;
};

export default connect(mapStateToProps)(Content);
