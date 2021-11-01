import React from 'react';
import jsondata from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';
import Searchbar from './components/Searchbar';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
      <h1>IronStore</h1>
      <br />
      <div>
        <Searchbar />
      </div>
      <div>
        <ProductTable />
      </div>
    </div>
  );
}

export default App;
