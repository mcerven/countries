import React from 'react';

type Props = {
  name: string;
  code: string;
}

export default function CountryDetails({name, code}: Props) {
  return (
    <div>
      <dl>
        <dt>Name</dt><dd>{name}</dd>
        <dt>Code</dt><dd>{code}</dd>
      </dl>
    </div>
  );
}
