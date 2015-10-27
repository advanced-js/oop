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
var SuperHero = function (superName) {
	this.superName = superName;
	this.hasSecretPower = true;
	this.isAlive = true;
	this.hasWeapon = true;
	this.hasShield = true;
};
//Variables substitute for conversation strings as follow:
var a = "My weapons will save me";
var b = "Uh-oh. This is going to be sticky";
var c = "You'll never Harm Me!!";
var d = "GOOD AND EVIL BATTLE TO THE END!!!";
var e = "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";
var f = "GOOD TRUMPS EVIL AGAIN!!";


//Method using random number generator to determine 
//which properties are active on instance of SuperHero
SuperHero.prototype.powerAppraisal = function (){

	if (Math.round(Math.random() * 18) % 2 === 0) {
		this.hasSecretPower = false;
	}

	if (Math.round(Math.random() * 25) % 5 === 0) {
		this.hasShield = false;
	}

	if (this.hasSecretPower === false && this.hasShield === true) {
		return a;
	}

	if (this.hasShield === false && this.hasSecretPower === false ) {
		return b;
	}

else if (this.hasSecretPower === true && this.hasShield === true ||
 this.hasSecretPower === true && this.hasShield === false) {
	return c;
}
};


//This function defines outcome of interaction (battle)
//between two instances of SuperHero
var showDown = function (x,y){
if (x.powerAppraisal() === a && y.powerAppraisal() ===  a){
return d;}
else if (x.powerAppraisal() === b && y.powerAppraisal() === a){
return e;}
else if (x.powerAppraisal() === c && y.powerAppraisal() === a){
return f;}

else if (x.powerAppraisal() === a && y.powerAppraisal() === b){
return f;}
else if (x.powerAppraisal() === b && y.powerAppraisal() === b){
return d;}
else if (x.powerAppraisal() === c && y.powerAppraisal() == b){
return f;}

else if (x.powerAppraisal() === a && y.powerAppraisal() === c){
return e;}
else if (x.powerAppraisal() === b && y.powerAppraisal() === c){
return e;}
else if (x.powerAppraisal() === c && y.powerAppraisal() == c){
return d;}

};

//Create two instances of SuperHero
var superPerson1 = new SuperHero('superPerson');
var superPerson2 = new SuperHero('evilVillain');

//Call interaction function
showDown(superPerson1, superPerson2);

//Result of instantiation and interaction
console.log(superPerson1.superName + ' says: ' + superPerson1.powerAppraisal());
console.log(superPerson2.superName + ' says: ' + superPerson2.powerAppraisal());
console.log('The battle is done! Referee says: ' + (showDown(superPerson1, superPerson2)));


console.log(Math.round(Math.random() * 25) % 5 === 0);
