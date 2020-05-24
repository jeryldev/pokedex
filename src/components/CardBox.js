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

  console.log('testing data', data);

  if (!data) {
    cardBoxItem = (
      <CSSTransitionGroup
        transitionName='cardbox'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Card className='flexbox'>
          <Card.Body>
            <Card.Title>Pokemon not found</Card.Title>
          </Card.Body>
        </Card>
      </CSSTransitionGroup>
    );
  }

  if (isLoading === false) {
    // console.log('data:::', data.name);

    if (data) {
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
    }
  }
  // else if (!data && isLoading) {
  //   cardBoxItem = (
  //     <CSSTransitionGroup
  //       transitionName='cardbox'
  //       transitionAppear={true}
  //       transitionAppearTimeout={500}
  //       transitionEnter={false}
  //       transitionLeave={false}
  //     >
  //       <Card className='flexbox' style={{ width: '18rem' }}>
  //         <Card.Body>
  //           <h5>Pokémon not found.</h5>
  //         </Card.Body>
  //       </Card>
  //     </CSSTransitionGroup>
  //   );
  // }
  else {
    cardBoxItem = (
      <CSSTransitionGroup
        transitionName='cardboxEffect'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Card className='flexbox'>
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
      </CSSTransitionGroup>
    );
  }

  return (
    <div
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      style={{
        transition: 'all 300ms ease-in-out',
        transform: `${hovered ? 'scale(1.2,1.2)' : 'scale(1,1)'}`,
      }}
    >
      {cardBoxItem}
    </div>
  );
};

export default CardBox;
