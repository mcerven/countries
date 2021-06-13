import React from 'react';
import {gql, useQuery} from '@apollo/client';
import CountryItem from '../components/CountryItem';
import styled from 'styled-components';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      emoji
      code
    }
  }
`;

export default function Countries(): JSX.Element {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Container>
      <Title>Countries</Title>
      <div>
        {data?.countries?.map((c: any) => <CountryItem key={c.code} {...c} />)}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: rgb(9, 20, 28);
  font-size: 1.8rem;
  padding: 0.2em 0;
`;
