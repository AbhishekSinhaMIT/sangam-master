(function($){
"use strict";
  //smooth scroll on page
	$(function() {
		$('#more a, .nav a, .nav li a, .navbar-brand, #footer li a').bind('click',function(event){
		var $anchor = $(this);

		$('[data-spy="scroll"]').each(function () {
		$(this).scrollspy('refresh');
		});

		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -50
		}, 1500,'easeInOutExpo');

		event.preventDefault();
		});
	});

})(jQuery);
