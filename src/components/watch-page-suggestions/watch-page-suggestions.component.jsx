import React, {useState, useEffect} from 'react';
import './watch-page-suggestions.styles.scss';
import WatchPageSuggestionVideo from '../watch-page-suggestion-video/watch-page-suggestion-video.component';

function WatchPageSuggestions({videoTitle, channelTitle, id}) {
    const [suggestions, setSuggestions] = useState(null);

    let searchQuery = videoTitle + ' ' + channelTitle;

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchQuery + '&key=AIzaSyBruxyIXl5dYfYl43sIFGQYMa2gJAUtHbQ')
            .then(response => response.json())
            .then(data => setSuggestions(data));
    }, [searchQuery])

    return (
        <div className='watch-page-suggestions'>
            {suggestions ? (suggestions.items.filter(suggestion => suggestion.id.kind === 'youtube#video' && suggestion.id.videoId !== id)
                .map((video, idx) => <WatchPageSuggestionVideo key={idx} data={video} />)) : null}
        </div>
    )
}

export default WatchPageSuggestions;