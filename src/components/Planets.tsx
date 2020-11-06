import React, { useState } from 'react';
import { QueryStatus, usePaginatedQuery } from 'react-query';
import { PlanetCard } from './PlanetCard';
import { PlanetsResponse } from '../types';

const fetchPlanets = async (_: string, page: number) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

export const Planets = () => {
  const [page, setPage] = useState(1);

  const { resolvedData, latestData, status } = usePaginatedQuery<
    PlanetsResponse
  >(['planets', page], fetchPlanets);

  const { Error, Loading, Success } = QueryStatus;

  return (
    <div>
      <h2>Planets</h2>
      {status === Error && <div>Error fetching data</div>}
      {status === Loading && <div>Loading data...</div>}
      {status === Success && (
        <>
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((prevPage) =>
                !latestData || !latestData?.next ? prevPage : prevPage + 1
              )
            }
            disabled={!latestData || !latestData?.next}
          >
            Next page
          </button>
          <div>
            {resolvedData &&
              resolvedData.results.map((planet) => (
                <PlanetCard key={planet.name} planet={planet} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};
