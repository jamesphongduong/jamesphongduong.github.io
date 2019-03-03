import React from 'react';

const Button = props => {
  return (
    <a href={props.url} target='_blank'>
      <div className='inline-block'>
        <div className='button'>
          <img src={props.src} /> {props.text}
        </div>
      </div>
    </a>
  );
};

export default Button;
