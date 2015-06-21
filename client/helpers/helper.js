dragging = false;

$('html, body').on('touchstart', function() {
	dragging = false;
});

$('html, body').on('touchmove', function() {
	dragging = true;
});

$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('.hover');
    });
});