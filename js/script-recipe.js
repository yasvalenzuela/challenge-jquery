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
  /*
  * señalo navegacion en recipe
  */
  $('.js-show-recipe').addClass('active');
  $('.js-show-make').removeClass('active');
  console.log('funkaa');
})

/*
* funcion para agregar clase make
*/
$('.js-show-make').click(function(){
  $('#container').addClass('make');
  /*
  * señalo navegacion en make it
  */
  $('.js-show-make').addClass('active');
  $('.js-show-recipe').removeClass('active');
  console.log('funcionaaa');
})