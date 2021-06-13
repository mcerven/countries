import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Countries from './pages/Countries';
import Search from './pages/Search';
import styled from 'styled-components';

export default function() {
  return (
    <Router>
      <Container>
        <Navbar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </Navbar>
      </Container>
      
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

const Container = styled.div`
  background: rgb(9, 20, 28);
  width: 100%;
`;

const Navbar = styled.nav`
  padding: 0.8em 0;

  ul {
    list-style: none;
    font-size: 1.2rem;
    display: flex;
    gap: 1em;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;