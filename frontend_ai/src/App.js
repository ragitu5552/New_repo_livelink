import React from 'react';
import DataFetcher from './DataFetcher';

import './index.css';

const App = () => {
  return (
    <div className='container'>
      <div className='content'>
      <h1>Fetch Data</h1>
      <DataFetcher />
      </div>
    </div>
  );
};

export default App;
