//dot forwardslash says look in the same directory that I'm in
//never include .js extension when importing modules
//when importing core modules, you don't use dot-forwardslash
var film = require('./movie'); 

film.printSeenelkaik();
console.log(film.favMovie);