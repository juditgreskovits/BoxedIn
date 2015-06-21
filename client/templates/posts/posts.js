Template.posts.helpers({

	posts: function() {
		return Post.find();
	}
});

Template.postsPost.events({

	'click, touchend a': function(e) {

		if(!dragging) {

			e.preventDefault();
			console.log('this.slug = '+ this.slug);
			Router.go('post', {slug: this.slug});
		}
	}
});