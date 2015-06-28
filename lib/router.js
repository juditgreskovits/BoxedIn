Router.configure({

	layoutTemplate: 'application',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return [Meteor.subscribe('title'), Meteor.subscribe('post')];
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

Router.onAfterAction(function() {
  // detect whether we want to show the inspirational questions
  // for this route
  var routeName = Router.current().route.getName();
  if(routeName === 'home') {
    $('.header-wrapper').addClass('with-inspiration');
  } else {
    $('.with-inspiration').removeClass('with-inspiration');
    clearInterval(Session.get('interval'));
  }
});