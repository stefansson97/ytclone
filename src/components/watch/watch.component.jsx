import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { handleVideoId, numberWithCommas, formatDate, getLikesShorten } from './handleVideo';
import './watch.styles.scss';
import VideoPageBottomDetails from '../video-page-bottom-details/video-page-bottom-details.component';
import WatchPageSuggestions from '../watch-page-suggestions/watch-page-suggestions.component';

function Watch() {

    const [video, setVideo] = useState(null);

    let location = useLocation();
    
    let id = handleVideoId(location.search);
    
    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&part=player&id=' + id + '&key=AIzaSyBruxyIXl5dYfYl43sIFGQYMa2gJAUtHbQ')
            .then(response => response.json())
            .then(data => setVideo(data.items[0]));
    }, [id]);

    return (
        <div className='video-page-div'>
            {video === null ? null : (
                <div className='video-page-video-data'>
                    <div className='embedded-video-container' dangerouslySetInnerHTML = { {__html:  video.player.embedHtml ? video.player.embedHtml : ""} } />
                    <div className='video-title'>{video.snippet.title}</div>
                    <div className='video-details'>
                        <div className='video-details-left'>
                            <div className='video-details-views'>{video.statistics.viewCount ? numberWithCommas(video.statistics.viewCount) : null}</div>
                            <div className='video-details-dot'>•</div>
                            <div className='video-details-date'>{video.snippet.publishedAt ? formatDate(video.snippet.publishedAt) : null}</div>
                            </div>
                        <div className='video-details-right'>
                            <div className='video-details-stats'>
                                <i className="material-icons">thumb_up</i>
                                {video.statistics.likeCount ? getLikesShorten(video.statistics.likeCount) : null}    
                            </div>
                            <div className='video-details-stats'>
                                <i className="material-icons">thumb_down</i>
                                {video.statistics.dislikeCount ? getLikesShorten(video.statistics.dislikeCount) : null}
                            </div>
                            <div className='video-details-stats'>
                                <i className="material-icons">reply</i>
                                SHARE
                            </div>
                            <div className='video-details-stats'>
                                <i className="material-icons">playlist_add</i>
                                SAVE
                            </div>
                            <i className="material-icons">more_horiz</i>
                        </div>
                    </div>
                    <VideoPageBottomDetails channelId={video.snippet.channelId} channelName={video.snippet.channelTitle} videoDescription={video.snippet.description}/>
                </div>
            )}
            <WatchPageSuggestions channelTitle={video ? video.snippet.channelTitle : null} videoTitle={video ? video.snippet.title : null} id={id} />
        </div>
    )
}

export default Watch;
