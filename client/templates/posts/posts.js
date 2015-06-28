Session.setDefault('front', true);
Session.setDefault('flipDuration', 800);
Session.setDefault('colorOffset', 0);

Template.posts.helpers({

	posts: function() {
		return Post.find();
	}
});

Template.postsPost.events({
	'click, touchend a.title': function(e) {
		if(!dragging) {
			e.preventDefault();
			Router.go('post', {slug: this.slug});
		}
	}
});

function randomQuestion() {
  var titles = Title.find().fetch();
  var word0 = titles[getRandomIndex(titles.length)];
  var word1 = word0.after[getRandomIndex(word0.after.length)];
  var word2 = word1.after[getRandomIndex(word1.after.length)];
  var word3 = {title: 'gender-q'};
  return question = [word0.title, word1.title, word2.title, word3.title];
}

function refreshQuestion() {
  var question = randomQuestion();
  var url = '';
  var colourClass = '';
  var num;
  var selector = Session.get('front') ? '.word .front' : '.word .back';

  $(selector).each(function(i, word) {
    // update bg image (the word)
    url = 'img/words/'+ i +'/' + question[i] + '.png';
    $(word).css('background-image', 'url('+ url +')');
    $(word).css('background-position', '50% 50%');
    $(word).css('transition-delay', i*0.3+'s');
    $(word).css('-webkit-transition-delay', i*0.3+'s');
    // update bg colour
    $(word).removeClass(function (index, css) {
      return (css.match (/(^|\s)colour-\S+/g).join(' '));
    });
    num = (i + Session.get('colorOffset'))%4;
    colourClass = 'colour-' + num;
    $(word).addClass(colourClass);
  });

  // the flip.jquery forces all transitions on the flip cards to be flipDuration
  // this means that when we update the bg images, we have to wait that long
  // for them to fade out/in. We hide this by not flipping the cards until
  // flipDuration(ms) after we update the bg images
  setTimeout(function() {
    $('.word').flip(Session.get('front'))
  }, Session.get('flipDuration'));

  Session.set('front', !Session.get('front'));
  Session.set('colorOffset', Session.get('colorOffset')+1)
}

Template.posts.rendered = function() {
  $grid = $('#posts-grid');

  $grid.imagesLoaded( function() {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: '.post',
      masonry: {
        columnWidth: 320,
        gutter: 20,
        isFitWidth: true
      }
    });
  });

  $(".truncate").dotdotdot({
    ellipsis  : '...',
    height: 200
  });

  // initialise questions
  $('.word').flip({
    trigger: 'manual',
    axis: 'x',
    speed: Session.get('flipDuration')
  });
  refreshQuestion();

  // set them going
  setInterval(function() {
    refreshQuestion();
  }, 5*1000);

  // // debugging - press f key to flip the question
  // $(document).keypress(function(e) {
  //   if(e.which === 102) {
  //     refreshQuestion();
  //   }
  // })

}