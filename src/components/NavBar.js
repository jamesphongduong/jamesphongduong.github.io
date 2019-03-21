import React from 'react';
import { Container } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Container>
      <ul className='navbar-ul'>
        <li className='hvr-underline-from-center'>
          <a href='#projects'> projects </a>
        </li>

        <li className='hvr-underline-from-center'>
          <a href='#aboutme'>about me </a>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
