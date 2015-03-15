'use strict';
$('li').on('click', function(event) {
	event.preventDefault();
	$(this).addClass('active');
});