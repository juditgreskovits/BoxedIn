getRandomBoolean = function getRandomBoolean() {
	var random = Math.round(Math.random());
	var randomBoolean = Math.abs(random - 1);
	return randomBoolean;
}

getRandomIndex = function getRandomIndex (n) {
  var max = n === 1 ? 0 : n-1;
	var random = Math.random()*max;
	var randomIndex = Math.round(random);
	return randomIndex;
}