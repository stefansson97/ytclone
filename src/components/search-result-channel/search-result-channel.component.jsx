import React from 'react';
import './search-result-channel.styles.scss';
import RedSubscribeButton from '../red-subscribe-button/red-subscribe-button.component';

//when we get a channel as an answer of search

function SearchResultChannel({data}) {
  return(
    <div className='search-result-channel-div'>
      <hr className='channel-hr'/>
      <div className='search-result-channel-container'>
        <img alt='channel-avatar-img' src={data.snippet.thumbnails.medium.url} className='channel-avatar' />
        <div className='channel-content'>
          <div className='channel-title'>{data.snippet.channelTitle}</div>
          <div className='channel-description'>{data.snippet.description}</div>
        </div>
        <RedSubscribeButton />
      </div>
      <hr className='channel-hr'/>
    </div>
  )
}

export default SearchResultChannel;
