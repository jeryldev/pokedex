import React from 'react';
import Card from 'react-bootstrap/Card';

export const NoPokemonCardBox = ({ message }) => {
  return (
    <Card className='flex-child'>
      <Card.Img
        variant='top'
        src={process.env.PUBLIC_URL + '/logo512.png'}
        alt='pokeball image'
        style={{
          width: '96px',
          height: '96px',
          marginTop: '1.25rem',
        }}
      />
      <Card.Body>
        <Card.Title>{message}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default NoPokemonCardBox;
