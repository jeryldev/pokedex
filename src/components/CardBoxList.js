import React from 'react';
import CardBox from './CardBox';

const CardBoxList = ({ pokemons }) => {
  console.log('Pokemons:::', pokemons);
  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <CardBox key={index} id={index} name={pokemon.name} />;
      })}
    </div>
  );
};

export default CardBoxList;
