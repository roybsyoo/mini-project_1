import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from './api/axios';
import NavBar from './components/NavBar';
import { styled } from 'styled-components';
import Login from './components/LogIn';
import Signup from './components/SignUp';




 function App () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/movie/popular')
        console.log(response)
        
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
  return ( 
  
    <>
    <Container>
    <NavBar />

    
    
    <Routes>
    <Route path='/' element={<MovieComponent/>}></Route>
    <Route path='/details/:id' element={<MovieDetail/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
  </Routes>
  </Container>
  </>
  );
};

const Container = styled.main`
  position: relative;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`






export default App;
