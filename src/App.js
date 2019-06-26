import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';

const App = () => (
  <Router>
    {/* <AppBar></AppBar> */}
    <main>
      <Switch>
        <Route path="/popular" component={PopularMovies}></Route>
        <Route path="/top" component={TopRatedMovies}></Route>
        {/* <Route path="/movies/:id" component={MovieDetail}></Route> */}
        <Redirect from="/" to="popular"></Redirect>
      </Switch>
    </main>
  </Router>
);

export default App;