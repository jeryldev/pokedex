import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
  //   console.log('https://pokeapi.co/api/v2/pokemon/', inputValue.pokemon);

  const [fieldValue, setFieldValue] = useState('');
  //   console.log(fieldValue);

  return (
    <div style={{ marginLeft: '25%', marginRight: '25%' }}>
      <label htmlFor='basic-url'>Search a Pokemon</label>
      <InputGroup className='mb-3'>
        {/* <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon3'>
            https://pokeapi.co/api/v2/pokemon/
          </InputGroup.Text>
        </InputGroup.Prepend> */}
        <FormControl
          size='lg'
          id='basic-url'
          aria-describedby='basic-addon3'
          type='search'
          placeholder='pikachu'
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
        <InputGroup.Append>
          <Button
            variant='outline-primary'
            type='submit'
            onClick={() => console.log('testing:::', fieldValue)}
          >
            Submit
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
