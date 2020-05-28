import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './Components.css';
import { useFetch } from '../hooks/useFetch';
import { useSpring, animated, useTransition } from 'react-spring';
import { NoPokemonCardBox } from './NoPokemonCardBox';

const CardBox = ({ source }) => {
  let { data, isLoading } = useFetch(source.toLowerCase());
  const [hovered, setHovered] = useState(false);
  const customStyle = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  let cardBoxItem;

  if (isLoading === false) {
    try {
      transitions.map(({ item, key, prop }) =>
        item
          ? (cardBoxItem = (
              <Card className='flex-child'>
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
                <Card.Body>
                  <Card.Title>
                    {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
          : (cardBoxItem = (
              <Card className='flex-child'>
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
                <Card.Body>
                  <Card.Title>
                    {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))
      );
      // data.sprites.front_default
      //   ? (cardBoxItem = (
      //       <Card className='flex-child'>
      //         <Card.Img
      //           variant='top'
      //           src={data.sprites.front_default}
      //           alt={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      //           style={{
      //             width: '96px',
      //             height: '96px',
      //             marginTop: '1.25rem',
      //             transition: 'all 300ms ease-in-out 300ms',
      //           }}
      //         />
      //         <Card.Body>
      //           <Card.Title>
      //             {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      //           </Card.Title>
      //         </Card.Body>
      //       </Card>
      //     ))
      //   : (cardBoxItem = (
      //       <Card className='flex-child'>
      //         <Card.Img
      //           variant='top'
      //           src={process.env.PUBLIC_URL + '/logo512.png'}
      //           alt={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      //           style={{
      //             width: '96px',
      //             height: '96px',
      //             marginTop: '1.25rem',
      //             transition: 'all 300ms ease-in-out 300ms',
      //           }}
      //         />
      //         <Card.Body>
      //           <Card.Title>
      //             {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      //           </Card.Title>
      //         </Card.Body>
      //       </Card>
      //     ));
    } catch (error) {
      cardBoxItem = <NoPokemonCardBox message={data} />;
    }
  } else {
    cardBoxItem = (
      <Card className='flex-child'>
        {/* <Card.Img
            variant='top'
            src={process.env.PUBLIC_URL + '/logo512.png'}
            style={{
              width: '96px',
              height: '96px',
              marginTop: '1.25rem',
              transition: 'all 300ms ease-in-out 300ms',
            }}
          /> */}
        <div
          style={{
            width: '96px',
            height: '96px',
            transition: 'all 300ms ease-in-out 300ms',
          }}
          className='container-box'
        >
          <Spinner animation='border' variant='danger' />
        </div>
        <Card.Body>
          <Card.Title>Searching for Pokémon</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      onClick={() => set(true)}
      style={{
        transition: 'all 300ms ease-in-out',
        transform: `${hovered ? 'scale(1.1)' : 'scale(1)'}`,
      }}
    >
      <animated.div style={customStyle}>{cardBoxItem}</animated.div>
    </div>
  );
};

export default CardBox;
