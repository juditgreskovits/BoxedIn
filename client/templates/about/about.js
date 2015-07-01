Template.about.helpers({

	about: function() {

		var a = About.findOne().about.split('\n\n').join('</p><p>');
		return '<p>' + a + '</p>';
	}
});