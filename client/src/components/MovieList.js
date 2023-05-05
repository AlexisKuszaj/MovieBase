import React from 'react';

const MovieList = ({ movies, handleFavoritesClick, favoriteComponent, handleMovieClick }) => {
  const FavoriteComponent = favoriteComponent;

  return (
    <>
      {movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3' key={index}>
          <div className='movie-info'>
          <img className="poster" src={movie.Poster} alt='movie' />
            <div className='movie-title'>{movie.Title}</div>
            <div className='movie-year'>({movie.Year})</div>
          </div>
          <div
            className='overlay d-flex align-items-center justify-content-center'
            onClick={() => handleMovieClick(movie)}
          >
            <button className='btn btn-primary'>Movie Details</button>
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
