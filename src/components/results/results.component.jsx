import React, { useState, useEffect } from 'react';
import './results.styles.scss';
import Navigation from '../navigation/navigation.component';
import { useLocation } from 'react-router-dom';
import SearchResultVideo from '../search-result-video/search-result-video.component';
import SearchResultChannel from '../search-result-channel/search-result-channel.component';
import handleSearchQuery from './handleSearchQuery';

function Results() {

    const [results, setResults] = useState(null);

    //using location to get the query string from the URL and setting it as searchQuery
    let location = useLocation();
    let searchQuery = handleSearchQuery(location.search);
    
    useEffect(() => {
        if(searchQuery) {
            fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchQuery + '&key=AIzaSyDQ5TNPvR_QKFdRrLC1dPAQRVv1XlJ0xxE')
          .then(response => response.json())
          .then(data => setResults(data));
        }   
    }, [searchQuery]);

    return(
        <div className='results-container'>
            <Navigation />
            <div className='results'>
            {results === null ? null :
                results.items.map((video, idx) => {
                  if(video.id.kind === 'youtube#channel') {
                    return <SearchResultChannel data={video.snippet} key={idx}/>
                  } else if(video.id.kind === 'youtube#video') {
                    return <SearchResultVideo data={video.snippet} key={idx}/>
                  }
                  return null;
                })
            }
            </div>
        </div>
    )
}

export default Results;
