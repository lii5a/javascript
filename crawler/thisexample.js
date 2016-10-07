var Bucky = {
	printFirstName: function() {
	console.log("My name is Bucky");
	console.log(this === Bucky);
	}
};


//why function inside variable? 
//aha. the function is a parameter of this variable.


Bucky.printFirstName();

//default calling context is global
function doSomethingWorthless() {
	console.log("I am worthless \n");
	console.log(this === global);
}

doSomethingWorthless();

function User () {
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer) {
		targetPlayer.life += 1;
		this.life -= 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}

}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";
Bucky.giveLife(Wendy);

console.log("Bucky " + Bucky.life);
console.log("Wendy " + Wendy.life);

//can add functions later to objects via prototyping
User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3;
		this.life += 3;
		console.log(this.name + " just uppercutted " + targetPlayer.name);
}

Wendy.uppercut(Bucky);
console.log("Bucky " + Bucky.life);
console.log("Wendy " + Wendy.life);

//can add properties to all objects via prototyping
User.prototype.magic = 60;
console.log("Bucky's magic level is " + Bucky.magic);
console.log("Wendy's magic level is " + (Wendy.magic-Bucky.magic));
