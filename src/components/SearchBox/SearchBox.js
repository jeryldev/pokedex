import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export const SearchBox = ({ searchValue, searchFunction }) => {
  return (
    <div style={{ marginLeft: '15%', marginRight: '15%' }}>
      <InputGroup className='mb-3' size='lg'>
        {/* <InputGroup.Prepend>
            <InputGroup.Text id='general-button-class'>
              <Search />
            </InputGroup.Text>
          </InputGroup.Prepend> */}
        <FormControl
          id='basic-url'
          aria-describedby='basic-addon3'
          type='search'
          placeholder='Search a Pokémon'
          value={searchValue}
          onChange={searchFunction}
        />
        {/* <InputGroup.Append>
            <Button
              variant='primary'
              type='submit'
              size='lg'
              id='general-button-class'
              onClick={() => setActivateSearch(true)}
            >
              <Search />
            </Button>
          </InputGroup.Append> */}
      </InputGroup>
    </div>
  );
};
