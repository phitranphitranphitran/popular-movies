function createEndpointUrl(path) {
  return 'https://api.themoviedb.org/3' + path + '?api_key=' + process.env.REACT_APP_API_KEY;
}

export default createEndpointUrl;