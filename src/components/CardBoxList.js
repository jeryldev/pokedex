import React from 'react';
import CardBox from './CardBox';
import './Components.css';
import { CSSTransitionGroup } from 'react-transition-group';

const CardBoxList = ({ pokemons }) => {
  // console.log('isArray???', Array.isArray(pokemons));
  // let pokemonsArray = [];

  // Array.isArray(pokemons)
  //   ? (pokemonsArray = pokemons)
  //   : pokemonsArray.push(pokemons);

  // console.log('pokemons type', Array.isArray(pokemons));
  // console.log('pokemons array', pokemonsArray);
  return (
    <div
      className='grid-wrapper'
      style={{ marginLeft: '10%', marginRight: '10%' }}
    >
      {pokemons.map((pokemon, index) => (
        <CSSTransitionGroup
          key={index}
          transitionName='example'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <CardBox
            className='pokemon-item'
            key={index}
            id={index}
            name={pokemon.name}
            source={pokemon.url}
          />
        </CSSTransitionGroup>
      ))}
    </div>
  );
};

export default CardBoxList;
