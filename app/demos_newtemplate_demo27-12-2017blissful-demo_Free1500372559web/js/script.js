
$(document).ready(function(){


	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		timestamp : (new Date("September 25, 2021 18:00:00" )).getTime()
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
