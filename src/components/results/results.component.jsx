import React, { useState, useEffect } from 'react';
import './results.styles.scss';
import Navigation from '../navigation/navigation.component';
import { useParams } from 'react-router-dom';
import SearchResultVideo from '../search-result-video/search-result-video.component';
import SearchResultChannel from '../search-result-channel/search-result-channel.component';

function Results() {

    const [results, setResults] = useState(null);

    let {searchQuery} = useParams();

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=' + searchQuery + '&key=AIzaSyDQ5TNPvR_QKFdRrLC1dPAQRVv1XlJ0xxE')
        .then(response => response.json())
        .then(data => setResults(data));
    }, []);

    return(
        <div className='results-container'>
            <Navigation />
            <div className='results'>
            {results === null ? null :
                results.items.map((video, idx) => {
                  if(video.id.kind === 'youtube#channel') {
                    return <SearchResultChannel data={video.snippet}/>
                  } else if(video.id.kind === 'youtube#video') {
                    return <SearchResultVideo data={video.snippet}/>
                  }
                })
            }
            </div>
        </div>
    )
}

export default Results;
