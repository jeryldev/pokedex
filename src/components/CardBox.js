import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './Components.css';
import { useFetch } from '../hooks/useFetch';

const CardBox = ({ name, source }) => {
  let { data, isLoading } = useFetch(source);

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
          className='container-box2'
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

  return <div>{cardBoxItem}</div>;
};

export default CardBox;
