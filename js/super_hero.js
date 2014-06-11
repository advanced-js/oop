//v2
var SuperHero = function(name) {
	//private
	var health = 100;
	var that = this;

	//public
	this.superfriends = [];
	this.name = name || "Captain Anonymous";
	this.getHealth = function() 	{return health;}	//neither this nor that. hmmm.
	this.addHealth = function(num) 	{return (health += parseInt(num));}

	this.addFriend = function(friend)	{
		friend.addHealth( parseInt(0.1 * friend.getHealth()) );
		this.addHealth( parseInt(0.1 * health) );
		friend.superfriends.push(this);
		return this.superfriends.push(friend);
	}
	this.removeFriend = function(friend)	{
		friend.addHealth( parseInt(-0.1 * friend.getHealth()) );
		this.addHealth( parseInt(-0.1 * health) );
		for (var i=0; i<friend.superfriends.length; i++) {
			if (friend.superfriends[i]===this) {friend.superfriends.splice(i,1); break;}
		}
		for (var i=0; i<this.superfriends.length; i++) {
			if (this.superfriends[i]===friend) {this.superfriends.splice(i,1); break;}
		}
		return this.superfriends.length;
	}
}





//v0
/*

Okay, 

this.foo (public)
var foo  (private)

Constructor.prototype.foo	(public)
 - prototype does NOT have access to private, only public

 this.foo = function() {}	(privileged)

 see :
 http://www.crockford.com/javascript/private.html
 http://stackoverflow.com/questions/436120/javascript-accessing-private-member-variables-from-prototype-defined-functions

*/





//HMMM...
/*

var RegularHero = function() {
	this.health = 10;
	this.greeting = "Howdy";
	var that = this;
//	return {
//		getHealth : function() 		{return that.health;},
//		addHealth : function(num) 	{return that.health+=parseInt(num);},
//		greeting : that.greeting
//	}
}
//RegularHero.prototype.greeting = "Hello World.";
RegularHero.prototype.getGreeting = function() {
	return this.greeting + ", stranger!";
}

var rh = new RegularHero();
//rh.addHealth(1)

//console.log(rh.getHealth());
console.log(rh.health);	// fail private
console.log(rh.greeting);
console.log(rh.getGreeting());

*/




// YUCK
// discovering public/private issues that hard way, sucked!
/*
var RegularHero = function() {
	//this.type = "RegularHero";
	//var type = "RegularHero";
}
//RegularHero.prototype.type = function () {return "RegularHero";};	//"RegularHero";
//RegularHero.type = function() {return "RegularHero";}
//WTF, nothing works

var SuperHero = function(name) {
	var name = name || "Captain Anonymous";
	var health = 100;
	//var greeting;
	return {
		getName : function() {return name;},
		getHealth : function() {return health;}, 
		doTeamwork : function(hero) {return "Let's work together, "+hero.getName()}//,
		//greeting : function() {return greeting;}
	};
};
SuperHero.prototype = new RegularHero();

//SuperHero.prototype.getName = function (){
//	return this.name;	//????
//};
//SuperHero.prototype.greeting = function() {
//	return "Hello There.";
//}
//SuperHero.prototype.greeting = "Howdy";


var sm = new SuperHero("Superman");
var ww = new SuperHero();	//Wonder Woman

//console.log(sm.greeting);
console.log(sm.type);
*/




