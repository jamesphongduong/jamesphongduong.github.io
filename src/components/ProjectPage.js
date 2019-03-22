import React from 'react';
import Project from './Project';
import Heading from './Heading';
import Button from './Button';

const ProjectPage = () => {
  return (
    <div id='projects'>
      <Heading title='My Projects' headingIcon='heading-icon1' />
      <div className='projects'>
        <Project
          name='oneUp'
          src='/images/oneUp.png'
          content={[
            <p>
              Social Media web app based on challenges, think "ALS Ice Bucket
              Challenge." MVP built where administrators can create challenges
              and users can view and complete challenges by uploading a video of
              completing the relevant challenge.
            </p>
          ]}
          content2='MERN Stack (MongoDB, Express, React & NodeJs)'
          url='http://1up-app.s3-website-ap-southeast-2.amazonaws.com'
        />
      </div>
      <Button
        text='View my Github Repo'
        url='https://github.com/jamesphongduong'
      />
    </div>
  );
};

export default ProjectPage;
