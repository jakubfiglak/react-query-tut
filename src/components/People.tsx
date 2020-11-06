import React, { useState } from 'react';
import { QueryStatus, usePaginatedQuery } from 'react-query';
import { PersonCard } from './PersonCard';
import { PeopleResponse } from '../types';

const fetchPeople = async (_: string, page: number) => {
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

export const People = () => {
  const [page, setPage] = useState(1);

  const { resolvedData, latestData, status } = usePaginatedQuery<
    PeopleResponse
  >(['people', page], fetchPeople);

  const { Error, Loading, Success } = QueryStatus;

  return (
    <div>
      <h2>People</h2>
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
              resolvedData.results.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};
