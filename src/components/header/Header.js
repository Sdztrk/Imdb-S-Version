import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import imdbImage from '../../helper/image/imdb-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
<Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Link to="/" > <img className='headerImage' src={imdbImage} alt='imdb-image' style={{textDecoration:"none"}}/> </Link> 
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/movies/popular" className='link ms-5' style={{textDecoration:"none"}}>popular</Link> 
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/movies/top_rated" className='link' style={{textDecoration:"none"}}>top rated</Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Link to="/movies/upcoming" className='link' style={{textDecoration:"none"}}>upcoming</Link>
    </Nav.Item>
    <FontAwesomeIcon className='user' icon={faUser} style={{color: "#ffffff",}} />
</Nav>
   
  )
}

export default Header