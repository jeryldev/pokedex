import React, { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import ErrorBoundary from '../components/ErrorBoundary';
import Button from 'react-bootstrap/Button';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  let { data, isLoading } = useFetch(url);

  let customPaginationButtons, cardGrid;

  if (isLoading === false && data.previous === null) {
    customPaginationButtons = (
      <div className='container'>
        <Button
          variant='success'
          size='lg'
          onClick={() => setUrl(data.next)}
          className='flexbox'
        >
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
      <div className='container'>
        <Button
          variant='success'
          size='lg'
          onClick={() => setUrl(data.previous)}
          className='flexbox'
        >
          Previous
        </Button>

        <Button
          variant='success'
          size='lg'
          onClick={() => setUrl(data.next)}
          className='flexbox'
        >
          Next
        </Button>
      </div>
    );
  } else if (isLoading === false && data.next === null) {
    customPaginationButtons = (
      <div className='container'>
        <Button
          variant='success'
          size='lg'
          onClick={() => setUrl(data.previous)}
          className='flexbox'
        >
          Previous
        </Button>
      </div>
    );
  }

  if (isLoading === false) {
    cardGrid = (
      <ErrorBoundary>
        <CardsList pokemons={data.results} />
      </ErrorBoundary>
    );
  }

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <h5>created by Jeryl</h5>
      <br />
      {customPaginationButtons}
      <br />
      {cardGrid}
    </div>
  );
}

export default App;
