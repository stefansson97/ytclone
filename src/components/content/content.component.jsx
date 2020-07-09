import React, { useState, useEffect } from 'react';
import './content.styles.scss';
import HomepageVideo from '../homepage-video/homepage-video.component';

function Content() {

    const [videos, setVideos] = useState(null);

    useEffect( () => {
        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16&regionCode=RS&key=AIzaSyC22PzHEq4j0q7OOp7ZSharUT7bPt5LuCk')
            .then(response => response.json())
            .then(data => setVideos(data));   
    }, []);

    return(
        <div className='content'>
            <div className='content-title'>
                <p>Recommended</p>
            </div>
            <div className='videos-container'>
            {videos === null ? null : 
                videos.items.map((video, idx) => <HomepageVideo key={idx} data={video}/>)
            }
            </div>
        </div>
    )
}

export default Content;