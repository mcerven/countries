import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  emoji: string;
  capital: string;
  currency: string;
}

export default function CountryDetails({name, emoji, capital, currency}: Props): JSX.Element {
  return (
    <div>
      <h2>{name} {emoji}</h2>
      
      <Row>
        <span className="label">Capital: </span>
        <span className="value">{capital}</span>
      </Row>
      <Row>
        <span className="label">Currency: </span>
        <span className="value">{currency}</span>
      </Row>
    </div>
  );
}

const Row = styled.div`
  .label {
    font-weight: bold;
  }
`;