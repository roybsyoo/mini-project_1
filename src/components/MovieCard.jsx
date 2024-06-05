import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, poster, average }) => {
  return (
    <div className="movie-card">
      <Link to={`/details/${id}`}><img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} className="movie-card__poster" /></Link>
      <h3 className="movie-card__title">{title}</h3>
      <p className="movie-card__average">Average: {average}</p>
    </div> 

  )
}

export default MovieCard


