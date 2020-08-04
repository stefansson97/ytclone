import React from 'react';
import './search-result-channel.styles.scss';

function SearchResultChannel({data}) {
  return(
    <div className='search-result-channel-container'>
      <hr />
      <img alt='channel-avatar-img' src={data.thumbnails.medium.url} className='channel-avatar' />
      <div className='channel-content'>
        <div className='channel-title'>{data.channelTitle}</div>
        <div className='channel-description'>{data.description}</div>
      </div>
      <hr />
    </div>
  )
}

export default SearchResultChannel;
