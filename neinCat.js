var creepy = new Array(/cat/i, /i can has/i, /can i has/i, /kitt[en|y|eh]/i, /pet/i);

$$('.entry-item').each(function(el) {
	var title = el.getProperty('data-text');

	creepy.forEach(function(c) {
		if (title.match(c)) {
			el.dispose();
		}
	});
});