import React from 'react';
import $ from 'jquery';

// jquery
$(() => {
  // hide all content
  $('.hidden').hide();

  // click expand function
  $('.project-label-container').click(function() {
    // get content
    const content = $(this)
      .parent()
      .next();
    // make inactive
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      return $(content).slideUp('slow');
    }
    // make active
    $(this).addClass('active');
    $(content).slideDown('slow');
  });
});

const Project = props => {
  return (
    <div>
      <div className='project-container'>
        <div className='project-label-container'>
          <a href={props.href}>
            <h4 className='project-label'>{props.name}</h4>{' '}
          </a>
          <img src={props.src} />
        </div>
      </div>
      <div className='content-container hidden'>
        <h2> oneUp</h2>
        <p>
          The aim of OneUp is to create a Social Media app that revolves around
          companies or users uploading challenges, where users can then join and
          partake in the challenge. These challenges are videos where the users
          are challenged to complete a specific task. If a user wishes to
          partake in a challenge, they can then upload a video of themselves
          completing the challenge. These submissions are then added to the
          users profile and can be shared with other users. The purpose of our
          project was to build a working MVP application that contained the
          basic functionality needed for the app. This MVP could then be shown
          to investors, and future developers as a way of presenting the app and
          showing how it would work.
        </p>
        <p>
          Link:
          http://1up-app.s3-website-ap-southeast-2.amazonaws.com/challenges
        </p>
      </div>
    </div>
  );
};

export default Project;
