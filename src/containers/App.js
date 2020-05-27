import React, { useState } from 'react';
import './App.css';

import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';

import CardsList from '../components/CardBoxList';
import CardBox from '../components/CardBox';

import { JumbotronSection } from '../components/JumbotronSection';
import { SearchBox } from '../components/SearchBox';
import { PaginationSection } from '../components/PaginationSection';

function App() {
  // const [urlParams, setUrlParams] = useState({ offset: 0, limit: 20 });
  const [urlParams, setUrlParams] = useLocalStorage('urlParams', {
    offset: 0,
    limit: 20,
  });
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
          // console.log('offset previous before update???', urlParams.offset);
          setUrlParams((currentState) => ({
            offset: currentState.offset - 20,
            limit: 20,
          }));
          setUrl(
            `https://pokeapi.co/api/v2/pokemon/?offset=${
              urlParams.offset - 20
            }&limit=${urlParams.limit}`
          );
        }}
        nextOnClickFunction={() => {
          // console.log('offset next before update???', urlParams.offset);
          setUrlParams((currentState) => ({
            offset: currentState.offset + 20,
            limit: 20,
          }));
          setUrl(
            `https://pokeapi.co/api/v2/pokemon/?offset=${
              urlParams.offset + 20
            }&limit=${urlParams.limit}`
          );
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
