import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDebounce } from "../Hooks/useDebounce";
import axios from '../../api/axios';
import './Searchpage.css';



const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  
  
  
  let query = useQuery();
  const searchTerm = query.get("q");
  const navigate = useNavigate();
  const debounceTerm = useDebounce(searchTerm,500)


  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResult(response.data.results);
    } catch (error) {
    }
  };

  if (searchResult.length > 0) {
    return (
      <section className="search-container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div className='movie_poster_column' onClick={() => navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt='movie' className='moviposter' />
                </div>
              </div>
            );
          }
          return null;
        })}
      </section>
    );
  }

  return (
    <section className='resultno'>
      <div className='noresult_text'>
        <p>해당되는 "{searchTerm}"에 대한 영화는 없습니다.</p>
      </div>
    </section>
  );
};

export default SearchPage;
