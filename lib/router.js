Router.configure({

	layoutTemplate: 'application',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return [Meteor.subscribe('post')];
	}
});

Router.map(function() {

	this.route('home', {
		path: '/',
		template: 'posts'
	});

	this.route('post', {
		path: '/post/:slug',
		template: 'post',
		data: function() { 
			// return Post.findOne({slug: this.params._id});
			return Post.findOne({slug: this.params.slug});
		}
	});

	this.route('about', {
		path: '/about',
		template: 'about'
	});

	this.route('share', {
		path: '/share',
		template: 'share'
	});
});