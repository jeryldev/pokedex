import React, { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardBox from '../components/CardBox';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const { data, isLoading } = useFetch(url);
  const [fieldValue, setFieldValue] = useState('');

  let cardGrid,
    disablePrevious = false,
    disableNext = false;

  if (isLoading === false) {
    if (fieldValue !== '') {
      cardGrid = (
        <div className='container-box'>
          <CardBox
            className='pokemon-item'
            source={'https://pokeapi.co/api/v2/pokemon/' + fieldValue}
          />
        </div>
      );
    } else {
      cardGrid = <CardsList pokemons={data.results} />;
    }

    if (!data.previous) {
      disablePrevious = true;
    }
    if (!data.next) {
      disableNext = true;
    }
  }

  return (
    <div>
      <Jumbotron fluid className='text-white' id='jumbotron-section'>
        <Container>
          <h1 className='display-1' id='jumbotron-title'>
            Pokédex
          </h1>
          <p className='lead'>
            Hello friend! I'm{' '}
            <a
              href='https://twitter.com/JerylDEv'
              title='Jeryl'
              className='link-reference'
              target='_blank'
              rel='noopener noreferrer'
            >
              Jeryl
            </a>
            ! I created this web page to practice{' '}
            <a
              href='https://reactjs.org/docs/hooks-intro.html'
              title='React Hooks'
              className='link-reference'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Hooks
            </a>
            .
          </p>

          <p className='lead'>
            The API I used is made by{' '}
            <a
              href='https://pokeapi.co/'
              title='pokeapi.co'
              className='link-reference'
              target='_blank'
              rel='noopener noreferrer'
            >
              PokéAPI
            </a>{' '}
            while the Pokéball icons I used are made by{' '}
            <a
              href='https://www.flaticon.com/authors/those-icons'
              title='Those Icons'
              className='link-reference'
              target='_blank'
              rel='noopener noreferrer'
            >
              Those Icons
            </a>{' '}
            from{' '}
            <a
              href='https://www.flaticon.com/'
              title='Flaticon'
              className='link-reference'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              www.flaticon.com
            </a>
          </p>
        </Container>
      </Jumbotron>
      <div style={{ marginLeft: '15%', marginRight: '15%' }}>
        <InputGroup className='mb-3' size='lg'>
          {/* <InputGroup.Prepend>
            <InputGroup.Text id='general-button-class'>
              <Search />
            </InputGroup.Text>
          </InputGroup.Prepend> */}
          <FormControl
            id='basic-url'
            aria-describedby='basic-addon3'
            type='search'
            placeholder='Search a Pokémon'
            value={fieldValue}
            onChange={(e) => {
              // setActivateSearch(false);
              setFieldValue(e.target.value);
            }}
          />
          {/* <InputGroup.Append>
            <Button
              variant='primary'
              type='submit'
              size='lg'
              id='general-button-class'
              onClick={() => setActivateSearch(true)}
            >
              <Search />
            </Button>
          </InputGroup.Append> */}
        </InputGroup>
      </div>
      <div className='container-box'>
        <Button
          disabled={disablePrevious || fieldValue !== '' ? true : false}
          variant='primary'
          size='lg'
          id='previous-button'
          onClick={() => setUrl(data.previous)}
          className='pagination-box'
        >
          Previous
        </Button>

        <Button
          disabled={disableNext || fieldValue !== '' ? true : false}
          variant='primary'
          size='lg'
          id='next-button'
          onClick={() => setUrl(data.next)}
          className='pagination-box'
        >
          Next
        </Button>
      </div>
      {cardGrid}
    </div>
  );
}

export default App;
