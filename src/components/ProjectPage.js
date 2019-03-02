import React from 'react';
import { Container } from 'semantic-ui-react';
import Project from './Project';
import Button from './Button';

const ProjectPage = () => {
  return (
    <Container>
      <h2> Projects </h2>
      <Project name='project 1' url='#' />
      <Button text='View my Github' src='#' url='#' />
    </Container>
  );
};

export default ProjectPage;
