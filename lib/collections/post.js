Post = new Mongo.Collection('post');

validatePost = function(post) {
	var errors = {};

	if(!post.titleId1 || !post.titleId2 || !post.titleId3) {
		errors.title = 'Please choose a title!'
	}

	if(!post.experience && !post.link) {
		errors.content = 'Please either share your experience or a photo / video!'
	}

	if(errors.title || errors.content) {
		return errors;
	}
	return null;
}

extendPost = function(postAttributes) {

	var post = _.extend(postAttributes, {
		promoted: 0,
		moderated: 0,
		slug: Math.random()
	});

	return post;
}

Meteor.methods({

	sendPost: function(postAttributes) {

		var errors = validatePost(postAttributes);
		if(errors) {
			throw new Meteor.Error('invalid-post', 'You must send a valid post');
		}

		var post = extendPost(postAttributes);
		var postId = Post.insert(post, function(error, result) {

			if(error) {
				return(error);
			}
		});

		return {
			_id: postId
		};
	}
});