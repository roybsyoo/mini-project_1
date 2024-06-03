import React from 'react'
import MovieDetailData from '../movieDetailData.json'
import './MovieDetail.css'



const MovieDetail = () => {
  return (
    <>
    
 <div className="movie-detail">
  <img src={`https://image.tmdb.org/t/p/original/${MovieDetailData.backdrop_path}`} alt={MovieDetailData.title} className="movie-detail__poster" />
  <h3 className="movie-detail__title">{MovieDetailData.title}</h3>
  <p className="movie-detail__average">Average: {MovieDetailData.vote_average}</p>
  <div>genres: {MovieDetailData.genres.map((genre) => {
    return genre.name + ' '
  })}</div>
  <div>overview: {MovieDetailData.overview}</div>

</div>

</>
)
}

export default MovieDetail