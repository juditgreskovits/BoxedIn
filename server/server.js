Accounts.validateLoginAttempt(function(info) {
	var user = info.user;
	var googleServices = user.services.google;
	if(googleServices.email === 'boxedinproject@gmail.com' || googleServices.email === 'hellomelissabooth@gmail.com' || googleServices.email === 'hellojamesbooth@gmail.com' || googleServices.email === 'juditgreskovits@gmail.com' || googleServices.email === 'me@jeshua.co') {
		return true;
	}
	return false;
});