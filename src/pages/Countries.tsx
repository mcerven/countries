import React from 'react';
import {gql, useQuery} from '@apollo/client';
import CountryItem from './components/CountryItem';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export default function Countries(): JSX.Element {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Countries</h1>
      {data?.countries?.map((c: any) => <CountryItem {...c} />)}
    </div>
  );
}
