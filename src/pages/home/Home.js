

import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import MovieList from '../../components/movieList/MovieList';



const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(()=> {

    const getData = async () => {

      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=8930ba5665cad5b0e1709b8483aa08ad`

      try {
        let response = await axios.get(URL)
        const data = response.data.results
        setPopularMovies(data)
        console.log(data)
      }
  
      catch(err){
        console.log(err)
      }
    }

    getData()

  },[])

    

  return (
    <>
      <Carousel
      className='carousel mt-2'
      slide={true}
      fade={true}
      >
          {popularMovies.map((movie,index)=> 
            (
              
                <Carousel.Item
                  className='item' 
                  key={index}>
                    <Link style={{textDecoration:"none", backgroundColor:"white"}} to={`/movie/${movie.id}`}>
                     <img className='homeImage d-block w-100' src={`https://image.tmdb.org/t/p/w500/${movie && movie.backdrop_path}`} alt={movie.original_title}/>
                     </Link>
                    <Carousel.Caption>
                      <h3>{movie ? movie.original_title: "" }
                       {/* {<span> {movie ? movie.release_date : ""} <FontAwesomeIcon icon="fa-regular fa-star" /> </span>} */}
                        </h3>
                      <p>{movie ? movie.overview: "" }</p>
                    </Carousel.Caption>
                  </Carousel.Item>
              )
          )}
      </Carousel>
      <MovieList/>
    </>
  )
}

export default Home