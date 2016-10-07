var film = require('./movie')

/*film.favMovie="Intouchables";

console.log('Emilys favourite movie is: ' + film.favMovie);*/

var emilyFilm = film();
emilyFilm.favMovie = "Polly's Diaries";
console.log("Emily's fav movie is " + emilyFilm.favMovie)