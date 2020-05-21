import React from 'react';
import CardBox from './CardBox';
import './Components.css';

const CardBoxList = ({ pokemons }) => {
  console.log('Pokemons:::', pokemons);
  return (
    <div className='grid-wrapper'>
      {pokemons.map((pokemon, index) => {
        return (
          <CardBox
            key={index}
            id={index}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default CardBoxList;
