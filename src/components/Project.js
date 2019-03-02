import React from 'react';
import { Container } from 'semantic-ui-react';

const Project = props => {
  return (
    <div className='project-container'>
      <div className='project-label-container'>
        <a href={props.url}>
          <h4 className='project-label'>{props.name}</h4>{' '}
        </a>
      </div>
    </div>
  );
};

export default Project;
