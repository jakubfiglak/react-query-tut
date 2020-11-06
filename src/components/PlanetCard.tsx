import React from 'react';
import { Planet } from '../types';

type Props = {
  planet: Planet;
};

export const PlanetCard = ({ planet }: Props) => {
  const { name, population, terrain } = planet;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {terrain}</p>
    </div>
  );
};
