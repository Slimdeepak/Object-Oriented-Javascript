/*Lexical Scope : Region in your source code where you can refer to  a variable by name without 
	getting access error.

A new Lexical scope is created every time you write a function definition.

It spans from open curly braces to closed curly braces.

Inner scpoe can access outer scope.

You can assign a variable even you have not declared it before .It will be in global scope.(13)*/


function aHero(){
	return "Hello";
};

function aDeed(){
	return "Dog"
};

function aFoil(){
	return "Spider";
};


var hero = aHero(); //->hero is in global scope.

var newSaga = function(){
	//new lexical scope has been created: Scope 1
	var foil = aFoil();
	var saga = function(){
		//new lexical scope  : Scope 2
		var deed = aDeed();
		console.info(hero+deed+foil);
		//scope 2 ends here.
	}
	saga();
	saga();
	//Scope 1 ends here
};

newSaga();
newSaga();

//The inmemory scope structure is called execution context.



