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
    <div>MovieDetail</div>
  )

}

export default MovieDetail