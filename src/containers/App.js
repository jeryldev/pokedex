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
import SearchBox from '../components/SearchBox';

function App() {
  const [urlParams, setUrlParams] = useState({ offset: 0, limit: 20 });
  // const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [url, setUrl] = useLocalStorage(
    'url',
    'https://pokeapi.co/api/v2/pokemon/'
  );
  const { data, isLoading } = useFetch(url);
  const [fieldValue, setFieldValue] = useState('');

  let cardGrid,
    disablePrevious = false,
    disableNext = false;

  if (isLoading === false) {
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
      <SearchBox
        searchValue={fieldValue}
        searchFunction={(e) => {
          // setActivateSearch(false);
          setFieldValue(e.target.value);
        }}
      />
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
