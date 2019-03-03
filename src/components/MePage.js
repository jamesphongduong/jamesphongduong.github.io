import React from 'react';
import { Container } from 'semantic-ui-react';
import Card from './Card';
import Project from './Project';
import Button from './Button';
import Heading from './Heading';

const MePage = () => {
  return (
    <Container id='me'>
      <Heading src='/images/nerd.svg' title='Me' />
      <p>
        I enjoy the process of designing and building websites. It’s a great
        feeling working with others and bringing their ideas to life.
      </p>
      <Heading src='/images/code.svg' title='Tech I speak' />
      <h2>Front-end Development</h2>
      <ul>
        <Card src='/images/html5.svg' text='HTML5' />
        <Card src='/images/css.svg' text='CSS' />
      </ul>
      <h2>Back-end Development</h2>
      <ul>
        <Card src='/images/nodejs.svg' text='NodeJs' />
        <Card src='/images/ruby.svg' text='Ruby / Ruby on Rails' />
        <Card src='/images/mongodb.svg' text='MongoDB' />
        <Card src='/images/postgresql.svg' text='Postgresql' />
      </ul>
      <h2>Other</h2>
      <ul>
        <Card src='/images/heroku.svg' text='Heroku' />
        <Card src='/images/git.svg' text='Git' />
        <Card src='/images/s3.svg' text='Amazon Storage Service' />
      </ul>
      {/* <Button
        text='Connect with me'
        src='/images/github.svg'
        url='https://github.com/jamesphongduong'
      />
      <br />
      <Button
        text='Email me'
        src='/images/github.svg'
        url='https://github.com/jamesphongduong'
      /> */}
    </Container>
  );
};

export default MePage;
