// //SOLUTION PART 1

// //Create SuperHero class
// var SuperHero = function (superName) {
// 	this.superName = superName;
// 	this.hasSecretPower = true;
// 	this.isAlive = true;
// 	this.hasWeapon = true;
// 	this.hasShield = true;
// };

// //Method using random number generator to determine 
// //which properties are active on instance of SuperHero
// SuperHero.prototype.powerAppraisal = function (){

// 	if (parseInt(Math.random() * 5) % 2 === 0) {
// 		this.hasSecretPower = false;
// 	}

// 	if (parseInt(Math.random() * 5) % 2 === 0) {
// 		this.hasShield = false;
// 	}

// 	if (this.hasSecretPower === false && this.hasShield === true) {
// 		return "My weapons will save me";}

// 	if (this.hasShield === false && this.hasSecretPower === false ) {
// 		return "Uh-oh. This is going to be sticky";}

// else if (this.hasSecretPower === true && this.hasShield === true ||
//  this.hasSecretPower === true && this.hasShield === false) {
// 	return "You'll never Harm Me!!";
// }
// };

// //List of active properties on superPerson instance of SuperHero
// var superPerson = new SuperHero('superPerson');
// console.log("Name: " + superPerson.superName);
// console.log("Appraisal of power: " + superPerson.powerAppraisal());
// console.log("Secret Power: " + superPerson.hasSecretPower);
// console.log("Alive?: " + superPerson.isAlive);
// console.log("Has Weapon?: " + superPerson.hasWeapon);
// console.log("Has Shield?: " + superPerson.hasShield);


 //---------------------------------------------------------
 //SOLUTION PART 2 **** STRINGS REPLACED WITH VARIABLES ****
 //---------------------------------------------------------
 
 //Create SuperHero class
 // "use strict";
 var SuperHero = function (superName) {
 	this.superName = superName;
 	this.hasSecretPower = true;
 	this.isAlive = true;
 	this.hasWeapon = true;
 	this.hasShield = true;
};

function SuperChild(superName) {
	SuperHero.call(this, superName);
	this.hasBomb = true;
}

SuperChild.prototype = Object.create(SuperHero.prototype);
SuperChild.prototype.constructor = SuperChild;


// //Variables substitute for conversation strings as follow:
var a = "My battle skills combined with these weapons will do you in!!";
var b = "I will fight you with my bare hands!!";
var c = "With these secret powers you don't have a chance!!";
var d = "With this shield any weapon you try is just a toy!!";
var e = "Ha! Your attack is no match for my secret powers!!";
var f = "GOOD AND EVIL BATTLE TO THE END!!!";
var g = "EVIL HAS TRIUMPHED -- BUT IT WILL NEVER ENDURE!!";
var h = "GOOD TRUMPS EVIL AGAIN!!";
var j = "NOT SO FAST! THIS BOMB IS THE END TO ALL YOUR EVIL";


 
 //Method using random number generator to determine 
 //which properties are active on instance of SuperHero
 SuperHero.prototype.attack = function (){
 
 	if (Math.round(Math.random() * 18) % 2 === 0) {
 		this.hasSecretPower = false;
 	}
 
 	else if (Math.round(Math.random() * 25) % 5 === 0) {
 		this.hasWeapon = false;
 	}

 	if (this.hasBomb === true) {
 		return j;
 	}

 	if (this.hasSecretPower === false && this.hasWeapon === true) {
 		return a;
 	}
 
 	else if (this.hasSecretPower === false && this.hasWeapon === false ) {
 		return b;
 	}

 	else if (this.hasSecretPower === true && this.hasWeapon === true ||
  this.hasSecretPower === true && this.hasWeapon === false) {
 		return c;
 	}

 };
 
 SuperHero.prototype.counterAttack = function (){
 
 	if (Math.round(Math.random() * 18) % 2 === 0) {
 		this.hasSecretPower = false;
 	}
 
 	else if (Math.round(Math.random() * 25) % 5 === 0) {
 		this.hasShield = false;
 	}

 	if (this.hasSecretPower === false && this.hasShield === true) {
 		return d;
 	}
 
 	else if (this.hasSecretPower === false && this.hasShield === false ) {
 		return b;
 	}
 
 else if (this.hasSecretPower === true && this.hasShield === true ||
  this.hasSecretPower === true && this.hasShield === false) {
 	return e;
 }
 };
 //Create two instances of SuperHero
 var superPerson1 = new SuperHero("superPerson");
 var superPerson2 = new SuperHero("evilVillain");
 var superChild1 = new SuperChild("superChild");

//Call methods & store results in variables
 var attackResult = superPerson1.attack(superPerson2);
 var counterAttackResult = superPerson2.counterAttack(superPerson1);
 var surpriseAttackResult = superChild1.attack(superPerson2);

 //This function defines outcome of interaction (attack/counterAttack)
 //between two instances of SuperHero
 var battleOutcome = function (x, y){
 if (x === a && y === d){
 return f;}
 else if (x === b && y === d){
 	return g;}
 else if (x === c && y === d){
 return h;}
 
 else if (x === a && y === b){
 return h;}
 else if (x === b && y === b){
 return f;}
 else if (x === c && y === b){
 return h;}
 
 else if (x === a && y === e){
 	return g;}
 else if (x === b && y === e){
 	return g;}
 else if (x === c && y === e){
 return f;}
 
 	if (battleOutcome(attackResult, counterAttackResult) === g) {
	console.log(superChild1.superName + " says: " + surpriseAttackResult);
 }
};
 //Result of attack method call
 console.log(superPerson1.superName + " says: " +  attackResult);
 //Result of counterAttack method call
 console.log(superPerson2.superName + " says: " + counterAttackResult);
 //Call battleOutcome function
 console.log("The battle is done! Referee says: " + (battleOutcome(attackResult, counterAttackResult)));



