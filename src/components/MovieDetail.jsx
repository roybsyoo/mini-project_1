import React from 'react'
import './MovieDetail.css'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import { useState, useEffect } from 'react'



const MovieDetail = () => {

  const {id} = useParams()

  const [Movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/movie/${id}`)
        console.log(response)
        
       setMovie(response.data);

      } catch (error) {
        console.error('Error fetching the movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  if ( !Movie ) {
    return (
      <div>Loading ..</div>
    )
  }
  

  return (
    <>
    
 <div className="movie-detail">
  <img src={`https://image.tmdb.org/t/p/original/${Movie.backdrop_path}`} alt={Movie.title} className="movie-detail__poster" />
  <h3 className="movie-detail__title">{Movie.title}</h3>
  <p className="movie-detail__average">Average: {Movie.vote_average}</p>
  <div>genres: {Movie.genres.map((genre) => {
    return genre.name + ' '
  })}</div>
  <div>overview: {Movie.overview}</div>

</div>

</>
)
}

export default MovieDetail