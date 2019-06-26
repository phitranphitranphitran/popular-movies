import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/';

const MovieThumbnail = ({ id, posterPath, title, size = 'w342' }) => (
  <Link to={`/movies/${id}`}>
    <img src={POSTER_URL_PREFIX + size + posterPath} alt={title} />
  </Link>
);

MovieThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default MovieThumbnail;