
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

type Props = {
  children: JSX.Element
};

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

export default function({children}: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
}
