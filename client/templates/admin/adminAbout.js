Template.adminAbout.events({

	'submit form': function(e) {

	    e.preventDefault();

		var aboutId = this._id;
		var about = $(e.target).find('[name=admin-about]').val();
		console.log('this._id = ' + this._id + ' about = ' + about);
		About.update(aboutId, {$set: {about: about}}, function(error) {
			if (error) {
				alert('About update error ' + error.reason);
			}
			else {
		    	alert('About successfully updated');
		     }
		});
	}
});