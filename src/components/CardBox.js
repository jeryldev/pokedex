import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './Components.css';
import { useFetch } from '../hooks/useFetch';

const CardBox = ({ name, source }) => {
  let { data, isLoading } = useFetch(source);
  const [hovered, setHovered] = useState(false);

  let cardBoxItem;

  if (isLoading === false) {
    cardBoxItem = (
      <Card className='flexbox'>
        <Card.Img
          variant='top'
          src={data.sprites.front_default}
          style={{ width: '96px', height: '96px' }}
        />
        <Card.Body>
          <Card.Title>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  } else {
    cardBoxItem = (
      <Card className='flexbox'>
        <div
          style={{ width: '96px', height: '96px' }}
          className='container-box'
        >
          <Spinner animation='border' variant='danger' />
        </div>
        <Card.Body>
          <Card.Title>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      style={{
        transition: 'all 300ms ease-in-out',
        transform: `${hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`,
      }}
    >
      {cardBoxItem}
    </div>
  );
};

export default CardBox;
