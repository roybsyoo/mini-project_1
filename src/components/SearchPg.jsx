import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from '../api/axios';
import "./Search.css";
import { useDebounce } from "../hooks/useDebounce";

const SearchPg = () => {
    const [searchResults, setSearchResults] = useState([]);
  
    const useQuery = () => {
      return new URLSearchParams(useLocation().search);
    };
  
    const query = useQuery();
    const searchTerm = query.get('q');
    const debouncedSearchTerm = useDebounce(query.get('q'), 500);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (debouncedSearchTerm) {
        fetchSearchMovie(debouncedSearchTerm);
      }
    }, [debouncedSearchTerm]);
  
    const fetchSearchMovie = async (searchTerm) => {
      try {
        const response = await axios.get(
          `/search/multi?include_adult=false&query=${searchTerm}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (searchResults.length > 0) {
      return (
        <section className="search-container">
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className="movie" key={movie.id}>
                  <div onClick={() => navigate(`/details/${movie.id}`)}
                       className="movie__column-poster">
                    <img
                      src={movieImageUrl}
                      alt="movie"
                      className="movie_poster"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </section>
      );
    } else {
      return (
        <section className="no-results">
          <div className="no-results__text">
            <p>
              찾고자 하는 검색어 {searchTerm} 에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      );
    }
  };
  

export default SearchPg