import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import CountryDetails from '../components/CountryDetails';

const QUERY_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      currency
    }
  }
`;

export default function Search(): JSX.Element {
  const [code, setCode] = useState('');
  const [searchCountry, {data, loading, error}] = useLazyQuery(QUERY_COUNTRY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const onSearch = () => {
    searchCountry({
      variables: { code: code.toUpperCase() }
    });
  }

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Country code e.g. BR" />
      <button onClick={onSearch}>Submit</button>

      {!data?.country && <div>No result</div>}
      {data?.country && <CountryDetails {...data.country} />}
    </div>
  );
}
