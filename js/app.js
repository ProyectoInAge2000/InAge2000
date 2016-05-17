$().ready(function () {
	
	var $img1 = $('.images').find('li');
	var $izq = $('.flecha');

	$izq.click(function() {
		$img1.toggleClass('hidden');
	});
}());
