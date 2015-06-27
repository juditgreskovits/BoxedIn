Template.share.onCreated(function() {

	Template.instance().title1 = new ReactiveVar(null);
	Template.instance().title2 = new ReactiveVar(null);
});

Template.share.helpers({

	titles1: function() {

		return Title.find();
	},

	titles2: function() {

		var title1 = Template.instance().title1.get();
		if(title1) {
			return Title.findOne({title: title1}).after;
		}
		return null;
	},

	titles3: function() {

		var title2 = Template.instance().title2.get();
		if(title2) {
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

	'change select#title-1': function(e) {

		Template.instance().title1.set(e.target.value);
	},

	'change select#title-2': function(e) {

		Template.instance().title2.set(e.target.value);
	}
});