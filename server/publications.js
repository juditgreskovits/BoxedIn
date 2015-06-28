Meteor.publish('title', function() {

	return Title.find();
});

Meteor.publish('post', function(limit) {

	return Post.find({}, {limit: limit});
});