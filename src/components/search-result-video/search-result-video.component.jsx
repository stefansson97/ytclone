import React from 'react';
import './search-result-video.styles.scss';
import { getDateShorten } from '../homepage-video/views-and-date-calc.js';

//when we get a video as an answer of search

function SearchResultVideo({data}) {
  return(
    <div className='search-result-video-container'>
      <img alt='video-thumbnail-img' src={data.thumbnails.medium.url} className='video-thumbnail' />
      <div className='video-content'>
        <div className='video-title'>{data.title}</div>
        <div className='title-and-date-container'>
          <div className='channel-title'>{data.channelTitle}</div>
          <div className='dot'>•</div>
          <div className='date-published'>{getDateShorten(data.publishedAt)}</div>
        </div>
        <div className='video-description'>{data.description}</div>
      </div>
    </div>
  )
}

export default SearchResultVideo;
