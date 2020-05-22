import React, { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import ErrorBoundary from '../components/ErrorBoundary';
import Button from 'react-bootstrap/Button';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  let { data, isLoading } = useFetch(url);

  let customPaginationButtons;

  if (isLoading === false && data.previous === null) {
    customPaginationButtons = (
      <div>
        <Button variant='success' onClick={() => setUrl(data.next)}>
          Next
        </Button>
      </div>
    );
  } else if (
    isLoading === false &&
    data.previous !== null &&
    data.next !== null
  ) {
    customPaginationButtons = (
      <div>
        <Button variant='success' onClick={() => setUrl(data.previous)}>
          Previous
        </Button>

        <Button variant='success' onClick={() => setUrl(data.next)}>
          Next
        </Button>
      </div>
    );
  } else if (isLoading === false && data.next === null) {
    customPaginationButtons = (
      <div>
        <Button variant='success' onClick={() => setUrl(data.previous)}>
          Previous
        </Button>
      </div>
    );
  }

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <h3>created by Jeryl</h3>
      <h3>{isLoading ? 'Loading....' : data.count}</h3>
      {customPaginationButtons}
      <ErrorBoundary>
        {isLoading ? 'Loading....' : <CardsList pokemons={data.results} />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
