import { useEffect, useState } from 'react'
import "./MovieList.scss"
import { useParams } from 'react-router-dom'
import MovieCard from '../card/MovieCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    },[type])

    const getData = async () => {

        const URL = `https://api.themoviedb.org/3/movie/${type ? type:"popular"}?api_key=8930ba5665cad5b0e1709b8483aa08ad`
  
        try {
          let response = await axios.get(URL)
          const data = response.data.results
          setMovieList(data)
        }
    
        catch(err){
          console.log(err)
        }
    }

  return (
    <>
      <h2 className='movieType'>{(type ? type : "POPULAR").toUpperCase().split("_").join(" ") }</h2>
      <Container>
        <Row>
          {movieList.map((movie, index) => (
              <Col 
              key={index}
              className='m-5'
              >
                <MovieCard  {...movie}/>
              </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default MovieList