import React, { useState } from 'react';
import './App.css';

import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';

import CardsList from '../components/CardBoxList';
import CardBox from '../components/CardBox';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { CSSTransitionGroup } from 'react-transition-group';
import { JumbotronSection } from '../components/JumbotronSection';

function App() {
  const [urlParams, setUrlParams] = useState({ offset: 0, limit: 20 });
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  // const [url, setUrl] = useLocalStorage(
  //   'url',
  //   'https://pokeapi.co/api/v2/pokemon/'
  // );
  const { data, isLoading } = useFetch(url);
  const [fieldValue, setFieldValue] = useState('');

  let cardGrid,
    disablePrevious = false,
    disableNext = false;

  if (isLoading === false) {
    console.log('url', url);
    console.log('next url', data.next);
    console.log('previous url', data.previous);
    if (fieldValue !== '') {
      cardGrid = (
        <CSSTransitionGroup
          transitionName='cardbox'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className='container-box'>
            <CardBox
              className='pokemon-item'
              source={'https://pokeapi.co/api/v2/pokemon/' + fieldValue}
            />
          </div>
        </CSSTransitionGroup>
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
      <JumbotronSection />
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
          // onClick={() => setUrl(data.previous)}
          onClick={() => {
            setUrlParams((currentState) => ({
              offset: currentState.offset - 20,
              limit: currentState.limit,
            }));
            setUrl(
              `https://pokeapi.co/api/v2/pokemon/?offset=${
                urlParams.offset - 20
              }&limit=${urlParams.limit}`
            );
          }}
          className='pagination-box'
        >
          Previous
        </Button>

        <Button
          disabled={disableNext || fieldValue !== '' ? true : false}
          variant='primary'
          size='lg'
          id='next-button'
          // onClick={() => setUrl(data.next)}
          onClick={() => {
            setUrlParams((currentState) => ({
              offset: currentState.offset + 20,
              limit: currentState.limit,
            }));
            setUrl(
              `https://pokeapi.co/api/v2/pokemon/?offset=${
                urlParams.offset + 20
              }&limit=${urlParams.limit}`
            );
          }}
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
