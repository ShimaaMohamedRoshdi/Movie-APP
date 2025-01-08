
import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieSwipper from '../components/MovieSwipper';
import Modall from '../components/Modall';

const CustomButton = ({ icon, name, color, bgColor }) => (
  <button
    style={{
      color: color || '#000',
      backgroundColor: bgColor || '#fff',
      border: 'none',
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    }}
  >
    {icon}
    {name}
  </button>
);

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [modall, setModall] = useState(false);
  const [activeMovie, setActiveMovie] = useState(null);

  const toggleModal = (movie = null) => {
    setActiveMovie(movie);
    setModall(!modall);
  };

  const fetchData = () => {
    // fetch('http://localhost:5173/data/movieData.json')
    fetch('/data/movieData.json')

      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const updatedMovies = movies.map((movie) => ({
      ...movie,
      active: movie._id === id,
    }));
    setMovies(updatedMovies);
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie._id} className="movie">
            <img
              src={movie.bgImg}
              alt="Background"
              className={`bgImg ${movie.active ? 'active' : ''}`}
            />
            <div className="container-fluid">
              <div className="row">
                {/* Left Content */}
                <div className="col-lg-6 col-md-12">
                  <div className={`content ${movie.active ? 'active' : ''}`}>
                    <img
                      src={movie.titleImg}
                      alt="Movie Title"
                      className="movie-title"
                    />
                    <h4>
                      <span>{movie.year}</span>
                      <span>
                        <i>{movie.ageLimit}</i>
                      </span>
                      <span>{movie.length}</span>
                      <span>{movie.category}</span>
                    </h4>
                    <p>{movie.description}</p>
                    <div className="button-row">
                      <CustomButton
                        icon={<ion-icon name="bookmark-outline"></ion-icon>}
                        name="Book"
                        color="#fff"
                        bgColor="#ff3700"
                      />
                      <CustomButton
                        icon={<ion-icon name="add-outline"></ion-icon>}
                        name="MyList"
                        bgColor="#333"
                        color="#fff"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="col-lg-6 col-md-12">
                  <div className={`date ${movie.active ? 'active' : ''}`}>
                    <h2>{movie.date}</h2>
                  </div>
                  <div
                    className={`trailer d-flex align-items-center justify-content-center ${
                      movie.active ? 'active' : ''
                    }`}
                  >
                    <a
                      href="#"
                      className="playBtn"
                      onClick={() => toggleModal(movie)}
                    >
                      <ion-icon name="play-outline"></ion-icon>
                    </a>
                    <p>Watch Trailer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Movie Swiper */}
      {movies && movies.length > 0 ? (
        <MovieSwipper slides={movies} slideChange={handleSlideChange} />
      ) : (
        <p>Loading movies or no movies available</p>
      )}

      {/* Modal */}
      {activeMovie && (
        <Modall movie={activeMovie} status={modall} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Banner;
