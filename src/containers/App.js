import React from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const { data, isLoading } = useFetch(url);

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <h3>{isLoading ? 'Loading....' : data.count}</h3>
      <ErrorBoundary>
        {isLoading ? 'Loading....' : <CardsList pokemons={data.results} />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
