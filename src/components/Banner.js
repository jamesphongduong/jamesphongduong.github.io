import React from 'react';
import { Icon } from 'semantic-ui-react';

const Banner = () => {
  return (
    <div className='banner'>
      <h1> James Duong </h1>
      <h3> web developer </h3>
      <ul>
        <li>
          <a href='https://github.com/jamesphongduong' target='_blank'>
            <Icon bordered name='github alternate' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/james-phong-duong-9168a89a/'
            target='_blank'
          >
            <Icon bordered name='linkedin' />
          </a>
        </li>
        <li>
          <Icon bordered name='mail' id='email' />
        </li>
      </ul>
    </div>
  );
};

export default Banner;
