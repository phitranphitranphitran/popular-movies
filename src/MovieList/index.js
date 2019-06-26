import React from 'react';
import PropTypes from 'prop-types';
import MovieThumbnail from '../MovieThumbnail';

const ENDPOINT_URL_PREFIX = 'https://api.themoviedb.org/3';

const requestStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

class MovieList extends React.Component {
  state = { 
    movies: [],
    requestState: requestStates.LOADING
  }

  async componentDidMount() {
    this.setState({ requestState: requestStates.LOADING });
    try {
      const movies = await this.getMovies();
      this.setState({ movies, requestState: requestStates.SUCCESS });
    } catch (error) {
      console.error(error);
      this.setState({ requestState: requestStates.ERROR });
    }
  }

  async getMovies() {
    const response = await fetch(this.endpointUrl);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    return json.results;
  }

  get endpointUrl() {
    return ENDPOINT_URL_PREFIX + this.props.endpointPath 
      + '?api_key=' + process.env.REACT_APP_API_KEY;
  }

  render() {
    switch (this.state.requestState) {
      case requestStates.SUCCESS:
        return this.state.movies.map(movie => 
          <MovieThumbnail
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.original_title}
          />
        );
      case requestStates.ERROR:
        return (
          <div>Oops, an error occured</div>
        );
      case requestStates.LOADING:
      default:
        return (
          <div>Loading...</div>
        );
    }
  }
}

MovieList.propTypes = {
  endpointPath: PropTypes.string.isRequired
};

export default MovieList;