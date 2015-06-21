getRandomBoolean = function getRandomBoolean() {
	var random = Math.round(Math.random());
	var randomBoolean = Math.abs(random - 1);
	return randomBoolean;
}

getRandomIndex = function getRandomIndex (n) {
	var random = Math.random()*(n-1);
	var randomIndex = Math.round(random);
	return randomIndex;
}