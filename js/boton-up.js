$(document).ready(function(){

	$('.contenedor-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.contenedor-up').slideDown(300);
		} else {
			$('.contenedor-up').slideUp(300);
		}
	});

});
