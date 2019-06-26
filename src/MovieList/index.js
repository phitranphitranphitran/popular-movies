import React from 'react';
import PropTypes from 'prop-types';
import MovieThumbnail from '../MovieThumbnail';
import createEndpointUrl from '../util/createEndpointUrl';
import './styles.scss';

class MovieList extends React.Component {
  state = {}

  async componentDidMount() {
    const movies = await this.getMovies();
    this.setState({ movies });
  }

  async getMovies() {
    const endpointUrl = createEndpointUrl(this.props.endpointPath);
    const response = await fetch(endpointUrl);
    const json = await response.json();
    return json.results;
  }

  render() {
    const { movies } = this.state;
    if (!movies) {
      return null;
    }
    return (
      <div className="movie-list">
        {movies.map(movie => 
          <MovieThumbnail key={movie.id} {...movie} />
        )}
      </div>
    )
  }
}

MovieList.propTypes = {
  endpointPath: PropTypes.string.isRequired
};

export default MovieList;