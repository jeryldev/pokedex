import React from 'react';
import CardBox from './CardBox';
import './Components.css';

const CardBoxList = ({ pokemons }) => {
  // console.log('pokemonssssss::', pokemons);
  return (
    <div className='grid-wrapper'>
      {pokemons.map((pokemon, index) => {
        return (
          <CardBox
            style={{ transition: 'all 2s ease-in 2s' }}
            key={index}
            id={index}
            name={pokemon.name}
            source={pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default CardBoxList;
