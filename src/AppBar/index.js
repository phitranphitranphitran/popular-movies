import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './styles.scss'

const routes = [
  { path: '/popular', pageTitle: 'Popular Movies', linkTitle: 'Popular' },
  { path: '/top', pageTitle: 'Top Rated Movies', linkTitle: 'Top Rated' },
  { path: '/movies/:id', pageTitle: 'Movie Details' }
];

const AppBar = () => (
  <header className="appbar">
    {/* TODO: back button */}
    <h1 className="page-title">
      <Switch>
        {routes.map(route => 
          <Route key={route.path} path={route.path}>{route.pageTitle}</Route>
        )}
      </Switch>
    </h1>
    <nav className="nav">
      <ul>
        {routes.filter(route => route.linkTitle).map(route => 
          <li key={route.path}>
            <NavLink to={route.path} activeClassName="active">
              {route.linkTitle}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

export default AppBar;