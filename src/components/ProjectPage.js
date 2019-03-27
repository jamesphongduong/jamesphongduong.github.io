import React from 'react';
import Project from './Project';
import Heading from './Heading';
import Button from './Button';

const ProjectPage = () => {
  return (
    <div id='projects'>
      <Heading title='My Projects' headingIcon='heading-icon1' />
      <div className='projects'>
        {/* project 1 */}
        <Project
          name='oneUp'
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/oneUp.png'
          content={[
            <p>
              Social Media web app based on challenges, think "ALS Ice Bucket
              Challenge." MVP built where administrators can create challenges
              and users can view and complete challenges by uploading a video of
              completing the relevant challenge.
            </p>
          ]}
          content2='MERN Stack (MongoDB, Express, React & NodeJs), AWS S3 (Storage) & Heroku (Deployment)'
          url='http://1up-app.s3-website-ap-southeast-2.amazonaws.com'
        />
        {/* project 2 */}
        <Project
          name='CasualMeals'
          src='https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/chef-flat.svg'
          content={[
            <p>
              Two sided marketplace where chefs can list and sell meals, and
              customers able to view and purchase meals.
            </p>
          ]}
          content2='Ruby on Rails, Postgresql, AWS S3 (Storage), Stripe (Payment) & Heroku (Deployment)'
          url='https://casualmeals.herokuapp.com/'
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
