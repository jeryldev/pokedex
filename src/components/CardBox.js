import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import './Components.css';
import { useFetch } from '../hooks/useFetch';

const CardBox = ({ name, url }) => {
  const { data, isLoading } = useFetch(url);

  return (
    <div>
      <Card className='flexbox'>
        {isLoading ? (
          console.log('testing loding...')
        ) : (
          <CardMedia
            // className={data.sprites.front_default}
            style={{ height: '96px', width: '96px' }}
            image={data.sprites.front_default}
            title={name}
          />
        )}
        <CardContent>
          <Typography variant='h5' component='h2'>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardBox;
