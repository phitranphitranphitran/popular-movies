import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import './styles.scss'

class AppBar extends React.Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <header className="appbar">
        <Route path="/movies/:id" component={() => 
          <button 
            onClick={this.props.history.goBack} 
            className="back-button" 
            aria-label="Go back"
          >
            🡰
          </button>
        }/>
        <h1 className="page-title">
          <Switch>
            <Route path="/popular">Popular Movies</Route>
            <Route path="/top">Top Rated Movies</Route>
            <Route path="/movies/:id">Movie Details</Route>
          </Switch>
        </h1>
        <button 
          onClick={this.toggleMenu}
          className="menu-button" 
          aria-label="View links"
          aria-haspopup="true"
        >
          ☰
        </button>
        {this.state.menuOpen && (
          <nav className="nav">
            <Link to="/popular">Popular</Link>
            <Link to="/top">Top Rated</Link>
          </nav>
        )}
      </header>
    );
  }
}

AppBar.propTypes = {
  history: PropTypes.object.isRequired
};

const AppBarWithRouter = withRouter(AppBar);

export default AppBarWithRouter;