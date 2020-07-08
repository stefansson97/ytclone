import React, { useState, useEffect } from 'react';
import './homepage-video.styles.scss';

function HomepageVideo({data}) {

    const [userAvatar, setUserAvatar] = useState(null);

    const channelId = data.snippet.channelId;

    useEffect( () => {
        fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + channelId + '&key=AIzaSyC22PzHEq4j0q7OOp7ZSharUT7bPt5LuCk')
            .then(response => response.json())
            .then(data => setUserAvatar(data.items[0].snippet.thumbnails.default.url));   
    }, [channelId]);

    return(
        <div>
            {
                userAvatar ? (
                    <div className='video-container'>
                        <img alt='video-preview-img' className='video-preview-img' src={data.snippet.thumbnails.medium.url}></img>
                        <div className='video-preview-top'>
                            <img alt='user-avatar-img' className='user-avatar-img' src={userAvatar}></img>
                            <p className='video-preview-title'>{data.snippet.title}</p>
                        </div>
                        <div className='video-preview-bottom'>
                            <p className='video-preview-channel-title'>{data.snippet.channelTitle}</p>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default HomepageVideo;