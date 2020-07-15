import React, { useState, useEffect } from 'react';
import './results.styles.scss';
import Navigation from '../navigation/navigation.component';
import { useParams } from 'react-router-dom';

function Results() {

    const [results, setResults] = useState(null);

    let {searchQuery} = useParams();

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + searchQuery + '&key=AIzaSyC22PzHEq4j0q7OOp7ZSharUT7bPt5LuCk')
        .then(response => response.json())
        .then(data => setResults(data));
    }, [searchQuery]);

    return(
        <div className='results-container'>
            <Navigation />
            <div className='results'>
            {results === null ? null : 
                results.items.map((video, idx) => <p key={idx}>{video.snippet.title}</p>)
            }
            </div>
        </div>
    )
}

export default Results;