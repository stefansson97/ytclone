import React, {useState, useEffect} from 'react';
import './watch-page-suggestions.styles.scss';
import axios from 'axios';
import WatchPageSuggestionVideo from '../watch-page-suggestion-video/watch-page-suggestion-video.component';

function WatchPageSuggestions({videoTitle, channelTitle, id}) {
    const [suggestions, setSuggestions] = useState(null);

    let searchQuery = videoTitle + ' ' + channelTitle;

    //there's a posibility search query composed of video title and channel title won't get us back many results
    //in case if number of results is lower than 5, we fetch again but now our search query is only channel title
    
    useEffect(() => {
        if(searchQuery !== null) {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchQuery + '&key=AIzaSyBSlBq0R6mMBULGpb3yZUZwjftdaVBac9Y')
            .then(response => {
                if(Object.keys(response.data)[0] !== 'error' && response.data.items.length >= 5) {
                    setSuggestions(response.data);
                } else {
                    return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + channelTitle + '&key=AIzaSyBSlBq0R6mMBULGpb3yZUZwjftdaVBac9Y')
                            .then(response => setSuggestions(response.data));
                }
            });
    }}, [searchQuery, channelTitle])

    return (
        <div className='watch-page-suggestions'>
            {suggestions ? (suggestions.items.filter(suggestion => suggestion.id.kind === 'youtube#video' && suggestion.id.videoId !== id)
                .map(video => <WatchPageSuggestionVideo key={video.id.videoId} data={video} />)) : null}
        </div>
    )
}

export default WatchPageSuggestions;