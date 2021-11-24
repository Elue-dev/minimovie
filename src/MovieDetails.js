import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'

export const MovieDetails = () => {
    const API_KEY = 'fec8b5ab27b292a68294261bb21b04a5'
    const params = useParams()

    useEffect(() => {
        movieDetails()
    },[])
    

    const [item, setItem] = useState([])

    const movieDetails = async () => {
        const movieData = await fetch (`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`)
        const response = await movieData.json()
        console.log(response)
        setItem(response)
    }

    if(item.title === undefined){
        return <h1 className='loader'>Loading....</h1>
    }

    const imageUrl = `http://image.tmdb.org/t/p/w300`;

    return (
        <div className='movie_details'>
            <h2>Movie Details</h2>
            <img className='movie_img' src ={`${imageUrl}${item.poster_path}`}/>
            <p><b>Movie Name:</b>{item.original_title}</p>
            <p><b>Tagline:</b>{item.tagline}</p>
            <p><b>Genre:</b>{item.genres[0].name}</p>
            <p><b>Release Date:</b>{item.release_date}</p>
            <p><b>Production Company:</b>{item.production_companies[0].name}</p>
            <p><b>Production Country:</b>{item.production_countries[0].name}</p>
            <p><b>Movie Overview:</b>{item.overview}</p>
        </div>
    )
}


