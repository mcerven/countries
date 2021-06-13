import React from 'react';

type Props = {
  name: string;
  code: string;
}

export default function CountryDetails({name, code}: Props) {
  return (
    <div>
      <span>{name}</span> <span>{code}</span>
    </div>
  );
}
