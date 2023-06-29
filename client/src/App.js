import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FavoritesPage from './components/FavoritesPage';
import Home from './components/Home';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
};

export default App;
