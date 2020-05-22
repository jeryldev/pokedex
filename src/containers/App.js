import React, { useState } from 'react';
import './App.css';
import { useFetch } from '../hooks/useFetch';
import CardsList from '../components/CardBoxList';
import ErrorBoundary from '../components/ErrorBoundary';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { CSSTransitionGroup } from 'react-transition-group';

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  let { data, isLoading } = useFetch(url);

  let customPaginationButtons, cardGrid;

  if (isLoading === false && data.previous === null) {
    customPaginationButtons = (
      <CSSTransitionGroup
        transitionName='example'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className='container-box'>
          <Button
            variant='success'
            size='lg'
            onClick={() => setUrl(data.next)}
            className='flexbox'
          >
            Next
          </Button>
        </div>
      </CSSTransitionGroup>
    );
  } else if (
    isLoading === false &&
    data.previous !== null &&
    data.next !== null
  ) {
    customPaginationButtons = (
      <CSSTransitionGroup
        transitionName='example'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className='container-box'>
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
      </CSSTransitionGroup>
    );
  } else if (isLoading === false && data.next === null) {
    customPaginationButtons = (
      <CSSTransitionGroup
        transitionName='example'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className='container-box'>
          <Button
            variant='success'
            size='lg'
            onClick={() => setUrl(data.previous)}
            className='flexbox'
          >
            Previous
          </Button>
        </div>
      </CSSTransitionGroup>
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
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className='display-4'>Pokedex</h1>
          <p className='lead'>
            I created this Pokedex to practice React Hooks.
          </p>
        </Container>
      </Jumbotron>
      <div>
        <br />
        {customPaginationButtons}
        <br />
        {cardGrid}
      </div>
    </div>
  );
}

export default App;
