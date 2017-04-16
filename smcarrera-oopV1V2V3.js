// JavaScript Document

	
SuperHero.kind = "Super Hero";					
SuperHero.cape = 1;	
					
//subclass 1: Person
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function(){
  return("I am walking!");
};

//subclass 2: Universe

function Universe(world) {
  this.world = world;
}
//example of SuperHero inheriting from Person & World

function SuperHero(name, powers, sidekick, world){
      Person.call(this, name);
	  this.powers  = powers;					 
      this.sidekick = sidekick;					
      Universe.call(this, world);						
	}
	
SuperHero.prototype = Object.create(Person.prototype); 
SuperHero.prototype.constructor = SuperHero;
	
SuperHero.prototype.getType = getType;			
SuperHero.prototype.toString = toString;
SuperHero.prototype.Attack = Attack;

function getType() 
{
      var result = this.name + " / " + this.powers +" / "+ this.sidekick +" / "+ this.world;
      return(result);    
}


function toString(obj) 
{
      var string1 = SuperHero.kind +" / "+ this.name +" / "+ this.powers +" / "+ this.sidekick +" / "+ this.world +" / Capes: "+ SuperHero.cape;
      return(string1);    
}

function Attack (obj1, obj2){
	var length1 = obj1.name.length;
	var length2 = obj2.name.length;
	if(length1>=length2){
		return(obj1.name + " would beat " + obj2.name + " in a fight");
	}
	if(length2>length1){
		return(obj2.name + " would beat " + obj1.name + " in a fight");
	}
}

var superhero1 = new SuperHero('superman', 'can fly','lois lane', 'earth');
var superhero2 = new SuperHero('batman', 'rich','robin', 'gotham');

/*V1 testing with alerts
var abc = superhero1.toString();
var def = superhero1.world;

//example of encapsulation SuperHero is using Person's method

var xyz = superhero1.walk();
var nyc = Attack(superhero1, superhero2);
alert(abc);
alert(def);
alert(xyz);
alert(nyc);*/

