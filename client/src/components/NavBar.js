import React from 'react';
import SearchBox from './SearchBox';
import { Link, useNavigate } from 'react-router-dom';
import FavoritesPage from './FavoritesPage';
import Home from './Home';

const NavBar = ({ searchValue, setSearchValue, onSearch }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Movie<span className="base">Base</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active" end>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link" activeClassName="active">
                Favorites
              </Link>
            </li>
          </ul>

          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
