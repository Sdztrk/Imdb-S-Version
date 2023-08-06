import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';



const Header = () => {
  return (
<Nav defaultActiveKey="/home" as="ul" className='nav'>
    <Nav.Item as="li">
      <Link to="/" > <img className='image' src='https://logos-download.com/wp-content/uploads/2016/11/IMDb_logo_logotype-700x354.png' alt='imdb-image' style={{textDecoration:"none"}}/> </Link> 
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
</Nav>
   
  )
}

export default Header