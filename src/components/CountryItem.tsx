import React from 'react';

type Props = {
  name: string;
  emoji: string;
}

export default function CountryDetails({name, emoji}: Props) {
  return (
    <div>
      <span>{name} {emoji}</span>
    </div>
  );
}
