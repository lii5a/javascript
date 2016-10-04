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
	console.log("\n I am worthless");
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
