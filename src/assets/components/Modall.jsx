

import React from 'react';
import './modal.css';

const Modall = ({ movie, status, toggleModal }) => {
  if (!movie?.video) {
    return null; // Avoid rendering if the video URL is missing
  }

  return (
    <div className={`movieModal ${status ? 'active' : ''}`}>
      <a href="#" className="modalClose" onClick={() => toggleModal(null)}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modall;
