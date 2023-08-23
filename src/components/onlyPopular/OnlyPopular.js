import { useEffect, useState } from 'react';
import "./OnlyPopular.scss";
import MovieCard from '../card/MovieCard';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';



const OnlyPopular = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        
        const getData = async ()=> {
            const URL= `https://api.themoviedb.org/3/movie/popular?api_key=8930ba5665cad5b0e1709b8483aa08ad`
            try{
                let response = await axios.get(URL)
                let movies = response.data.results
                // console.log(movies)
                setMovies(movies)
                
            }
            catch(err){
                console.log(err)
            }
        }
        getData()
    },[])


    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 8,
      slidesToScroll: 5
    };


  return (
    <div className='onlyPopularCarouselContainer'>
      <h1 className='onlyPopularH1'>popular</h1>
      <Slider {...settings}>

      {movies.map((movie, index) => (
                  <Col 
                  className='col'
                  key={index}
                  >
                    <MovieCard  {...movie}/>
                  </Col>
              ))}
      </Slider>
    </div>
  )
}

export default OnlyPopular;