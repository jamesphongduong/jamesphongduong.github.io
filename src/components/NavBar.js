import React from 'react';
import { Container } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Container>
      <ul className='navbar-ul'>
        <li> projects </li>
        <li> me </li>
      </ul>
    </Container>
  );
};

export default NavBar;
