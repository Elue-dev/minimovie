import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


export const MovieList = () => {
    const [movies, setMovies] = useState([])

    const API_KEY = 'fec8b5ab27b292a68294261bb21b04a5'


    useEffect(() => {
        fetchMovies()
    },[])


    const fetchMovies = async () => {
        const data = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
        const apiResponse = await data.json()
        console.log(apiResponse)
        setMovies(apiResponse.results)
        console.log(apiResponse.results)
    }


    const imageUrl = `http://image.tmdb.org/t/p/w300`;

    return (
        <div className='movie'>
            <h2>Number of Movies: {movies.length}</h2>
            {movies.map(movie => (
                <div className='movie_card' key={movie.id}>
                    <Link to={`/${movie.id}`}>
                        <div className='movie_card_image'>
                            <img src={`${imageUrl}${movie.poster_path}`}/>
                        </div>
                        <h3>{movie.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}
