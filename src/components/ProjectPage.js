import React from 'react';
import Project from './Project';
import Heading from './Heading';

const ProjectPage = () => {
  return (
    <div id='projects'>
      <Heading src='/images/idea.svg' title='My Projects' />
      <div className='projects'>
        <Project
          name='oneUp'
          src='/images/oneUp.png'
          content={[
            <p>
              Social Media web app based on challenges. Users can view and
              complete social challenges
            </p>
          ]}
          content2='MERN Stack (MongoDB, Express, React & NodeJs)'
          url='http://1up-app.s3-website-ap-southeast-2.amazonaws.com'
        />
      </div>
    </div>
  );
};

export default ProjectPage;
