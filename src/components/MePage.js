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
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/react-native.svg'
          text='ReactJs'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/html5.svg'
          text='HTML5'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/css.svg'
          text='CSS'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/javascript.svg'
          text='JavaScript'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/jquery.svg'
          text='jQuery'
        />
      </ul>
      <h2>Back-end Development</h2>
      <ul>
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/ruby.svg'
          text='Ruby / Ruby on Rails'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/nodejs.svg'
          text='NodeJs'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/express.svg'
          text='ExpressJs'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/mongodb.svg'
          text='MongoDB'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/postgresql.svg'
          text='Postgresql'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/php.svg'
          text='PHP'
        />
      </ul>
      <h2>Other</h2>
      <ul>
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/heroku.svg'
          text='Heroku'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/git.svg'
          text='Git'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/s3.svg'
          text='Amazon Storage Service'
        />
        <Card
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/wordpress.svg'
          text='WordPress'
        />
      </ul>
    </div>
  );
};

export default MePage;
