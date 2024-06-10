import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import axios from './api/axios';
import NavBar from './components/NavBar';
import { styled } from 'styled-components';
import Login from './components/LogIn';
import Signup from './components/SignUp';
import SearchPg from './components/SearchPg';




 function App () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movie/popular')

        
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching the movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  const MovieComponent = () => {
    return (
      <div className="app">
      
      
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
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
  const Layout = () => {
    return (
      <>
      <NavBar />
    <Outlet />
      </>
    )
  }
  return ( 
    <>   
    
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<MovieComponent />}/>
      
      <Route path="/details/:id" element={<MovieDetail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchPg />} />
     </Route> 
     </Routes>
</>

  );
};




export default App;
