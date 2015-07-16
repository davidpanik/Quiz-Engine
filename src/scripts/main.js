(function(){
	'use strict';

	function createView(id, data) {
		data = data ? data : {};

		return new Ractive({
			el:       '#' + id,
			template: '#' + id + 'Template',
			data:     data
		});
	}

	var
		screens = createView('screens', { current: 'intro' }),
		intro = createView('intro'),
		main = createView('main'),
		outro = createView('outro'),
		controls = createView('controls', {
			score: 0,
			currentQuestion: 0,
			totalQuestions: 0
		});

		intro.on('next', function (event) {
			screens.set('current', 'main');
			main.render('#main');
		});

		main.on('next', function (event) {
			screens.set('current', 'outro');
			outro.render('#outro');
		});

		qwest.get('/data/quiz.json', {}, {})
		.then(function(response) {
			console.log(response);
		});
}());