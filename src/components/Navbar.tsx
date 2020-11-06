import React, { Dispatch, SetStateAction } from 'react';
import { Page } from '../types';

type Props = {
  setPage: Dispatch<SetStateAction<Page>>;
};

export const Navbar = ({ setPage }: Props) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};
