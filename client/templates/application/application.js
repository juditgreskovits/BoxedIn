Template.application.rendered = function  () {
  
  /* nav javascript */
  // hide with js so if the user doesn't have js installed they
  // can still use the nav
  $('#navigation').hide();
  $('#toggleNav').on('click', function() {
    $('#navigation').slideToggle();
  });
}