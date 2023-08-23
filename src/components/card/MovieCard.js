
import React, { useEffect, useState } from 'react'
import "./MovieCard.scss"
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import {Card} from "react-bootstrap";


const MovieCard = (movie) => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        }, 1500)
    }, [])


  return (
    <>
        {
            isLoading?
            <SkeletonTheme>
                <p>
                <Skeleton />
                </p>
            </SkeletonTheme>
            :
            <div className='eachMovie'> 
                <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                    <Card className='movieCard'>
                    <Card.Img className='cardImage' variant="top" src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} />
                        <Card.Footer>
                            <Card.Title>{movie.original_title} </Card.Title>
                        </Card.Footer>
                    </Card>
                </Link>
           </div>
        }
    </>
  )
}


export default MovieCard;