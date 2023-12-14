import { Outlet,Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import styled from 'styled-components';
import Banner from './components/Banner';
import Category from './components/Category';
import Row from './components/Row';
import requests from './api/request';
import Mainpage from './pages/Main';
import SearchPage from './pages/Search' ;
import Login from './pages/Login';

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<Login />}></Route>
        <Route path="coupangmain" element={<Mainpage />} ></Route>
        <Route path="mvsearch" element={<SearchPage />}></Route>
        <Route path=":movieId" element={<mvDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
