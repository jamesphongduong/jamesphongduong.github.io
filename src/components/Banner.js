import React from 'react';
import { Icon } from 'semantic-ui-react';
import swal from 'sweetalert';

// onload as we have to wait for the dom to be created first
window.onload = () => {
  document.getElementById('email').addEventListener('click', emailFunction);

  function emailFunction() {
    const el = document.createElement('textarea');
    el.value = 'james.duong93@gmail.com';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    swal({
      icon: 'success',
      text: 'Email copied to clipboard: \n\njames.duong93@gmail.com',
      button: false,
      timer: 2000
    });
  }
};

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
