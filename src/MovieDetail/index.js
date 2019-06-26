import React from 'react';
import PropTypes from 'prop-types';
import MovieThumbnail from '../MovieThumbnail';
import createEndpointUrl from '../util/createEndpointUrl';
import './styles.scss';

class MovieDetail extends React.Component {
  state = {}

  async componentDidMount() {
    const movie = await this.getMovie();
    this.setState({ movie });
  }

  async getMovie() {
    const path = '/movie/' + this.props.match.params.id;
    const endpointUrl = createEndpointUrl(path);
    const response = await fetch(endpointUrl);
    return response.json();
  }

  render() {
    const { movie } = this.state;
    if (!movie) {
      return null;
    }
    return (
      <div className="movie-detail">
        <h1 className="movie-title">
          {movie.original_title}
        </h1>
        <div className="container">
          <MovieThumbnail {...movie} />
          <div className="stats">
            <div className="year">
              {movie.release_date.split('-')[0]}
            </div>
            <div className="runtime">
              {movie.runtime} min
            </div>
            <div className="rating">
              {movie.vote_average}/10
            </div>
          </div>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default MovieDetail;