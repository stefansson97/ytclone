import React from 'react';
import './search-result-video.styles.scss';
import { getDateShorten } from '../homepage-video/views-and-date-calc.js';
import { useHistory } from 'react-router-dom';

//when we get a video as a result of searching

function SearchResultVideo({data}) {

  let history = useHistory();

  const handleClick = () => {
    let path = '/watch?v=' + data.id.videoId;
    history.push(path);
  } 

  return(
    <div className='search-result-video-container' onClick={handleClick}>
      <img alt='video-thumbnail-img' src={data.snippet.thumbnails.medium.url} className='video-thumbnail' />
      <div className='video-content'>
        <div className='video-title'>{data.snippet.title}</div>
        <div className='title-and-date-container'>
          <div className='channel-title'>{data.snippet.channelTitle}</div>
          <div className='dot'>•</div>
          <div className='date-published'>{getDateShorten(new Date(data.snippet.publishedAt), new Date())}</div>
        </div>
        <div className='video-description'>{data.snippet.description}</div>
      </div>
    </div>
  )
}

export default SearchResultVideo;
