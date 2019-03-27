import React from 'react';
import Card from './Card';
import Heading from './Heading';

const MePage = () => {
  return (
    <div id='aboutme'>
      <Heading title='About Me' headingIcon='heading-icon2' />
      <p>
        I enjoy the process of designing and building websites from the visual
        aesthetics of a website to the geeky code that's written.
      </p>
      <p>
        I am a full-stack web developer with strengths with the MERN Stack:
        MongoDB, Express, React and NodeJs.
      </p>

      <Heading title='Tech I speak' headingIcon='heading-icon3' />
      <h2>Front-end Development</h2>
      <ul>
        <Card src='/Images/react-native.svg' text='ReactJs' />
        <Card src='/Images/html5.svg' text='HTML5' />
        <Card src='/Images/css.svg' text='CSS' />
        <Card src='/Images/javascript.svg' text='JavaScript' />
        <Card src='/Images/jquery.svg' text='jQuery' />
      </ul>
      <h2>Back-end Development</h2>
      <ul>
        <Card src='/Images/ruby.svg' text='Ruby / Ruby on Rails' />
        <Card src='/Images/nodejs.svg' text='NodeJs' />
        <Card src='/Images/express.svg' text='ExpressJs' />
        <Card src='/Images/mongodb.svg' text='MongoDB' />
        <Card src='/Images/postgresql.svg' text='Postgresql' />
        <Card src='/Images/php.svg' text='PHP' />
      </ul>
      <h2>Other</h2>
      <ul>
        <Card src='/Images/heroku.svg' text='Heroku' />
        <Card src='/Images/git.svg' text='Git' />
        <Card src='/Images/s3.svg' text='Amazon Storage Service' />
        <Card src='/Images/wordpress.svg' text='WordPress' />
      </ul>
    </div>
  );
};

export default MePage;
