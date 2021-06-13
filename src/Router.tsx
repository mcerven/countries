import React from 'react';
import Countries from './pages/Countries';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Search from './pages/Search';

export default function() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}
