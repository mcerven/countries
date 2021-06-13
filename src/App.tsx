import React from 'react';
import './App.css';
import ApolloProvider from './ApolloProvider';
import Router from './Router';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <ApolloProvider>
        <Router />
      </ApolloProvider>
    </div>
  );
}
