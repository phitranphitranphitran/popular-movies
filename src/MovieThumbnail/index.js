import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const POSTER_URL_PREFIX = 'http://image.tmdb.org/t/p/';

const MovieThumbnail = ({ id, poster_path, original_title, size = 'w342' }) => (
  <Link to={`/movies/${id}`} className="movie-thumbnail">
    <img 
      src={POSTER_URL_PREFIX + size + poster_path} 
      alt={`${original_title} movie poster`}
    />
  </Link>
);

MovieThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default MovieThumbnail;