(function(){
	'use strict';

	var controls = new Ractive({
		el:       '#controls',
		template: '#controlsTemplate',
		data: {
			score: 0,
			currentQuestion: 0,
			totalQuestions: 0
		}
	});
}());