import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

const routes = [
  { path: '/popular', pageTitle: 'Popular Movies', linkTitle: 'Popular' },
  { path: '/top', pageTitle: 'Top Rated Movies', linkTitle: 'Top Rated' }
];

const AppBar = () => (
  <header>
    {/* TODO: back button */}
    <h1>
      <Switch>
        {routes.map(route => 
          <Route key={route.path} path={route.path}>{route.pageTitle}</Route>
        )}
      </Switch>
    </h1>
    <nav>
      <ul>
        {routes.map(route => 
          <li key={route.path}>
            <NavLink to={route.path} activeClassName="active">{route.linkTitle}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

export default AppBar;