import React from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const { data, isLoading } = useFetch(url);

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <h3>{isLoading ? 'Loading....' : data.count}</h3>
    </div>
  );
}

export default App;
