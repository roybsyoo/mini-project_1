
import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import movieListData from './movieListData.json';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

const App = () => {
  
  

  return (
    <Routes>
      <Route path='/' element={<MovieComponent/>}></Route>
      <Route path='/details' element={<MovieDetail/>}></Route>
    </Routes>
    

  );
};

const MovieComponent = () => {
  return (
    <div className="app">
    <h1>Movie List</h1>
    <div className="movie-list">
      {movieListData.results.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          average={movie.vote_average}
        />
      ))}
    </div>
  </div>
  )
}

export default App;
