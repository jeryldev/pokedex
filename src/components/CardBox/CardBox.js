import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Components.css';
import { useFetch } from '../../hooks/useFetch';
import { useSpring, animated } from 'react-spring';
import { NoPokemonCardBox } from '../NoPokemonCardBox';
import { SearchingPokemondCardBox } from '../SearchingPokemonCardBox';

const CardBox = ({ source }) => {
  let { data, isLoading } = useFetch(source.toLowerCase());
  const [hovered, setHovered] = useState(false);
  const customStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  let cardBoxItem;

  if (isLoading === false) {
    try {
      cardBoxItem = (
        <animated.div style={customStyle}>
          <Card className='flex-child'>
            {data.sprites.front_default ? (
              <Card.Img
                variant='top'
                src={data.sprites.front_default}
                alt={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                style={{
                  width: '96px',
                  height: '96px',
                  marginTop: '1.25rem',
                  transition: 'all 300ms ease-in-out 300ms',
                }}
              />
            ) : (
              <Card.Img
                variant='top'
                src={process.env.PUBLIC_URL + '/logo512.png'}
                alt={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                style={{
                  width: '96px',
                  height: '96px',
                  marginTop: '1.25rem',
                  transition: 'all 300ms ease-in-out 300ms',
                }}
              />
            )}
            <Card.Body>
              <Card.Title>
                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </Card.Title>
            </Card.Body>
          </Card>
        </animated.div>
      );
    } catch (error) {
      cardBoxItem = (
        <animated.div style={customStyle}>
          <NoPokemonCardBox message={data} />
        </animated.div>
      );
    }
  } else {
    cardBoxItem = <SearchingPokemondCardBox />;
  }

  return (
    <div
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      style={{
        transition: 'all 300ms ease-in-out',
        transform: `${hovered ? 'scale(1.1)' : 'scale(1)'}`,
      }}
    >
      {cardBoxItem}
    </div>
  );
};

export default CardBox;
