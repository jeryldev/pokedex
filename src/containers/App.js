import React, { useState } from 'react';
import './App.css';

import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';

import CardsList from '../components/CardBoxList';
import CardBox from '../components/CardBox';

import { CSSTransitionGroup } from 'react-transition-group';
import { JumbotronSection } from '../components/JumbotronSection';
import { SearchBox } from '../components/SearchBox';
import { PaginationSection } from '../components/PaginationSection';

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
    // console.log('url::', url);
    // console.log('next::', data.next);
    // console.log('previous::', data.previous);
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
      <PaginationSection
        previousOnClickFunction={() => {
          if (data.previous) {
            setUrl(data.previous);
          } else {
            setUrlParams((currentState) => ({
              offset: currentState.offset - 20,
              limit: currentState.limit,
            }));
            setUrl(
              `https://pokeapi.co/api/v2/pokemon/?offset=${urlParams.offset}&limit=${urlParams.limit}`
            );
          }
        }}
        nextOnClickFunction={() => {
          if (data.next) {
            setUrl(data.next);
          } else {
            setUrlParams((currentState) => ({
              offset: currentState.offset + 20,
              limit: currentState.limit,
            }));
            setUrl(
              `https://pokeapi.co/api/v2/pokemon/?offset=${urlParams.offset}&limit=${urlParams.limit}`
            );
          }
        }}
        disablePrevious={disablePrevious}
        disableNext={disableNext}
        searchValue={fieldValue}
      />
      {cardGrid}
    </div>
  );
}

export default App;
