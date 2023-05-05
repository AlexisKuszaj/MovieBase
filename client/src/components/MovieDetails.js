import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className='movie-details'>
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>Poster: <img src={movie.Poster} alt={movie.Title} /></p>
    </div>
  );
};

export default MovieDetails;