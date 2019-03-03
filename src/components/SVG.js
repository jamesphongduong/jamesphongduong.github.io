import React from 'react';

const SVG = props => {
  return (
    <svg
      viewBox={props.viewBox}
      width='50px'
      height='50px'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <path d={props.path} fill='#ffffff' />
      {/* <path d={props.path1} fill='#ffffff' />
      <path d={props.path2} fill='#ffffff' /> */}
    </svg>
  );
};

export default SVG;
