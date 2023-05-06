import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import NavBar from './components/NavBar';
import Form from './components/Form';
import { getPopularMovies } from './components/tmdb';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  

  const getMovieRequest = async () => {
    const apiKey = '9b33f5d9a5751882a7ce784a73447ec7';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}&page=${currentPage}`;
  
    const response = await fetch(apiUrl);
    const responseJson = await response.json();
  
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };
  

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setPopularMovies(popularMovies);
    };
  
    fetchMovies();
  }, []);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    );

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
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);

  }
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);

  };
  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };


  return (
    <div className='container movie-app'>
      <div>
        <NavBar className="navbar" />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='movieform'>
        <div className='row'>
        <MovieList
  movies={searchValue ? movies : popularMovies}
  handleFavoritesClick={addFavoriteMovie}
  favoriteComponent={AddFavorites}
  handleMovieClick={handleMovieClick}
  handleLoadMore={handleLoadMore} 
/>
      </div>
        <Form /></div>
      
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favorites' />
      </div>
      <div className='row'>
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
      <div className='row'>
      </div>.
      {selectedMovie && <MovieDetails movie={selectedMovie}/>}
    </div>
  );
};

export default App;