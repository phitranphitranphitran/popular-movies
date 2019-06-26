import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './AppBar';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';

const App = () => (
  <Router>
    <AppBar />
    <main>
      <Switch>
        <Route path="/popular" component={PopularMovies} />
        <Route path="/top" component={TopRatedMovies} />
        {/* <Route path="/movies/:id" component={MovieDetail}></Route> */}
        <Redirect from="/" to="popular" />
      </Switch>
    </main>
  </Router>
);

export default App;