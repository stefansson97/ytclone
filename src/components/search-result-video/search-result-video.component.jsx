import React from 'react';
import './search-result-video.styles.scss';
import { getDateShorten } from '../homepage-video/views-and-date-calc.js';

function SearchResultVideo({data}) {
  return(
    <div className='search-result-video-container'>
      <img alt='video-thumbnail-img' src={data.thumbnails.medium.url} />
      <div className='video-content'>
        <div className='video-title'>{data.title}</div>
        <div className='channel-title'>{data.channelTitle}</div>
        <div className='date-published'>{getDateShorten(data.publishedAt)}</div>
        <div className='video-description'>{data.description}</div>
      </div>
    </div>
  )
}

export default SearchResultVideo;
