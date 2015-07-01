About = new Mongo.Collection('about');

About.allow({

	insert: function(userId, about) {
		return !! userId;
	},

	update: function(userId, about) {
		return !! userId;
	}
});