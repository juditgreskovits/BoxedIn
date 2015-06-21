Template.application.rendered = function  () {
  
  /* nav javascript */
  // hide with js so if the user doesn't have js installed they
  // can still use the nav
  $('#navigation').hide();
  console.debug($('#navigation'))
  $('#toggleNav').on('click', function() {
    console.debug('poop')
    $('#navigation').slideToggle();
  });
}