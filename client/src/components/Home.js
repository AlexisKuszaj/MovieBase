import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from '../components/MovieDetails';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import AddFavorites from '../components/AddFavorites';
import RemoveFavorites from '../components/RemoveFavorites';
import NavBar from '../components/NavBar';
import { searchMovies, getPopularMovies } from '../components/tmdb';
import FavoritesPage from '../components/FavoritesPage';
import Footer from './Footer';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const popularMovies = await getPopularMovies();
      setPopularMovies(popularMovies);
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchValue) {
        const searchResults = await searchMovies(searchValue);
        setMovies(searchResults);
      } else {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      }
    };

    fetchMovies();
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'));

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter((favorite) => favorite !== movie);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container movie-app">
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="row d-flex align-items-center mt-4 mb-4">
      </div>
      <div className="movieform">
        <div className="row">
          <MovieList
            movies={movies}
            handleFavoritesClick={addFavoriteMovie}
            favoriteComponent={AddFavorites}
            handleMovieClick={handleMovieClick}
            handleLoadMore={handleLoadMore}
          />
        </div>
      </div>
      {/* <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div> */}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <Footer/>
    </div>
  );
};

export default Home;