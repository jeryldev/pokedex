import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import './Components.css';
import { useFetch } from '../hooks/useFetch';
import { CSSTransitionGroup } from 'react-transition-group';

const CardBox = ({ source }) => {
  let { data, isLoading } = useFetch(source.toLowerCase());
  const [hovered, setHovered] = useState(false);

  let cardBoxItem;

  if (isLoading === false) {
    try {
      cardBoxItem = (
        <CSSTransitionGroup
          transitionName='cardbox'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Card className='flexbox pokemon-item'>
            <Card.Img
              variant='top'
              src={data.sprites.front_default}
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
        </CSSTransitionGroup>
      );
    } catch (error) {
      cardBoxItem = (
        <CSSTransitionGroup
          transitionName='cardbox'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Card className='flexbox pokemon-item'>
            <Card.Body>
              <Card.Title>{data}</Card.Title>
            </Card.Body>
          </Card>
        </CSSTransitionGroup>
      );
    }
  } else {
    cardBoxItem = (
      <Card className='flexbox pokemon-item'>
        <div
          style={{
            width: '96px',
            height: '96px',
            marginTop: '1.25rem',
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
      style={{
        transition: 'all 300ms ease-in-out',
        transform: `${hovered ? 'scale(1.2)' : 'scale(1)'}`,
      }}
    >
      {cardBoxItem}
    </div>
  );
};

// const noPokemon = () => {
//   setTimeout(() => {
//     cardBoxItem = (
//       <CSSTransitionGroup
//         transitionName='cardbox'
//         transitionAppear={true}
//         transitionAppearTimeout={500}
//         transitionEnter={false}
//         transitionLeave={false}
//       >
//         <Card className='flexbox'>
//           <Card.Body>
//             <Card.Title>Pokemon not found</Card.Title>
//           </Card.Body>
//         </Card>
//       </CSSTransitionGroup>
//     );
//   }, 5000);
// };
// noPokemon();

export default CardBox;
