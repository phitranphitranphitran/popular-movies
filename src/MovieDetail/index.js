import React from 'react';
import PropTypes from 'prop-types';
import MovieThumbnail from '../MovieThumbnail';
import createEndpointUrl from '../util/createEndpointUrl';
import './styles.scss';

class MovieDetail extends React.Component {
  state = {
    trailers: []
  }

  async componentDidMount() {
    const movie = await this.getMovie();
    this.setState({ movie });
    const trailers = await this.getTrailers();
    this.setState({ trailers })
  }

  async getMovie() {
    const path = '/movie/' + this.props.match.params.id;
    const endpointUrl = createEndpointUrl(path);
    const response = await fetch(endpointUrl);
    return response.json();
  }

  async getTrailers() {
    const path = `/movie/${this.props.match.params.id}/videos`;
    const endpointUrl = createEndpointUrl(path);
    const response = await fetch(endpointUrl);
    const json = await response.json();
    return json.results.filter(video => video.site === 'YouTube' && video.type === 'Trailer');
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
          <hr />
          <h2>Trailers:</h2>
          {this.state.trailers.map((trailer, index) =>
            <div key={trailer.key} className="trailer-container">
              <h3>{trailer.name}</h3>
              <iframe
                title={trailer.name}
                src={'https://www.youtube.com/embed/' + trailer.key}
                className="trailer-video"
              />
            </div>
          )}
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