import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Row from '../../components/Row';
import requests from '../../api/request';


function Mainpage() {
  return (
    <div className="App">
      <Container>
      <Nav/>
      <Banner/>
      <Category/>
      <Row title="이번주 트랜드" id="TN" fetchUrl={requests.topRated}/>
      <Row title="한국TOP" id="TR" fetchUrl={requests.trending}/>
      <Row title="Comedy" id="TT" fetchUrl={requests.topRated}/>
      <Row title="Top" id="TR" fetchUrl={requests.topRated}/>
      <Row title="Top" id="TR" fetchUrl={requests.topRated}/>
      </Container>
     
    </div>
  );
}

export default Mainpage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x:hidden;
  display: block;
  top:72px;
  padding :0 calc(3.5vw + 5px);

  &:after{
    background: url("/images/home-background.png") center center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
