import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import imdbImage from '../../helper/image/imdb-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchbar/SearchBar/SearchBar';

const Header = () => {
  return (
<Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Link to="/" > <img className='headerImage' src={imdbImage} alt='imdb-image' style={{textDecoration:"none"}}/> </Link> 
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/movies/popular/1" className='link ms-5' style={{textDecoration:"none"}}>popular</Link> 
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/movies/top_rated/1" className='link' style={{textDecoration:"none"}}>top rated</Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/movies/upcoming/1" className='link' style={{textDecoration:"none"}}>upcoming</Link>
    </Nav.Item>
    <Nav.Item as="li">
      <SearchBar/>
    </Nav.Item>
    <Nav.Item as="li" className='userLi'>
      <FontAwesomeIcon className='user' icon={faUser} style={{color: "#ffffff",}} />
    </Nav.Item>
</Nav>
   
  )
}

export default Header