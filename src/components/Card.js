import React from 'react';
import { CardContent, Typography } from '@material-ui/core';

const Card = ({ name }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Card;
