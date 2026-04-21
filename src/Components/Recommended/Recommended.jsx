import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'
import { useNavigate } from 'react-router-dom'



const Recommended = ({ categoryId }) => {
    const navigate = useNavigate();
    const [recommendedVideos, setRecommendedVideos] = React.useState([]);

    React.useEffect(() => {
        const fetchRecommendedVideos = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
                );
                const result = await response.json();
                setRecommendedVideos(result.items || []);
            } catch (error) {
                console.error("Error fetching recommended videos:", error);
                setRecommendedVideos([]);
            }
        };
        fetchRecommendedVideos();
    }, [categoryId]); // Re-fetch whenever categoryId changes

    const handleVideoClick = (videoId) => {
        navigate(`/video/${categoryId}/${videoId}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='recommended'>
            {recommendedVideos.map((video) => (
                <div
                    key={video.id}
                    className="side-video-list"
                    onClick={() => handleVideoClick(video.id)}
                >
                    <img
                        src={video.snippet?.thumbnails?.medium?.url}
                        alt={video.snippet?.title}
                    />
                    <div className="vid-info">
                        <h4>{video.snippet?.title}</h4>
                        <p>{video.snippet?.channelTitle}</p>
                        <p className="vid-stats">
                            {Number(video.statistics?.viewCount).toLocaleString()} views
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recommended;