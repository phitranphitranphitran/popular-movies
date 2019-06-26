import React from 'react';
import MovieList from '../MovieList';

const TopRatedMovies = () => (
  <MovieList endpointPath="/movie/top_rated" />
);

export default TopRatedMovies;