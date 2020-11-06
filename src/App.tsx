import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Navbar } from './components/Navbar';
import { Planets } from './components/Planets';
import { People } from './components/People';
import { Page } from './types';

function App() {
  const [page, setPage] = useState<Page>('planets');

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        {page === 'planets' ? <Planets /> : <People />}
        <div className="content"></div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
