Meteor.publish('title', function() {

	return Title.find();
});

Meteor.publish('post', function() {

	return Post.find();
});