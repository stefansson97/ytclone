import React, { useState, useEffect } from 'react';
import './video-page-bottom-details.styles.scss';
import axios from 'axios';
import {getSubscribersShorten, handleVideoDescription} from './subscribers-and-description';
import RedSubscribeButton from '../red-subscribe-button/red-subscribe-button.component';

function VideoPageBottomDetails({channelId, channelName, videoDescription}) {

    const [userAvatar, setUserAvatar] = useState(null);
    const [subscriberCount, setSubscriberCount] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect( () => {
        axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + channelId + '&key=AIzaSyBruxyIXl5dYfYl43sIFGQYMa2gJAUtHbQ')
            .then(response => {
                setUserAvatar(response.data.items[0].snippet.thumbnails.default.url);
                setSubscriberCount(response.data.items[0].statistics.subscriberCount);
            });   
    }, [channelId]);

    function handleClick() {
        setShowMore(prevValue => !prevValue);
    }

    return (
        <div className='video-page-bottom-details-container'>
            <hr className='video-details-hr'/>
            <div className='video-page-bottom-details'>
                <div className='video-page-bottom-details-avatar-name-subscribers'>
                    <div className='vpbd-left'>
                        <img alt='user-avatar' className='user-avatar' src={userAvatar ? userAvatar : null}/>
                        <div className='vpbd-name-subscribers'>
                            <div className='vpbd-name'>{channelName}</div>
                            <div className='vpbd-subscribers'>{subscriberCount ? getSubscribersShorten(subscriberCount) : null}</div>
                        </div>
                    </div>
                    <div className='vpbd-right'>
                        <RedSubscribeButton />
                    </div>
                </div>
                <div className='vpbd-video-description'>
                    {showMore ? videoDescription : handleVideoDescription(videoDescription)}
                </div>
            </div>
            <button className='show-more-btn' onClick={handleClick}>
                {showMore ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
            <hr className='video-details-hr'/>
        </div>
    )
}

export default VideoPageBottomDetails;
