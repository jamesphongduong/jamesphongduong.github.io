import React from 'react';

const Button = props => {
  return (
    <a href={props.url} target='_blank'>
      <div className='button'>{props.text} </div>
    </a>
  );
};

export default Button;
