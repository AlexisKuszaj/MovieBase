import React, { useState } from 'react';

const MovieList = ({ movies, handleFavoritesClick, favoriteComponent, handleMovieClick }) => {
  const FavoriteComponent = favoriteComponent;

  const [showPopup, setShowPopup] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedMovie(null);
  }

  
  return (
	  <>
	  {showPopup && (
		<div className="popup">
		  <div className="popup-content">
			<h2>{selectedMovie.title}</h2>
			<p>{selectedMovie.overview}</p>
			<p>Release Date: {selectedMovie.release_date}</p>
			<p>Rating: {selectedMovie.vote_average}/10</p>
			<button className="popup-close" onClick={handlePopupClose}>Close</button>
		  </div>
		</div>
	  )}
      {movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3' key={index}>
          <div className='movie-info'>
			  <div className='movie-title'>{movie.title}</div>
			  {/* <div className='movie-year'>({movie.release_date})</div> */}
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt='movie'
              onClick={() => {
                setSelectedMovie(movie);
                setShowPopup(true);
              }}
            />
          </div>
          <div
            className='overlay d-flex align-items-center justify-content-center'
            onClick={() => handleMovieClick(movie)}
          >
          </div>
          <div
            onClick={() => handleFavoritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}

    </>
  );
};

export default MovieList;
