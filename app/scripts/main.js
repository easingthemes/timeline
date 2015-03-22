(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/limafil/projects/timeline/app/scripts/commonjs/app.js":[function(require,module,exports){
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

},{"./plus-animation":"/home/limafil/projects/timeline/app/scripts/commonjs/plus-animation.js","./skills":"/home/limafil/projects/timeline/app/scripts/commonjs/skills.js"}],"/home/limafil/projects/timeline/app/scripts/commonjs/plus-animation.js":[function(require,module,exports){
'use strict';
 
var animation = {
	init: function () {

	}
};

module.exports = animation;
},{}],"/home/limafil/projects/timeline/app/scripts/commonjs/skills.js":[function(require,module,exports){
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
},{}]},{},["/home/limafil/projects/timeline/app/scripts/commonjs/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9jb21tb25qcy9hcHAuanMiLCJhcHAvc2NyaXB0cy9jb21tb25qcy9wbHVzLWFuaW1hdGlvbi5qcyIsImFwcC9zY3JpcHRzL2NvbW1vbmpzL3NraWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5pbWF0aW9uID0gcmVxdWlyZSgnLi9wbHVzLWFuaW1hdGlvbicpLFxuXHRza2lsbHMgPSByZXF1aXJlKCcuL3NraWxscycpO1xuXG52YXIgYXBwID0ge1xuXHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0YW5pbWF0aW9uLmluaXQoKTtcblx0XHRza2lsbHMuaW5pdCgpO1xuXHR9XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdGFwcC5pbml0KCk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbiBcbnZhciBhbmltYXRpb24gPSB7XG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcblxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGlvbjsiLCIndXNlIHN0cmljdCc7XG4gXG52YXIgc2tpbGxzID0ge1xuXHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHZpZXcgPSB7XG5cdFx0XHQnc2tpbGxzJzogW1xuXHRcdFx0XHR7J3RpdGxlJzogJ0hpdHMnfSxcblx0XHRcdFx0eyd0aXRsZSc6ICdTdGFycyd9LFxuXHRcdFx0XHR7J3RpdGxlJzogJ09sZCd9LFxuXHRcdFx0XHR7J3RpdGxlJzogJ05ldycsICdsYXN0JzogdHJ1ZX1cblx0XHRcdF1cblx0XHR9O1xuXHRcdHZhciBza2lsbHNUZW1wbGF0ZSA9ICQoJyNza2lsbHNUZW1wbGF0ZScpLmh0bWwoKTtcblx0XHRNdXN0YWNoZS5wYXJzZShza2lsbHNUZW1wbGF0ZSk7ICAgLy8gb3B0aW9uYWwsIHNwZWVkcyB1cCBmdXR1cmUgdXNlc1xuXHRcdHZhciByZW5kZXJlZCA9IE11c3RhY2hlLnJlbmRlcihza2lsbHNUZW1wbGF0ZSwgdmlldyk7XG5cdFx0JCgnYXJ0aWNsZScpLmh0bWwocmVuZGVyZWQpO1xuXHRcdCQoJy5kb3QtcmVwZWF0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCdhcnRpY2xlJykuaHRtbChyZW5kZXJlZCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2tpbGxzOyJdfQ==
