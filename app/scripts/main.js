'use strict';
$('.dot-repeat').on('click', function(event) {
	event.preventDefault();
	var elm = document.getElementById('dot-vh1');
	var newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);
});