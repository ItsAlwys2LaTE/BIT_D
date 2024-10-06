import React from 'react';
import './VideoGallery.css';

function VideoGallery() {
  return (
    <div>
      <div className="videos-gallery">
        <div className="img-vid-title">Explore Videos</div>
        <div className="vid-container">
          <div className="vid-list">
            <iframe
              src="https://www.youtube.com/embed/f_Z6KqKux0c?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 1"
            ></iframe>
          </div>
          <div className="vid-list">
            <iframe
              src="https://www.youtube.com/embed/r6-pvgHt-xA?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 2"
            ></iframe>
          </div>
          <div className="vid-list">
            <iframe
              src="https://www.youtube.com/embed/f_Z6KqKux0c?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 3"
            ></iframe>
          </div>
          <div className="vid-list">
            <iframe
              src="https://www.youtube.com/embed/f_Z6KqKux0c?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 4"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
