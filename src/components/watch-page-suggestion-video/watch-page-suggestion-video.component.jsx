import React from 'react';
import './watch-page-suggestion-video.styles.scss';
import { getDateShorten } from '../homepage-video/views-and-date-calc.js';
import { useHistory } from 'react-router-dom';

function WatchPageSuggestionVideo({data}) {

    let history = useHistory();

    const handleClick = () => {
        let path = '/watch?v=' + data.id.videoId;
        history.push(path);
    }

    return(
        <div className='watch-page-suggestion-video' onClick={handleClick}>
            <img alt='video-thumbnail-img' src={data.snippet.thumbnails.medium.url} className='video-thumbnail' />
            <div className='video-content'>
                <div className='video-title'>{data.snippet.title}</div>
                <div className='title-and-date-container'>
                    <div className='channel-title'>{data.snippet.channelTitle}</div>
                    <div className='date-published'>{getDateShorten(data.snippet.publishedAt)}</div>
                </div>
            </div>
        </div>
    )
}

export default WatchPageSuggestionVideo;