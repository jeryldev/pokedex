import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBox = ({ searchChange }) => {
  return (
    <div style={{ 'margin-left': '15%', 'margin-right': '15%' }}>
      <label htmlFor='basic-url'>Search a Pokemon</label>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon3'>
            https://pokeapi.co/api/v2/pokemon/
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          id='basic-url'
          aria-describedby='basic-addon3'
          type='search'
          placeholder='pikachu'
          onChange={searchChange}
        />
        <InputGroup.Append>
          <Button variant='outline-secondary'>Submit</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
