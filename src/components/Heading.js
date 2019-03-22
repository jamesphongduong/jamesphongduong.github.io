import React from 'react';

const Heading = props => {
  return (
    <div>
      <div className='heading-container'>
        <div className={`${props.headingIcon} heading-icon`}> </div>
        <h2>{props.title}</h2>
        {/* </div> */}
        <hr className='subhr' />
      </div>
    </div>
  );
};

export default Heading;
