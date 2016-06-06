$().ready(function() {
	var loadCSS     = require('./lib/loadCSS.js'),
		onClickMenu = require('./lib/onClickMenu.js');
	var $btnMenu = $('#btnMenu');
	var $navbarMenu = $('#navbarMenu');
    
	$btnMenu.on('click', function () {
    	$navbarMenu.toggleClass('header-menu-list--show');
    });

   	loadCSS('https://fonts.googleapis.com/css?family=Open+Sans');
	loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');

	var $img1 = $('.images').find('li');
	var $izq = $('.flecha');

	$izq.click(function() {
		$img1.toggleClass('hidden');
	});

	var slide = $(".rslides");

	slide.responsiveSlides({
		timeout: 2000
	});
});
