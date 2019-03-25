import React from 'react';
import { Icon } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Container } from 'semantic-ui-react';

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
      text: 'Email copied to clipboard! \n\njames.duong93@gmail.com',
      button: false,
      timer: 2000
    });
  }
};

const Banner = () => {
  return (
    <div className='banner'>
      <Container>
        <div className='banner-container one'>
          <h1> JAMES DUONG. </h1>
          <h3> web developer </h3>
          <ul className='plugs'>
            <li>
              <a
                href='https://github.com/jamesphongduong'
                target='_blank'
                className='test'
              >
                <Icon size='large' bordered name='github alternate' />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/james-phong-duong-9168a89a/'
                target='_blank'
              >
                <Icon size='large' bordered name='linkedin' />
              </a>
            </li>
            <li>
              <Icon size='large' bordered name='mail' id='email' />
            </li>
          </ul>
        </div>
        <div className='banner-container banner-image'>
          <img id='banner-image' src='/images/computer.svg' />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
