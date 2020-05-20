import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} />;
      })}
    </div>
  );
};

export default CardList;
