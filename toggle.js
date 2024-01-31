$(document).ready(function() {
    // Set up the toggle button
    $('.toggle-button').click(function() {
      $('.project').toggleClass('active');
    });
  
    // Align the projects horizontally
    var projectsWidth = $('.project').length * $('.project').outerWidth(true);
    $('.container').css('width', projectsWidth);
  });