import React, { useState } from 'react';
import { movie } from './Movie.model';

export const Movies = () => {
    
    const movie1: movie = {
        title: 'hello',
        length: 1234,
        releaseDate: 'some year'
    }
    
    const [movie, setMovie] = useState({
        title: 'default',
        length: 0,
        releaseDate: 'default'
    })

    return (
        <div>
            <h1>Movie</h1>
            <div>{movie.title}</div>
            <div>{movie.length}</div>
            <div>{movie.releaseDate}</div>
            <button onClick={() => setMovie(movie1)}>Update state</button>
        </div>
    )
}
