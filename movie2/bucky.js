var film = require('./movie')

//if you excluded this line, the favMovie would be the same as Emily's - she has changed the object
//shared state of modules!
/*film.favMovie="The Matrix";

console.log('Buckys favourite movie is ' + film.favMovie);*/

var buckyFilm = film();
buckyFilm.favMovie = "Teesklejad";
console.log("Bucky's fav movie is " + buckyFilm.favMovie) 