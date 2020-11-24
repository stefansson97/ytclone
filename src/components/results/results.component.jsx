import React, { useState, useEffect } from 'react';
import './results.styles.scss';
import axios from 'axios';
import Navigation from '../navigation/navigation.component';
import { useLocation } from 'react-router-dom';
import SearchResultVideo from '../search-result-video/search-result-video.component';
import SearchResultChannel from '../search-result-channel/search-result-channel.component';
import handleSearchQuery from './handle-search-query';
import HorizontalLineResultsPage from '../horizonal-line-results-page/horizontal-line-results-page.component';

function Results() {

    const [results, setResults] = useState(null);

    //using location to get the query string from the URL and setting it as searchQuery
    let location = useLocation();
    let searchQuery = handleSearchQuery(location.search);
    
    useEffect(() => {
        if(searchQuery) {
          axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchQuery + '&key=AIzaSyBruxyIXl5dYfYl43sIFGQYMa2gJAUtHbQ')
            .then(response => setResults(response.data));
        }   
    }, [searchQuery]);

    return(
        <div className='results-container'>
            <Navigation />
            <div className='results'>
              <div className='results-filter'>
                <div className='filter-icon-text'>
                  <i className="material-icons">tune</i>
                  <div>FILTER</div>
                </div>
                <HorizontalLineResultsPage />
              </div>
            {results === null ? null :
                results.items.map(video => {
                  if(video.id.kind === 'youtube#channel') {
                    return <SearchResultChannel data={video} key={video.id.channelId}/>
                  } else if(video.id.kind === 'youtube#video') {
                    return <SearchResultVideo data={video} key={video.id.videoId}/>
                  }
                  return null;
                })
            }
            </div>
        </div>
    )
}

export default Results;
