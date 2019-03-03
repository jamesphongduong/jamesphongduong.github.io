import React from 'react';

const Card = props => {
  return (
    <li>
      <img src={props.src} />
      {props.text}
    </li>
  );
};

export default Card;
