import React from 'react';

const Button = props => {
  return (
    <div className='button'>
      <a href={props.url}>
        <img src={props.src} /> {props.text}
      </a>
    </div>
  );
};

export default Button;
