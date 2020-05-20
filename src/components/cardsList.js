import React from 'react';
import Card from './Card';

const CardsList = ({ pokemons }) => {
  console.log('Pokemons:::', pokemons);
  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <Card key={index} id={index} name={pokemon.name} />;
      })}
    </div>
  );
};

export default CardsList;
