import React, { useEffect, useState } from 'react'
import "./MovieDetail.scss"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MovieDetail = () => {

    const [currentMovieDetail, setCurrentMovieDetail]=useState()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        }, 1000)
    }, [])

    useEffect(()=> {
        getData()
        window.scrollTo(0,0)
    },[])

    const getData = async () => {

        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=8930ba5665cad5b0e1709b8483aa08ad`
  
        try {
          let response = await axios.get(URL)
          const data = response.data
          setCurrentMovieDetail(data)
        }
    
        catch(err){
          console.log(err)
        }
    }

  return (
      isLoading? "" :
 
    <div className='detailContainer'>
      <img className='detailImageBackDrop' src= {`https://image.tmdb.org/t/p/w500/${currentMovieDetail && currentMovieDetail.backdrop_path}`}/>
      <img className='detailImagePoster' src= {`https://image.tmdb.org/t/p/w500/${currentMovieDetail && currentMovieDetail.poster_path}`}/>
      <div className='detailInfo'>
        <h1> {currentMovieDetail&&currentMovieDetail.original_title} </h1>
        <p> {currentMovieDetail&&currentMovieDetail.tagline} </p>
        <p> <FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} />    {currentMovieDetail&& (currentMovieDetail.vote_average).toFixed(1)}   {currentMovieDetail&&currentMovieDetail.runtime} mins </p>
        <p> Release Date: {currentMovieDetail&&currentMovieDetail.release_date}</p>
        {currentMovieDetail&&currentMovieDetail.genres.map((genre,index)=> {
          return(
            <span 
            key={index}
            className='genre'
            >
              {genre.name}
              </span>
          )
        })}
      </div>
      <div className='synopsis'>
        <h1>Synopsis</h1>
        <p> {currentMovieDetail && currentMovieDetail.overview}</p>
      </div>
    </div>


  )

}

export default MovieDetail