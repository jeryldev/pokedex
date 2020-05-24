import React from 'react';
import CardBox from './CardBox';
import './Components.css';
import { CSSTransitionGroup } from 'react-transition-group';

const CardBoxList = ({ pokemons }) => {
  return (
    <div
      className='container-box'
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
