import React, { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import ErrorBoundary from '../components/ErrorBoundary';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import SearchBox from '../components/SearchBox';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const { data, isLoading } = useFetch(url);

  // console.log('Looks like rendering happens 3 times');

  let cardGrid,
    disablePrevious = false,
    disableNext = false;

  if (isLoading === false) {
    cardGrid = (
      <ErrorBoundary>
        <CardsList pokemons={data.results} />
      </ErrorBoundary>
    );

    if (!data.previous) {
      disablePrevious = true;
    }
    if (!data.next) {
      disableNext = true;
    }
  }

  return (
    <div>
      <Jumbotron fluid className='bg-info text-white'>
        <Container>
          <h1 className='display-2'>Pokédex</h1>
          <p className='lead'>
            I created this web page to practice React Hooks.
          </p>
        </Container>
      </Jumbotron>
      <SearchBox />
      <div className='container-box'>
        <Button
          disabled={disablePrevious}
          variant='success'
          size='lg'
          onClick={() => setUrl(data.previous)}
          className='flexbox'
        >
          Previous
        </Button>

        <Button
          disabled={disableNext}
          variant='success'
          size='lg'
          onClick={() => setUrl(data.next)}
          className='flexbox'
        >
          Next
        </Button>
      </div>
      <br />
      {cardGrid}
    </div>
  );
}

export default App;
