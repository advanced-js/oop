var SuperHero = new Object();

var SuperHero = function(realname, character, age, power) {
    this.realname = realname;
    this.character = character;
    this.age = age + " yrs old";
    this.power = power;
};

SuperHero.prototype.talk = function() {
    console.log("I'm " + this.realname + ", I'm "+ this.age +", and my alter ego is " + this.character + "!");
};

SuperHero.prototype.newPower = function(power) {
	this.power = power;
    console.log("My new power is " + this.power + "!");
};

SuperHero.prototype.brag = function(friend) {
  console.log(this.realname + " is bragging to " + friend.realname + " that he is the better super hero!");
};


var hulk = new SuperHero("Bruce Banner", "The Hulk", 34, "Superhuman Strength");
var flash = new SuperHero("Barry Allen", "The Flash", 26, "Superhuman Speed");


hulk.talk();
hulk.newPower("Resistance to Injury");
hulk.brag(flash);

flash.talk();
flash.newPower("Invisibility");
flash.brag(hulk);
