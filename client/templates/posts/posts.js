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
        gutter: 20
      }
    });
  });

}