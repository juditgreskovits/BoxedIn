dragging = false;

$('html, body').on('touchstart', function() {
	dragging = false;
});

$('html, body').on('touchmove', function() {
	dragging = true;
});