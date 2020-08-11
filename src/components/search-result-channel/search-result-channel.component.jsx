import React from 'react';
import './search-result-channel.styles.scss';

//when we get a channel as an answer of search

function SearchResultChannel({data}) {
  return(
    <div className='search-result-channel-div'>
      <hr className='channel-hr'/>
      <div className='search-result-channel-container'>
        <img alt='channel-avatar-img' src={data.thumbnails.medium.url} className='channel-avatar' />
        <div className='channel-content'>
          <div className='channel-title'>{data.channelTitle}</div>
          <div className='channel-description'>{data.description}</div>
        </div>
        <button className='search-result-subscribe-btn'>SUBSCRIBE</button>
      </div>
      <hr className='channel-hr'/>
    </div>
  )
}

export default SearchResultChannel;
