import React from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/img/thumbnail1.png';
import thumbnail2 from '../../assets/img/thumbnail2.png';
import thumbnail3 from '../../assets/img/thumbnail3.png';
import thumbnail4 from '../../assets/img/thumbnail4.png';
import thumbnail5 from '../../assets/img/thumbnail5.png';
import thumbnail6 from '../../assets/img/thumbnail6.png';
import thumbnail7 from '../../assets/img/thumbnail7.png';
import thumbnail8 from '../../assets/img/thumbnail8.png';
import VideoCard from '../VideoCard/VideoCard';

const videos = [
  {
    id: 1,
    thumbnail: thumbnail1,
    title: "Youtube clone",
    channel: "RizzTube",
    views: "100K views",
    timestamp: "2 days ago"
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    title: "How to make a website",
    channel: "Web Dev Simplified",
    views: "240K views",
    timestamp: "3 days ago"
  },
  {
    id: 3,
    thumbnail: thumbnail3,
    title: "React JS Tutorial for Beginners",
    channel: "Programming with Mosh",
    views: "500K views",
    timestamp: "1 week ago"
  },
  {
    id: 4,
    thumbnail: thumbnail4,
    title: "Build a Portfolio Website with React",
    channel: "JavaScript Mastery",
    views: "320K views",
    timestamp: "5 days ago"
  },
  {
    id: 5,
    thumbnail: thumbnail5,
    title: "Responsive Website Design Tutorial",
    channel: "Design Course",
    views: "180K views",
    timestamp: "3 weeks ago"
  },
  {
    id: 6,
    thumbnail: thumbnail6,
    title: "UI/UX Design Masterclass",
    channel: "DesignCode",
    views: "420K views",
    timestamp: "1 month ago"
  },
  {
    id: 7,
    thumbnail: thumbnail7,
    title: "Full Stack Development Crash Course",
    channel: "Traversy Media",
    views: "800K views",
    timestamp: "2 weeks ago"
  },
  {
    id: 8,
    thumbnail: thumbnail8,
    title: "10 JavaScript Projects in 10 Hours",
    channel: "Clever Programmer",
    views: "1.2M views",
    timestamp: "1 month ago"
  },
  {
    id: 2,
    thumbnail: thumbnail2,
    title: "How to make a website",
    channel: "Web Dev Simplified",
    views: "240K views",
    timestamp: "3 days ago"
  },
  {
    id: 6,
    thumbnail: thumbnail6,
    title: "UI/UX Design Masterclass",
    channel: "DesignCode",
    views: "420K views",
    timestamp: "1 month ago"
  } 
];

const Feed = () => {
  return (
    <div className="feed">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;

