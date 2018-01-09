$(document).ready(function(){
  /*
  *oculto el icono menu
  */
	$('.js-menu').hide();

/*
* mensaje en la consola a penas cargue el html
*/
  console.log('hooolaaaa');
})

/*
* funcion para quitar clase make
*/
$('.js-show-recipe').click(function(){
  $('#container').removeClass('make');
  console.log('funkaa');
})

/*
* funcion para agregar clase make
*/
$('.js-show-make').click(function(){
  $('#container').addClass('make');
  console.log('funcionaaa');
})