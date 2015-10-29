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


//----------------------------------------------------
//SOLUTION PART 2
//----------------------------------------------------

//Create SuperHero class
// var SuperHero = function (superName) {
// 	this.superName = superName;
// 	this.hasSecretPower = true;
// 	this.isAlive = true;
// 	this.hasWeapon = true;
// 	this.hasShield = true;
// };
// //Variables substitute for conversation strings as follow:
// var a = "My weapons will save me";
// var b = "Uh-oh. This is going to be sticky";
// var c = "You'll never Harm Me!!";
// var d = "GOOD AND EVIL BATTLE TO THE END!!!";
// var e = "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";
// var f = "GOOD TRUMPS EVIL AGAIN!!";


// //Method using random number generator to determine 
// //which properties are active on instance of SuperHero
// SuperHero.prototype.powerAppraisal = function (){

// 	if (Math.round(Math.random() * 18) % 2 === 0) {
// 		this.hasSecretPower = false;
// 	}

// 	if (Math.round(Math.random() * 25) % 5 === 0) {
// 		this.hasShield = false;
// 	}

// 	if (this.hasSecretPower === false && this.hasShield === true) {
// 		return a;
// 	}

// 	if (this.hasShield === false && this.hasSecretPower === false ) {
// 		return b;
// 	}

// else if (this.hasSecretPower === true && this.hasShield === true ||
//  this.hasSecretPower === true && this.hasShield === false) {
// 	return c;
// }
// };


// //This function defines outcome of interaction (battle)
// //between two instances of SuperHero
// var showDown = function (x,y){
// if (x.powerAppraisal() === a && y.powerAppraisal() ===  a){
// return d;}
// else if (x.powerAppraisal() === b && y.powerAppraisal() === a){
// return e;}
// else if (x.powerAppraisal() === c && y.powerAppraisal() === a){
// return f;}

// else if (x.powerAppraisal() === a && y.powerAppraisal() === b){
// return f;}
// else if (x.powerAppraisal() === b && y.powerAppraisal() === b){
// return d;}
// else if (x.powerAppraisal() === c && y.powerAppraisal() == b){
// return f;}

// else if (x.powerAppraisal() === a && y.powerAppraisal() === c){
// return e;}
// else if (x.powerAppraisal() === b && y.powerAppraisal() === c){
// return e;}
// else if (x.powerAppraisal() === c && y.powerAppraisal() == c){
// return d;}

// };

// //Create two instances of SuperHero
// var superPerson1 = new SuperHero('superPerson');
// var superPerson2 = new SuperHero('evilVillain');

// //Call interaction function
// showDown(superPerson1, superPerson2);

// //Result of instantiation and interaction
// console.log(superPerson1.superName + ' says: ' + superPerson1.powerAppraisal());
// console.log(superPerson2.superName + ' says: ' + superPerson2.powerAppraisal());
// console.log('The battle is done! Referee says: ' + (showDown(superPerson1, superPerson2)));


// console.log(Math.round(Math.random() * 25) % 5 === 0);


//  //----------------------------------------------------
//  //SOLUTION PART 2 **** ALTERNATE ****
//  //----------------------------------------------------
 
//  //Create SuperHero class
//  var SuperHero = function (superName) {
//  	this.superName = superName;
//  	this.hasSecretPower = true;
//  	this.isAlive = true;
//  	this.hasWeapon = true;
//  	this.hasShield = true;
// };
 
//  //Method using random number generator to determine 
//  //which properties are active on instance of SuperHero
//  SuperHero.prototype.attack = function (){
 
//  	if (parseInt(Math.random() * 18) % 2 === 0) {
//  		this.hasSecretPower = false;
//  	}
 
//  	if (parseInt(Math.random() * 25) % 5 === 0) {
//  		this.hasWeapon = false;
//  	}
 
//  	if (this.hasSecretPower === false && this.hasWeapon === true) {
//  		return "My battle skills combined with these weapons will do you in!!";
//  	}
 
//  	if (this.hasWeapon === false && this.hasSecretPower === false ) {
//  		return "I will fight you with my bare hands!!";
//  	}
 
//  else if (this.hasSecretPower === true && this.hasWeapon === true ||
//   this.hasSecretPower === true && this.hasWeapon === false) {
//  	return "With these secret powers you don't have a chance!!";
//  }
//  };
 
//  SuperHero.prototype.counterAttack = function (){
 
//  	if (parseInt(Math.random() * 18) % 2 === 0) {
//  		this.hasSecretPower = false;
//  	}
 
//  	if (parseInt(Math.random() * 25) % 5 === 0) {
//  		this.hasShield = false;
//  	}
 
//  	if (this.hasSecretPower === false && this.hasShield === true) {
//  		return "With this shield any weapon you try is just a toy!!";
//  	}
 
//  	if (this.hasShield === false && this.hasSecretPower === false ) {
//  		return "I will fight you with my bare hands!!";
//  	}
 
//  else if (this.hasSecretPower === true && this.hasShield === true ||
//   this.hasSecretPower === true && this.hasShield === false) {
//  	return "Ha! Your attack is no match for my secret powers!!";
//  }
//  };

//  //This function defines outcome of interaction (battle)
//  //between two instances of SuperHero
//  var battleOutcome = function (x,y){
//  if (x.attack(y) === "My battle skills combined with these weapons will do you in!!" && y.counterAttack(x) ===  "With this shield any weapon you try is just a toy!!"){
//  return "GOOD AND EVIL BATTLE TO THE END!!!";}
//  else if (x.attack(y) === "I will fight you with my bare hands!!" && y.counterAttack(x) === "With this shield any weapon you try is just a toy!!"){
//  return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
//  else if (x.attack(y) === "With these secret powers you don't have a chance!!" && y.counterAttack(x) === "With this shield any weapon you try is just a toy!!"){
//  return "GOOD TRUMPS EVIL AGAIN!!";}
 
//  else if (x.attack(y) === "My battle skills combined with these weapons will do you in!!" && y.counterAttack(x) === "I will fight you with my bare hands!!"){
//  return "GOOD TRUMPS EVIL AGAIN!!";}
//  else if (x.attack(y) === "I will fight you with my bare hands!!" && y.counterAttack(x) === "I will fight you with my bare hands!!"){
//  return "GOOD AND EVIL BATTLE TO THE END!!!";}
//  else if (x.attack(y) === "With these secret powers you don't have a chance!!" && y.counterAttack(x) == "I will fight you with my bare hands!!"){
//  return "GOOD TRUMPS EVIL AGAIN!!";}
 
//  else if (x.attack(y) === "My battle skills combined with these weapons will do you in!!" && y.counterAttack(x) === "Ha! Your attack is no match for my secret powers!!"){
//  return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
//  else if (x.attack(y) === "I will fight you with my bare hands!!" && y.counterAttack(x) === "Ha! Your attack is no match for my secret powers!!"){
//  return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
//  else if (x.attack(y) === "With these secret powers you don't have a chance!!" && y.counterAttack(x) == "Ha! Your attack is no match for my secret powers!!"){
//  return "GOOD AND EVIL BATTLE TO THE END!!!";}

//  else if (y.attack(x) === "My battle skills combined with these weapons will do you in!!" && x.counterAttack(y) ===  "With this shield any weapon you try is just a toy!!"){
//  return "GOOD AND EVIL BATTLE TO THE END!!!";}
//  else if (y.attack(x) === "I will fight you with my bare hands!!" && x.counterAttack(y) === "With this shield any weapon you try is just a toy!!"){
//  return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
//  else if (y.attack(x) === "With these secret powers you don't have a chance!!" && x.counterAttack(y) === "With this shield any weapon you try is just a toy!!"){
//  return "GOOD TRUMPS EVIL AGAIN!!";}
 
//  else if (y.attack(x) === "My battle skills combined with these weapons will do you in!!" && x.counterAttack(y) === "I will fight you with my bare hands!!"){
//  return "GOOD TRUMPS EVIL AGAIN!!";}
//  else if (y.attack(x) === "I will fight you with my bare hands!!" && x.counterAttack(y) === "I will fight you with my bare hands!!"){
//  return "GOOD AND EVIL BATTLE TO THE END!!!";}
//  else if (y.attack(x) === "With these secret powers you don't have a chance!!" && x.counterAttack(y) == "I will fight you with my bare hands!!"){
//  return "GOOD TRUMPS EVIL AGAIN!!";}
 
//  else if (y.attack(x) === "My battle skills combined with these weapons will do you in!!" && x.counterAttack(y) === "Ha! Your attack is no match for my secret powers!!"){
//  return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
//  else if (y.attack(x) === "I will fight you with my bare hands!!" && x.counterAttack(y) === "Ha! Your attack is no match for my secret powers!!"){
//  return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
//  else if (y.attack(x) === "With these secret powers you don't have a chance!!" && x.counterAttack(y) == "Ha! Your attack is no match for my secret powers!!"){
//  return "GOOD AND EVIL BATTLE TO THE END!!!";}
 
//  };
 
//  //Create tow instances of SuperHero
//  var superPerson1 = new SuperHero('superPerson');
//  var superPerson2 = new SuperHero('evilVillain');
 
//  // //Call attack method
//  // superPerson1.attack(superPerson2);
//  // superPerson2.counterAttack(superPerson1);

//  //  //Call outcome function
//  // battleOutcome(superPerson1, superPerson2);
 
//  //Result of instantiation and interaction
//  console.log(superPerson1.superName + ' says: ' +  superPerson1.attack(superPerson2));
//  console.log(superPerson2.superName + ' says: ' + superPerson2.counterAttack(superPerson1));
//  console.log('The battle is done! Referee says: ' + (battleOutcome(superPerson1, superPerson2)));

 //----------------------------------------------------
 //SOLUTION PART 2 **** ALTERNATE, STRINGS REPLACED WITH VARIABLES ****
 //----------------------------------------------------
 
 //Create SuperHero class
 "use strict";
 var SuperHero = function (superName) {
 	this.superName = superName;
 	this.hasSecretPower = true;
 	this.isAlive = true;
 	this.hasWeapon = true;
 	this.hasShield = true;
};

// //Variables substitute for conversation strings as follow:
var a = "My battle skills combined with these weapons will do you in!!";
var b = "I will fight you with my bare hands!!";
var c = "With these secret powers you don't have a chance!!";
var d = "With this shield any weapon you try is just a toy!!";
var e = "Ha! Your attack is no match for my secret powers!!";
var f = "GOOD AND EVIL BATTLE TO THE END!!!";
var g = "EVIL HAS TRIUMPHED -- BUT IT WILL NEVER ENDURE!!";
var h = "GOOD TRUMPS EVIL AGAIN!!";


 
 //Method using random number generator to determine 
 //which properties are active on instance of SuperHero
 SuperHero.prototype.attack = function (){
 
 	if (parseInt(Math.random() * 18) % 2 === 0) {
 		this.hasSecretPower = false;
 	}
 
 	else if (parseInt(Math.random() * 25) % 5 === 0) {
 		this.hasWeapon = false;
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
 
 	if (parseInt(Math.random() * 18) % 2 === 0) {
 		this.hasSecretPower = false;
 	}
 
 	if (parseInt(Math.random() * 25) % 5 === 0) {
 		this.hasShield = false;
 	}
 
 	if (this.hasSecretPower === false && this.hasShield === true) {
 		return d;
 	}
 
 	if (this.hasSecretPower === false && this.hasShield === false ) {
 		return b;
 	}
 
 else if (this.hasSecretPower === true && this.hasShield === true ||
  this.hasSecretPower === true && this.hasShield === false) {
 	return e;
 }
 };

 //This function defines outcome of interaction (attack/counterAttack)
 //between two instances of SuperHero
 var battleOutcome = function (x,y){
 if (x.attack(y) === a && y.counterAttack(x) ===  d){
 return f;}
 else if (x.attack(y) === b && y.counterAttack(x) === d){
 return g;}
 else if (x.attack(y) === c && y.counterAttack(x) === d){
 return h;}
 
 else if (x.attack(y) === a && y.counterAttack(x) === b){
 return h;}
 else if (x.attack(y) === b && y.counterAttack(x) === b){
 return f;}
 else if (x.attack(y) === c && y.counterAttack(x) === b){
 return h;}
 
 else if (x.attack(y) === a && y.counterAttack(x) === e){
 return g;}
 else if (x.attack(y) === b && y.counterAttack(x) === e){
 return g;}
 else if (x.attack(y) === c && y.counterAttack(x) === e){
 return f;}

 else if (y.attack(x) === a && x.counterAttack(y) ===  d){
 return f;}
 else if (y.attack(x) === b && x.counterAttack(y) === d){
 return g;}
 else if (y.attack(x) === c && x.counterAttack(y) === d){
 return h;}
 
 else if (y.attack(x) === a && x.counterAttack(y) === b){
 return h;}
 else if (y.attack(x) === b && x.counterAttack(y) === b){
 return f;}
 else if (y.attack(x) === c && x.counterAttack(y) === b){
 return h;}
 
 else if (y.attack(x) === a && x.counterAttack(y) === e){
 return g;}
 else if (y.attack(x) === b && x.counterAttack(y) === e){
 return g;}
 else if (y.attack(x) === c && x.counterAttack(y) === e){
 return f;}
 
 };
 
 //Create tow instances of SuperHero
 var superPerson1 = new SuperHero("superPerson");
 var superPerson2 = new SuperHero("evilVillain");

 //Result of instantiation and interaction:
 //Call attack Method
 console.log(superPerson1.superName + " says: " +  superPerson1.attack(superPerson2));
 //Call counterAttack Method
 console.log(superPerson2.superName + " says: " + superPerson2.counterAttack(superPerson1));
 //Call battleOutcome function
 console.log("The battle is done! Referee says: " + (battleOutcome(superPerson1, superPerson2)));