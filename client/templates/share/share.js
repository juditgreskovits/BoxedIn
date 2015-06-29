Template.share.onCreated(function() {

	Template.instance().title1 = new ReactiveVar('Please select');
	Template.instance().title2 = new ReactiveVar('-');
	Template.instance().title3 = new ReactiveVar('-');

	Session.set('shareErrors', {});
});

Template.share.helpers({

	title1: function() {

		return Template.instance().title1.get();
	},

	title2: function() {

		return Template.instance().title2.get();
	},

	title3: function() {

		return Template.instance().title3.get();
	},

	titles1: function() {

		return Title.find();
	},

	titles2: function() {

		var title1 = Template.instance().title1.get();
		if(title1 && title1 != 'Please select') {
			return Title.findOne({title: title1}).after;
		}
		return null;
	},

	titles3: function() {

		var title2 = Template.instance().title2.get();
		if(title2 && title2 != '-') {
			var titles2 = Title.findOne({title: Template.instance().title1.get()}).after;
			var ts3;
			titles2.forEach(function(t2){
				if(t2.title === title2){
					ts3 = t2.after
					return false;
				}
			});
			return ts3;
		}
		return null;
	}
});

Template.share.events({

	'click li.title1-option': function(e) {

		Template.instance().title1.set(e.currentTarget.id);
	},

	'click li.title2-option': function(e) {

		Template.instance().title2.set(e.currentTarget.id);
	},

	'click li.title3-option': function(e) {

		Template.instance().title3.set(e.currentTarget.id);
	},

	/*'change select#title1': function(e) {

		Template.instance().title1.set(e.target.value);
	},

	'change select#title2': function(e) {

		Template.instance().title2.set(e.target.value);
	},

	'change select#title3': function(e) {

		Template.instance().title3.set(e.target.value);
	},*/

	'submit form#share-form': function(e) {

		e.preventDefault();

		var share = {
			title: 'tmp title',
			name: $(e.target).find('[name=name]').val(),
			twitterHandle: $(e.target).find('[name=twitter-handle]').val(),
			experience: $(e.target).find('[name=experience]').val(),
			link: $(e.target).find('[name=link]').val(),
		};

		var errors = validatePost(share);
		if(errors) {
			return Session.set('shareErrors', errors);
		}
		Meteor.call('sendPost', share, function(error, result){
			if(error) {
				// display send error
			}

			// display send success
		});
	}
});