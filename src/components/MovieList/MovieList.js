import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies, inputSearch, newRate }) => {
  return (
    <div className='ml'>
      {newRate
        ? movies
            .filter(
              (movie) =>
                movie.rate === newRate &&
                movie.title.toUpperCase().includes(inputSearch ? inputSearch.toUpperCase().trim() : '')
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : movies
            .filter((movie) =>
              movie.title.toUpperCase().includes(inputSearch ? inputSearch.toUpperCase().trim() : '')
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default MovieList;



