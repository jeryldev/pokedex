import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const JumbotronSection = () => {
  return (
    <div>
      {' '}
      <Jumbotron fluid className='text-white' id='jumbotron-section'>
        <Container>
          <h1 className='display-1' id='jumbotron-title'>
            Pokédex Project
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
            ! I created this web site to practice{' '}
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
            while the Pokéball icons I used are created by{' '}
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
              Flaticon
            </a>
            .
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronSection;
