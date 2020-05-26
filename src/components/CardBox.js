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
          <Card className='flex-child'>
            <Card.Img
              variant='top'
              src={
                data.sprites.front_default
                  ? data.sprites.front_default
                  : process.env.PUBLIC_URL + '/logo512.png'
              }
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
          <Card className='flex-child'>
            <Card.Img
              variant='top'
              src={
                data.sprites.front_default
                  ? data.sprites.front_default
                  : process.env.PUBLIC_URL + '/logo512.png'
              }
              alt={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              style={{
                width: '96px',
                height: '96px',
                marginTop: '1.25rem',
                transition: 'all 300ms ease-in-out 300ms',
              }}
            />
            <Card.Body>
              <Card.Title>{data}</Card.Title>
            </Card.Body>
          </Card>
        </CSSTransitionGroup>
      );
    }
  } else {
    cardBoxItem = (
      <CSSTransitionGroup
        transitionName='cardbox'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Card className='flex-child'>
          <Card.Img
            variant='top'
            src={process.env.PUBLIC_URL + '/logo512.png'}
            style={{
              width: '96px',
              height: '96px',
              marginTop: '1.25rem',
              transition: 'all 300ms ease-in-out 300ms',
            }}
          />
          <Card.Body>
            <Card.Title>Searching for Pokémon</Card.Title>
          </Card.Body>
        </Card>
      </CSSTransitionGroup>
    );
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