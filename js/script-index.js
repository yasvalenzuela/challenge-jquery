$(document).ready( function(){
  /*
  *oculto el icono de flecha
  */
  $('.js-back').hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

  /*
  *llamo a la funcion printNews
  */
  printNews();
  renderActivities(activities);
});

/*
*creando funcion PrintNews para agregar texto a elemento p
*/
function printNews (){
  $('.callout-news p' ).append('Nuevas recetas');
}



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
* recorro la data
*/
function renderHighlightedRecipes(recipesArray) {
  for(var i = 0; i < recipesArray.length; i++){
    if(recipesArray[i].highlighted==true) {
      renderRecipe(recipesArray[i])
    }
  }
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
* se crea la estructura html en donde aparece las recetas
*/
function renderRecipe(recipe) {
  $('.list-recipes').append('<a class="item-recipe" href="#">' +
  '<span class="attribution">' +
    '<span class="title-recipe">' + recipe.title + '</span>' +
    '<span class="metadata-recipe">' +
      '<span class="author-recipe">' + recipe.source.name + '</span>' +
        '<span class="bookmarks-recipe">' +
          '<span class="icon-bookmark">' +
          '</span>' +
        '</span>' +
      '</span>' +
  '</span>' +
  '<img src="img/recipes/320x350/' + recipe.name + '.jpg"/>' +
  '</a>');

	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintinputPhone4inputPhone4ar todas las actividades
*/
function renderActivities(activities) {
  /*
  *recorro la data con el for y le cambio el nombre
  *en vez de activitiesArray lo dejo en activities como aparece en la data
  */
  for(var i = 0; i < activities.length; i++) {
    renderActivity(activities[i]);
    if (activities.length > 0) {
      /*
      *si se cumple la condicion desaparece el div con clase
      *wrapper-message
      */
      $('.wrapper-message').hide();
    }
  }
	console.log('Activities: ', activities);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
  /*
  * creo la estructura html de template-activity.html
  */
  $('.list-activities').append('<a href="#" class="item-activity">' +

  '<span class="attribution">' +
  
    '<span class="avatar">' +
      '<img src=' + recipe.userAvatar + 'class="image-avatar">' +
    '</span>' +
      
    '<span class="meta">' +
      '<span class="author">' + recipe.userName + '</span>' + 'made' +
      '<span class="recipe">' + recipe.recipeName + '</span>'+ ':' + recipe.text + 
      '<span class="location">' + '&mdash;' + recipe.place + '</span>' +
    '</span>' +
  
  '</span>' +

  '<div class="bg-image" style="background-image: url(' + recipe.image + ');">' + '</div>' +

'</a>');
}



