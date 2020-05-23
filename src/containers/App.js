import React, { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import ErrorBoundary from '../components/ErrorBoundary';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import SearchBox from '../components/SearchBox';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardBox from '../components/CardBox';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const { data, isLoading } = useFetch(url);
  const [fieldValue, setFieldValue] = useState('');
  const [activateSearch, setActivateSearch] = useState(false);

  console.log('Looks like rendering happens 3 times');

  let cardGrid,
    disablePrevious = false,
    disableNext = false;

  if (isLoading === false) {
    if (fieldValue !== '') {
      if (activateSearch) {
        console.log('fetch pokemon');
        cardGrid = (
          <ErrorBoundary>
            <div className='container-box'>
              <CardBox
                className='pokemon-item'
                source={'https://pokeapi.co/api/v2/pokemon/' + fieldValue}
              />
            </div>
          </ErrorBoundary>
        );
      }
    } else {
      cardGrid = (
        <ErrorBoundary>
          <CardsList pokemons={data.results} />
        </ErrorBoundary>
      );
    }

    if (!data.previous) {
      disablePrevious = true;
    }
    if (!data.next) {
      disableNext = true;
    }

    // if (fieldValue === '') {
    //   setActivateSearch(false);
    // }
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
      <div style={{ marginLeft: '25%', marginRight: '25%' }}>
        <InputGroup className='mb-3'>
          <FormControl
            size='lg'
            id='basic-url'
            aria-describedby='basic-addon3'
            type='search'
            placeholder='pikachu'
            value={fieldValue}
            onChange={(e) => {
              setActivateSearch(false);
              setFieldValue(e.target.value.toLowerCase());
            }}
          />
          <InputGroup.Append>
            <Button
              variant='outline-primary'
              type='submit'
              onClick={() => setActivateSearch(true)}
            >
              Search a Pokémon
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className='container-box'>
        <Button
          disabled={disablePrevious || fieldValue !== '' ? true : false}
          variant='success'
          size='lg'
          onClick={() => setUrl(data.previous)}
          className='flexbox'
        >
          Previous
        </Button>

        <Button
          disabled={disableNext || fieldValue !== '' ? true : false}
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
