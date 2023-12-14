import React,{ useState, useEffect } from 'react';
import "./Banner.css";
import axios from '../api/axios';
import requests from '../api/request';
import styled from 'styled-components';

const Banner = () => {

  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    mvData();
  },[])

  const mvData = async() => {
    const result = await axios.get(requests.nowPlaying)
    const mvId = result.data.results[
      Math.floor(Math.random() * result.data.results.length)
    ].id;

    const {data: mvDetail} = await axios.get(`movie/${mvId}`,{
      params : { append_to_response: "videos"}
      
    })
    setMovie(mvDetail);
  }

  const cutting = (str,n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }
    
  if(isClicked){
    return (
      <>
    <Container>
      <Homecontainer>
        <Iframe
          src={`http://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&playlist=${movie.videos.results[0].key}`}
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay: fullscreen">
        </Iframe>
      </Homecontainer>
    </Container>
      <button onClick={()=> setIsClicked(false)}>닫기</button>
    </>
    )
  } else {
    return (
      <header className='banner' 
      style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition : "top center",
        backgroundSize: "cover",
      }}>
        <div className='banner_content'>
          <h1 className='banner_title'>
            {movie.title || movie.name || movie.orinal_name} 
          </h1>
          <div className='banner_btn'>
            {movie?.videos?.results[0]?.key && 
            <button className='banner_play' onClick={()=> setIsClicked(true)}>PLAY</button>}
          </div>
          <p className='banner_descr'>
            {cutting(movie?.overview, 100)}
          </p>
        </div>
        <div className='banner_fadebt'></div>    
      </header>
    )
  }

} 
  
  

export default Banner


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%; 
  height: 100vh;
`;

const Homecontainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    display: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `;