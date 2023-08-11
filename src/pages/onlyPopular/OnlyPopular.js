import { useEffect, useState } from 'react';
import "./OnlyPopular.scss";
import MovieCard from '../../components/card/MovieCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OnlyPopular = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        
        const getData = async ()=> {
            const URL= `https://api.themoviedb.org/3/movie/popular?api_key=8930ba5665cad5b0e1709b8483aa08ad`
            try{
                let response = await axios.get(URL)
                let movies = response.data.results
                console.log(movies)
                setMovies(movies)
                
            }
            catch(err){
                console.log(err)
            }
        }
        getData()
    },[])





  return (
    <>
    <h2 className='onlyPopular'>popular </h2>
      <Container>
        <Row>
          {movies.map((movie, index) => (
              <Col 
              key={index}
              className=''
              >

                <MovieCard  {...movie}/>
              </Col>
          ))}
        </Row>
      </Container>
    </>
    
  )
}

export default OnlyPopular