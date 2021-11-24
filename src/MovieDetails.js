import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import config from './config'

export const MovieDetails = () => {
    const params = useParams()

    useEffect(() => {
        movieDetails()
    },[])
    

    const [movie, setMovie] = useState([])

    const movieDetails = async () => {
        const movieData = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=${config.API_KEY}`)
        const response = await movieData.json()
        console.log(response)
        setMovie(response)
    }

    if(movie.title === undefined){
        return <h1 className='loader'>Loading....</h1>
    }

    const imageUrl = `http://image.tmdb.org/t/p/w300`;

    return (
        <div className='movie_details'>
            <h2>Movie Details</h2>
            <div className='movie_img_container'>
            <img className='movie_img' src ={`${imageUrl}${movie.poster_path}`}/>
            </div>
            <p><b>Movie Name:</b>{movie.original_title}</p>
            <p><b>Tagline:</b>{movie.tagline}</p>
            <p><b>Genre:</b>{movie.genres[0].name}</p>
            <p><b>Release Date:</b>{movie.release_date}</p>
            <p><b>Production Company:</b>{movie.production_companies[0].name}</p>
            <p><b>Production Country:</b>{movie.production_countries[0].name}</p>
            <p><b>Movie Overview:</b>{movie.overview}</p>
        </div>
    )
}


