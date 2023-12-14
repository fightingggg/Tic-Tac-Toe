import React, { useState, useEffect, useCallback } from 'react';
import axios from '../api/axios';
import './Row.css';
import Moviemodal from "./Movimodal";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]); 
  const [openModal, setOpenModal] = useState(false);
  const [select, setSelect] = useState({});

  const fetchMovieData = useCallback(async () => {
    try {
      const response = await axios.get(fetchUrl);
      console.log(response);
      setMovies(response.data.results); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setMovies([]); 
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const click = (movie)=>{
    setOpenModal(true);
    setSelect(movie);
  }


  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow'
          onClick={() => { document.getElementById(id).scrollLeft -= window.innerWidth - 80; }}>
            {"<"}</span>
        </div>
        <div id={id} className='row__posters'>
          {movies && movies.map(movie => (
            <img 
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
        <span className='arrow'
            onClick={()=> { document.getElementById(id).scrollLeft += window.innerWidth - 80; }}>
            {">"}
          </span>
        </div>
      </div>

            {openModal &&
            <Moviemodal
            {...select}
          setModal={setOpenModal}/>
        }

    </div>
  );
};

export default Row;

// scrollLeft +/- = 기준 +-
// innerWidth = 뷰포트의 전체 너비의 의미