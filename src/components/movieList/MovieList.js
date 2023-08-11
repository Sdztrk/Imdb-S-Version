import { useEffect, useState } from 'react';
import "./MovieList.scss";
import { useParams } from 'react-router-dom';
import MovieCard from '../card/MovieCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from '../pagination/Pagination';


const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type,page} = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {

      getData()
      setLoading(false)
    },[type,page])


    const getData = async () => {
      const pageNumber = page || 1;

        const URL = `https://api.themoviedb.org/3/movie/${type ? type:"popular"}?api_key=8930ba5665cad5b0e1709b8483aa08ad&page=${pageNumber}`
  
        try {
          let response = await axios.get(URL)
          const data = response.data.results
          setMovieList(data)
        }
    
        catch(err){
          console.log(err)
        }
    }
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <>
      <h2 className='movieType'>{(type ? type : "POPULAR").toUpperCase().split("_").join(" ") }</h2>
      <Container>
        <Row>
          {movieList.map((movie, index) => (
              <Col 
              key={index}
              className=''
              >
                <MovieCard  {...movie}/>
                
                
              </Col>
          ))}
        </Row>
      </Container>
      <Pagination type={type} currentPage={parseInt(page)}/>
      
    </>
  )
}

export default MovieList