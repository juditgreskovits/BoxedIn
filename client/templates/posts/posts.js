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

  //
  var titles = Title.find().fetch();
  var word0 = titles[getRandomIndex(titles.length)];
  var word1 = word0.after[getRandomIndex(word0.after.length)];
  var word2 = word1.after[getRandomIndex(word1.after.length)];
  var word3 = {title: 'gender-q'};
  var question = [word0.title, word1.title, word2.title, word3.title];

  console.log(question);
  var url = '';

  $('.word').each(function(i, word) {
    url = 'img/words/'+ i +'/' + question[i] + '.png';
    $(word).css('background-image', 'url('+ url +')');
    $(word).css('background-position', '50% 50%');
  });

}