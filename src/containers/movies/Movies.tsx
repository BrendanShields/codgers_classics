import React from 'react';
import { MovieCard } from '../../components/Components';
import { movie } from './Movie.model';

export const Movies = () => {

  const movie1: movie = {
    title: 'hello',
    length: 1234,
    releaseDate: 'some year'
}
const movie2: movie = {
  title: 'hello',
  length: 12345,
  releaseDate: 'some year'
}
const movie3: movie = {
  title: 'hello',
  length: 123456,
  releaseDate: 'some year'
}
const movie4: movie = {
  title: 'hello',
  length: 1234567,
  releaseDate: 'some year'
}

const arr = [movie1, movie2, movie3, movie4]

    return (
        <div>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {/* ternary: if arr = 0 display none */}
              {arr.length > 0 ? arr.map(movie => (<MovieCard key={movie.length} {...movie} />)): null}
            </div>
          </div>
        </div>
    )
}
