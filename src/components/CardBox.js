import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CardBox = ({ name }) => {
  return (
    <div>
      <Card>
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
