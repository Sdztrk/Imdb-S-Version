import React, { useEffect, useState } from 'react'
import "./MovieDetail.scss"
import { useParams } from "react-router-dom"
import axios from 'axios'

const MovieDetail = () => {

    const [currentMovieDetail, setCurrentMovieDetail]=useState()
    const {id} = useParams()

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
    <div className='detailContainer mt-5'>
      <img className='detailImageBackDrop' src= {`https://image.tmdb.org/t/p/w500/${currentMovieDetail && currentMovieDetail.backdrop_path}`}/>
      <img className='detailImagePoster' src= {`https://image.tmdb.org/t/p/w500/${currentMovieDetail && currentMovieDetail.poster_path}`}/>
      <div className='detailInfo'>
        <h1> {currentMovieDetail&&currentMovieDetail.original_title} </h1>
        <p> {currentMovieDetail&&currentMovieDetail.tagline} </p>
        <p> {currentMovieDetail&&currentMovieDetail.runtime} mins </p>
        <p> Release Date: {currentMovieDetail&&currentMovieDetail.release_date}</p>
        {currentMovieDetail&&currentMovieDetail.genres.map((genre,index)=> {
          return(
            <span 
            key={index}
            className='genre mx-1'
            >
              {genre.name}
              </span>
          )
        })}
      </div>
    </div>
  )

}

export default MovieDetail