import React from 'react';
import CardBox from '../CardBox/CardBox';

const CardBoxList = ({ pokemons }) => {
  return (
    <div
      className='container-box'
      style={{ marginLeft: '10%', marginRight: '10%' }}
    >
      {pokemons.map((pokemon, index) => (
        <CardBox
          key={index}
          id={index}
          name={pokemon.name}
          source={pokemon.url}
        />
      ))}
    </div>
  );
};

export default CardBoxList;
