import React from 'react';
import { Container } from 'semantic-ui-react';

const Project = props => {
  return (
    <div className='project-container'>
      <div className='project-label-container'>
        <a href={props.projectUrl}>
          <h4 className='project-label'>{props.projectName}</h4>{' '}
        </a>
      </div>
    </div>
  );
};

export default Project;
