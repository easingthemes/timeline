'use strict';

var animation = require('./plus-animation'),
	skills = require('./skills');

var app = {
	init: function () {
		animation.init();
		skills.init();
	}
};

$(document).ready(function () {
	app.init();
});
