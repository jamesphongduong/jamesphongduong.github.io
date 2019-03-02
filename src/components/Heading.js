import React from 'react';

const Heading = props => {
  return (
    <div>
      <div className='heading-container'>
        <img src={props.src} />
        <div>
          <h2>{props.title}</h2>
        </div>
      </div>
      {/* <div className='line' /> */}
    </div>
  );
};

export default Heading;
