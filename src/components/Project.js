import React from 'react';
import $ from 'jquery';

// jquery
$(() => {
  // hide all content
  $('.hidden').hide();

  // click expand function
  $('.project-label').click(function() {
    // get content
    const content = $(this)
      .parent()
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
          <h4 className='project-label'>{props.name}</h4> {/* </a> */}
          <img src={props.src} />
        </div>
      </div>
      <div className='content-container hidden'>
        <p>{props.content}</p>
        <a href={props.url} target='_blank'>
          {props.url}{' '}
        </a>
      </div>
    </div>
  );
};

export default Project;
