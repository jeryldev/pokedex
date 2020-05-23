import React from 'react';
import CardBox from './CardBox';
import './Components.css';

const CardBoxList = ({ pokemons }) => {
  return (
    <div className='grid-wrapper'>
      {pokemons.map((pokemon, index) => (
        <CardBox
          className='pokemon-item'
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
