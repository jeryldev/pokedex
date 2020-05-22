import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './Components.css';
import { useFetch } from '../hooks/useFetch';

const CardBox = ({ name, source }) => {
  let { data, isLoading } = useFetch(source);

  return (
    <div>
      {isLoading ? (
        // <Spinner animation='border' variant='success' />
        console.log('loading...')
      ) : (
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
      )}
    </div>
  );
};

export default CardBox;
