import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <Card key={index} id={index} name={pokemon.name} />;
      })}
    </div>
  );
};

export default CardList;
