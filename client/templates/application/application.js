Template.application.rendered = function  () {
  
  /* nav javascript */
  // hide with js so if the user doesn't have js installed they
  // can still use the nav
  if($(window).width() < 780) {
      $('#navigation').hide();
    }
  $('#toggleNav').on('click', function() {
    $('#navigation').slideToggle();
  });

  $(window).on('resize', function() {
    // make sure nav isn't hidden when viewport width is increased beyond
    // breakpoint
    if($(window).width() > 780) {
      $('#navigation').show();
    }
    // collapse nav when the viewport width is decreased below breakpoint
    if($(window).width() < 780) {
      $('#navigation').hide();
    }
  })
}