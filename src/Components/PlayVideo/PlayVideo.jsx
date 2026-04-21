import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { value_converter } from '../../data'
import moment from 'moment'
import { API_KEY } from '../../data'


const PlayVideo = ({videoId}) => {
    const [apiData, setApiData] = React.useState({});
    const [channelData, setChannelData] = React.useState({});
    const [commentData, setCommentData] = React.useState([]);
    const fetchVideoData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            const result = await response.json();
            setApiData(result.items[0]);
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    React.useEffect(() => {
        fetchVideoData();
    }, [videoId]);
    // Fetch channel data using channelId from video data
    const channelId = apiData.snippet?.channelId;
    const fetchChannelData = async () => {
        if (!channelId) return; 
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`);
            const result = await response.json();
            setChannelData(result.items[0]);
        } catch (error) {
            console.error("Error fetching channel data:", error);
        }
    };

    React.useEffect(() => {
        fetchChannelData();
    }, [channelId]);
  // Fetch Comment data
    const fetchCommentData = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=5`);
            const result = await response.json();
            setCommentData(result.items || []);
        } catch (error) {
            console.error("Error fetching comment data:", error);
        }   
    };

    React.useEffect(() => {
        fetchCommentData();
    }, [videoId]);

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3>{apiData.snippet?.title}</h3>
            <div className="play-video-info">
                <p>{value_converter(apiData.statistics?.viewCount)} Views &bull; {moment(apiData.snippet?.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={like} alt="" /> {value_converter(apiData.statistics?.likeCount)}</span>
                    <span><img src={dislike} alt="" /> {value_converter(apiData.statistics?.dislikeCount)}</span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />
        <div className="publisher">
            <img src={channelData.snippet?.thumbnails?.default?.url || user_profile} alt="" />
            <div>
                <p>{channelData.snippet?.title || "Channel Name"}</p>
                <span>{value_converter(channelData.statistics?.subscriberCount || "1M")} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData.snippet?.description || "No description available."}</p>
            <p>Subscribe GreatStack to watch more tutorials on web development</p>
            <hr />
        </div>
        <div className="comment-heading">
            <h4>{value_converter(apiData.statistics?.commentCount)} Comments</h4>
        </div>
            
            <div className="comment">
                {commentData.map((comment) => (
                    <div key={comment.id} className="single-comment">
                        <img src={comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || user_profile} alt="" />   
                        <div>
                            <p>{comment.snippet?.topLevelComment?.snippet?.authorDisplayName || "User Name"}</p>
                            <span>{comment.snippet?.topLevelComment?.snippet?.textDisplay || "No comment text available."}</span>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default PlayVideo