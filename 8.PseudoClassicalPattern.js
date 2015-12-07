
//This is pure prototypal version of Car class 
//We will refactor this to very close PseudoClassical Pattern.
//Just for syntactic convenience.

var Car = function(loc){
	var obj = Object.create(Car.prototype);//The new object delegates its failed lookup to Car.prototype.
	obj.loc = loc;
	return obj;
};

Car.prototype.move = function(){
	this.loc++;
}

var amy = new Car(1);
amy.move();


/*PseudoClassical Pattern*/
//Whenever we use new . Our function is going to run in SPECIAL mode called CONSTRUCTOR mode.

var Car = function(loc){
	//this = Object.create(Car.prototype);
	this.loc = loc;
	//return this;
}

//You will not write these two commented lines of code.Interpreter is gonna do that for you.
//The first line creates an object which delegates to Car.prototype and bind that value to this.In prototypal we have to do it ourselves.
//the last line returns the newly create dobject
Car.prototype.move = function(){
	this.loc++;
}

var amy = new Car(1);//Dont forget to put new if you want this code to run in constructor mode.

//The pseudoclassical pattern is just a thin layer of syntactic convenience on top of prototypal pattern of creating classes.

