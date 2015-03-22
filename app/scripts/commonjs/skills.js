'use strict';
 
var skills = {
	init: function () {
		var view = {
			'skills': [
				{'title': 'Hits'},
				{'title': 'Stars'},
				{'title': 'Old'},
				{'title': 'New', 'last': true}
			]
		};
		var skillsTemplate = $('#skillsTemplate').html();
		Mustache.parse(skillsTemplate);   // optional, speeds up future uses
		var rendered = Mustache.render(skillsTemplate, view);
		$('article').html(rendered);
		$('.dot-repeat').on('click', function(event) {
			event.preventDefault();
			$('article').html(rendered);
		});
	}
};

module.exports = skills;