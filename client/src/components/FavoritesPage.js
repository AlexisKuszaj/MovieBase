import React, {useState, useEffect} from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import RemoveFavorites from './RemoveFavorites';
import NavBar from './NavBar';

const FavoritesPage = ({handleFavoritesClick }) => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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
    <div>
        <NavBar/>
        <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </div>
  );
};

export default FavoritesPage;
