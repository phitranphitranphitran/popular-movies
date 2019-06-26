import React from 'react';
import MovieList from '../MovieList';

const PopularMovies = () => (
  <MovieList endpointPath="/movie/popular" />
);

export default PopularMovies;