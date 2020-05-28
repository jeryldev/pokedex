import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

export const SearchingPokemondCardBox = () => {
  return (
    <Card className='flex-child'>
      {/* <Card.Img
            variant='top'
            src={process.env.PUBLIC_URL + '/logo512.png'}
            style={{
              width: '96px',
              height: '96px',
              marginTop: '1.25rem',
              transition: 'all 300ms ease-in-out 300ms',
            }}
          /> */}
      <div
        style={{
          width: '96px',
          height: '96px',
          transition: 'all 300ms ease-in-out 300ms',
        }}
        className='container-box'
      >
        <Spinner animation='border' variant='danger' />
      </div>
      <Card.Body>
        <Card.Title>Searching for Pokémon</Card.Title>
      </Card.Body>
    </Card>
  );
};
