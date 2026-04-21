import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'


const Feed = ({ category }) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

      const response = await fetch(videoList_url)
      const result = await response.json()

      setData(
        (result.items || []).filter((item) => {
          const views = Number(item.statistics?.viewCount || 0);
          return views > 0;
        })
      );
    } catch (error) {
      console.error("Error fetching videos:", error)
      setData([])
    }
  }

  useEffect(() => {
    fetchData()
  }, [category])

  return (
    <div className="feed">
      {data.map((item) => (
        <Link
          key={item.id}
          to={`/video/${item.snippet.categoryId}/${item.id}`}
          className='card'
        >
          <img
            src={item.snippet?.thumbnails?.high?.url}
            alt={item.snippet?.title}
          />

          <h2>{item.snippet?.title}</h2>{/* If item.snippet exists, then get title. Otherwise, return undefined instead of crashing. */}
          <h3>{item.snippet?.channelTitle}</h3>

          <p>
            {value_converter(item.statistics?.viewCount)} views &bull;{" "}
            {moment(item.snippet?.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default Feed