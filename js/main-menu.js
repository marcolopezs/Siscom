$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.navegacion-responsive').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('.navegacion').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.navegacion').animate({
				left: '-100%'
			});
		}
 
	});
 
};