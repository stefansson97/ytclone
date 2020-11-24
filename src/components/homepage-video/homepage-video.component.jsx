import React, { useState, useEffect } from 'react';
import './homepage-video.styles.scss';
import axios from 'axios';
import { getViewsShorten, getDateShorten, getTitleShorten } from './views-and-date-calc';
import { useHistory } from 'react-router-dom';

function HomepageVideo({data}) {

    const [userAvatar, setUserAvatar] = useState(null);

    let history = useHistory();
    const channelId = data.snippet.channelId;

    //by default api gives us raw title, views and date
    
    const title = getTitleShorten(data.snippet.title);
    const viewCount = getViewsShorten(data.statistics.viewCount);
    const datePublished = getDateShorten(new Date(data.snippet.publishedAt), new Date());

    useEffect( () => {
        axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + channelId + '&key=AIzaSyBruxyIXl5dYfYl43sIFGQYMa2gJAUtHbQ')
            .then(response => setUserAvatar(response.data.items[0].snippet.thumbnails.default.url));   
    }, [channelId]);

    const handleClick = () => {
        let path = '/watch?v=' + data.id;
        history.push(path);
    }

    return(
        <>
            {
                userAvatar ? (
                    <div className='video-container' onClick={handleClick}>
                        <img alt='video-preview-img' className='video-preview-img' src={data.snippet.thumbnails.medium.url}></img>
                        <div className='video-preview-top'>
                            <img alt='user-avatar-img' className='user-avatar-img' src={userAvatar}></img>
                            <div className='video-preview-title'>
                                {title}
                            </div>
                        </div>
                        <div className='video-preview-middle'>
                            <div className='video-preview-channel-title'>{data.snippet.channelTitle}</div>
                        </div>
                        <div className='video-preview-bottom'>
                            <div className='video-preview-views'>{viewCount}</div>
                            <div className='video-preview-dot'>•</div>
                            <div className='video-preview-date'>{datePublished}</div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default HomepageVideo;