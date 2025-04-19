import React from 'react';
import './VideoCard.css';

const VideoCard = ({ thumbnail, title, channel, views, timestamp }) => {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <h3>{channel}</h3>
      <p>{views} • {timestamp}</p>
    </div>
  );
};

export default VideoCard; 