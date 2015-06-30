Router.configure({

	layoutTemplate: 'application',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return [Meteor.subscribe('title'), Meteor.subscribe('post'), Meteor.subscribe('about')];
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

	this.route('admin', {
		path: '/admin',
		layoutTemplate: 'admin',
		template: 'adminPosts',
		waitOn: function() {
			return [Meteor.subscribe('post', {sort: {endDate: -1}})];
		},
		data: {
			posts: function() { return Post.find(); }
		}
	});

	this.route('adminAbout', {
		path: '/adminAbout',
		layoutTemplate: 'admin',
		template: 'adminAbout',
		waitOn: function() {
			return [Meteor.subscribe('about')];
		},
		data: {
			about: function() { return About.findOne(); }
		}
	});

	/*this.route('admin', {
		path: '/admin',
		layoutTemplate: 'admin',
		template: 'adminApplication',
		waitOn: function() {
			return [Meteor.subscribe('post', {sort: {endDate: -1}}), Meteor.subscribe('about')];
		},
		data: {
			about: function() { return About.findOne(); },
			posts: function() { return Post.find(); }
		},
	})*/

});

Router.onBeforeAction(function (pause) {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) { 
			this.render(this.loadingTemplate);
		} 
		else { 
			this.render('adminAccessDenied');
		}
    }
    else {
    	this.next();
    }
}, {only: ['admin', 'adminAbout']});

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