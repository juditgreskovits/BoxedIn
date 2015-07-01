Template.share.onCreated(function() {

	Template.instance().title1 = new ReactiveVar('Please select');
	Template.instance().title2 = new ReactiveVar('-');
	Template.instance().title3 = new ReactiveVar('-');

	Template.instance().titleId1 = new ReactiveVar(null);
	Template.instance().titleId2 = new ReactiveVar(null);
	Template.instance().titleId3 = new ReactiveVar(null);

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

		var titleId1 = Template.instance().titleId1.get();
		if(titleId1) {
			var after = Title.findOne({id: titleId1}).after;
			var firstAfter = after[0];
			Template.instance().titleId2.set(firstAfter.id);
			Template.instance().title2.set(firstAfter.title);
			$('form button#title-2').removeClass('disabled');
			return after;
		}
		return null;
	},

	titles3: function() {

		var titleId2 = Template.instance().titleId2.get();
		if(titleId2) {
			var titleId1 = Template.instance().titleId1.get();
			var titles2 = Title.findOne({id: titleId1}).after;
			var after;
			titles2.forEach(function(t2){
				if(t2.id === titleId2){
					after = t2.after;
					var firstAfter = after[0];
					Template.instance().titleId3.set(firstAfter.id);
					Template.instance().title3.set(firstAfter.title);
					return false;
				}
			});
			$('form button#title-3').removeClass('disabled');
			return after;
		}
		return null;
	}
});

Template.share.events({

	'click li.title1-option': function(e) {

		Template.instance().titleId1.set(e.currentTarget.id);
		Template.instance().title1.set(e.currentTarget.innerText);
	},

	'click li.title2-option': function(e) {

		Template.instance().titleId2.set(e.currentTarget.id);
		Template.instance().title2.set(e.currentTarget.innerText);
	},

	'click li.title3-option': function(e) {

		Template.instance().titleId3.set(e.currentTarget.id);
		Template.instance().title3.set(e.currentTarget.innerText);
	},

	'focus input#form-experience': function(e) {
		console.log('focus');
		$('input#form-experience').addClass();
	},


	'change input[name=image-upload]': function(e) {

		if(e.currentTarget.files.length) {

			$('span#processing').show();

			var file = e.currentTarget.files[0];

			var fileReader = new FileReader();
			fileReader.onload = function(e) {
				var dataUrl = e.target.result;
				var index = dataUrl.indexOf(',');
				var imageData = dataUrl.substring(index);

				var options = {
					apiKey: 'ee6ab771668ff50',
					image: imageData
				}; 
				Imgur.upload(options, function(error, data) {
					Session.set('imageUrl', data.link);

					$('span#processing').hide();
					$('span#done').show();
				});

			}
			fileReader.readAsDataURL(file);
		}
	},

	'submit form#share-form': function(e) {
		console.log('submit');
		e.preventDefault();

		$('p#title-error').hide();
		$('p#content-error').hide();

		var titleId1 = Template.instance().titleId1.get();
		var titleId2 = Template.instance().titleId2.get();
		var titleId3 = Template.instance().titleId3.get();

		var title1 = Template.instance().title1.get();
		var title2 = Template.instance().title2.get();
		var title3 = Template.instance().title3.get();

		var share = {
			title: title1 + ' ' + title2 + ' ' + title3 + ' gender?',

			titleId1: titleId1,
			titleId2: titleId2,
			titleId3: titleId3,

			name: $(e.target).find('[name=name]').val(),
			twitterHandle: $(e.target).find('[name=twitter-handle]').val(),
			experience: $(e.target).find('[name=experience]').val(),
			link: $(e.target).find('[name=link]').val(),
			image: Session.get('imageUrl')
		};

		var errors = validatePost(share);
		if(errors) {
			console.log('errors = ' + errors);

			if(errors.title) {
				$('p#title-error').show();
			}
			if(errors.content) {
				$('p#content-error').show();
			}
		}
		else {
			Meteor.call('sendPost', share, function(error, result){
				if(error) {
					$('p#send-error').show();
				}
				$('p#send-success').show();
			});
		}
	}
});