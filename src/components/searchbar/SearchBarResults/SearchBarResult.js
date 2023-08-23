import { useState,useEffect } from 'react';
import './SearchBarResult.scss';
import { Link } from 'react-router-dom';



function SearchBarResult({ movies,clearTheInput }) {

 const [render, setRender] = useState(true)

 const handleClick = () => {
  setRender(false)
  clearTheInput()
 }
 const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        }, 1500)
    }, [])


  return (
    isLoading ? "" :
    (

    !render ? "" : 
    <div className="search-bar-result">
      {movies && movies.filter((movie) => movie.poster_path)
      .map((movie) => (

        <Link 
        key={movie.id}
        to={`/movie/${movie.id}`}
        onClick={handleClick}
        className='searchBarResultLink'
        >
          <div className="movie-card" >
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500/${movie && movie.backdrop_path && movie.poster_path}`}  alt={movie.original_title}
            />
            <p className="movie-name">{movie && movie.title || movie.original_title}</p>
          </div>
        </Link>
      ))}
    </div>
    )
  );


}

export default SearchBarResult;
