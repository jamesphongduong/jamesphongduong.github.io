import React from 'react';
import { Container } from 'semantic-ui-react';
import Project from './Project';

const ProjectPage = () => {
  return (
    <Container>
      <h2> Projects </h2>
      <Project projectName='project 1' projectUrl='#' />
    </Container>
  );
};

export default ProjectPage;
