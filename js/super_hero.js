var SuperHuman = function(name){
	this.name = name; 
	this.health = 100; 	
}

SuperHuman.prototype.doublepunch = function(opp1, opp2) { 
 	this.health -= 3 
 	opp1.health -= 10;  
 	opp2.health -= 5; 
 	document.write(this.name + " has superpunched both " + opp1.name + " and " + opp2.name + "</br>")
}


SuperHuman.prototype.attack = function(opp) { 
 	opp.health -= 10;  
 	this.health -= 5; 
 	document.write(this.name + " just hit " + opp.name + "</br>")
 	document.write(this.name + " used 5 energy and has " + this.health + " left." + "</br>")
 	document.write(opp.name + " loses 10 energy and has " + opp.health + " left." + "</br>" + "</br>")
}

var SuperHero = function(name) {
	SuperHuman.call(this)
	this.type = "a hero"
	this.name = name; 
}

SuperHero.prototype = Object.create(SuperHuman.prototype)

SuperHero.prototype.heal = function(){
	this.health += 8 
	document.write(this.name + " has used healing power and now has " + this.health + " health </br>")
}

function SuperVillian(name) {
	SuperHero.call(this)
	this.type = "a villain"
	this.name = name 	
}

SuperVillian.prototype = Object.create(SuperHuman.prototype)


var batman = new SuperHero("batman"); 
var superman = new SuperHero("superman")
var joker = new SuperVillian("joker")

batman.attack(joker)
joker.attack(superman)
superman.heal()
joker.doublepunch(batman, superman)

document.write( "</br>" + "health results:" + "</br>")

document.write(batman.name + " is " + batman.type + " and has " + batman.health + " health left." + "</br>")
document.write(superman.name +  " is " + superman.type + " and has " + superman.health + " health left." + "</br>")
document.write(joker.name +  " is " + joker.type + " and has " + joker.health + " health left." + "</br>")
