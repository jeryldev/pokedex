import React from 'react';
import Button from 'react-bootstrap/Button';

const PaginationSection = ({
  previousOnClickFunction,
  nextOnClickFunction,
  disablePrevious,
  disableNext,
  searchValue,
}) => {
  return (
    <div className='container-box'>
      <Button
        disabled={disablePrevious || searchValue !== '' ? true : false}
        variant='primary'
        size='lg'
        id='previous-button'
        // onClick={() => setUrl(data.previous)}
        onClick={previousOnClickFunction}
        className='pagination-box'
      >
        Previous
      </Button>

      <Button
        disabled={disableNext || searchValue !== '' ? true : false}
        variant='primary'
        size='lg'
        id='next-button'
        // onClick={() => setUrl(data.next)}
        onClick={nextOnClickFunction}
        className='pagination-box'
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationSection;
