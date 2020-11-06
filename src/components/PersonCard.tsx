import React from 'react';
import { Person } from '../types';

type Props = {
  person: Person;
};

export const PersonCard = ({ person }: Props) => {
  const { name, gender, birth_year } = person;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Gender - {gender}</p>
      <p>Birth year - {birth_year}</p>
    </div>
  );
};
