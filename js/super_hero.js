//SOLUTION PART 1

//Create SuperHero class
var SuperHero = function (superName) {
	this.superName = superName;
	this.hasSecretPower = true;
	this.isAlive = true;
	this.hasWeapon = true;
	this.hasShield = true;
};

//Method using random number generator to determine 
//which properties are active on instance of SuperHero
SuperHero.prototype.powerAppraisal = function (){

	if (parseInt(Math.random() * 5) % 2 === 0) {
		this.hasSecretPower = false;
	}

	if (parseInt(Math.random() * 5) % 2 === 0) {
		this.hasShield = false;
	}

	if (this.hasSecretPower === false && this.hasShield === true) {
		return "My weapons will save me";}

	if (this.hasShield === false && this.hasSecretPower === false ) {
		return "Uh-oh. This is going to be sticky";}

else if (this.hasSecretPower === true && this.hasShield === true ||
 this.hasSecretPower === true && this.hasShield === false) {
	return "You'll never Harm Me!!";
}
};

//List of active properties on superPerson instance of SuperHero
var superPerson = new SuperHero('superPerson');
console.log("Name: " + superPerson.superName);
console.log("Appraisal of power: " + superPerson.powerAppraisal());
console.log("Secret Power: " + superPerson.hasSecretPower);
console.log("Alive?: " + superPerson.isAlive);
console.log("Has Weapon?: " + superPerson.hasWeapon);
console.log("Has Shield?: " + superPerson.hasShield);


// //----------------------------------------------------
// //SOLUTION PART 2
// //----------------------------------------------------

// //Create SuperHero class
// var SuperHero = function (superName) {
// 	this.superName = superName;
// 	this.hasSecretPower = true;
// 	this.isAlive = true;
// 	this.hasWeapon = true;
// 	this.hasShield = true;
// }

// //Method using random number generator to determine 
// //which properties are active on instance of SuperHero
// SuperHero.prototype.powerAppraisal = function (){

// 	if (parseInt(Math.random() * 18) % 2 === 0) {
// 		this.hasSecretPower = false;
// 	}

// 	if (parseInt(Math.random() * 25) % 5 === 0) {
// 		this.hasShield = false;
// 	}

// 	if (this.hasSecretPower === false && this.hasShield === true) {
// 		return "My weapons will save me";
// 	}

// 	if (this.hasShield === false && this.hasSecretPower === false ) {
// 		return "Uh-oh. This is going to be sticky";
// 	}

// else if (this.hasSecretPower === true && this.hasShield === true ||
//  this.hasSecretPower === true && this.hasShield === false) {
// 	return "You'll never Harm Me!!";
// }
// };

// //This function defines outcome of interaction (battle)
// //between two instances of SuperHero
// var showDown = function (x,y){
// if (x.powerAppraisal() === "My weapons will save me" && y.powerAppraisal() ===  "My weapons will save me"){
// return "GOOD AND EVIL BATTLE TO THE END!!!";}
// else if (x.powerAppraisal() === "Uh-oh. This is going to be sticky" && y.powerAppraisal() === "My weapons will save me"){
// return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
// else if (x.powerAppraisal() === "You'll never Harm Me!!" && y.powerAppraisal() === "My weapons will save me"){
// return "GOOD TRUMPS EVIL AGAIN!!";}

// else if (x.powerAppraisal() === "My weapons will save me" && y.powerAppraisal() === "Uh-oh. This is going to be sticky"){
// return "GOOD TRUMPS EVIL AGAIN!!";}
// else if (x.powerAppraisal() === "Uh-oh. This is going to be sticky" && y.powerAppraisal() === "Uh-oh. This is going to be sticky"){
// return "GOOD AND EVIL BATTLE TO THE END!!!";}
// else if (x.powerAppraisal() === "You'll never Harm Me!!" && y.powerAppraisal() == "Uh-oh. This is going to be sticky"){
// return "GOOD TRUMPS EVIL AGAIN!!";}

// else if (x.powerAppraisal() === "My weapons will save me" && y.powerAppraisal() === "You'll never Harm Me!!"){
// return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
// else if (x.powerAppraisal() === "Uh-oh. This is going to be sticky" && y.powerAppraisal() === "You'll never Harm Me!!"){
// return "EVIL HAS TRIUMPHED -- BUT WILL NEVER ENDURE!!";}
// else if (x.powerAppraisal() === "You'll never Harm Me!!" && y.powerAppraisal() == "You'll never Harm Me!!"){
// return "GOOD AND EVIL BATTLE TO THE END!!!";}

// };

// //Create tow instances of SuperHero
// var superPerson1 = new SuperHero('superPerson');
// var superPerson2 = new SuperHero('evilVillain');

// //Call interaction function
// showDown(superPerson1, superPerson2);

// //Result of instantiation and interaction
// console.log(superPerson1.superName + ' says: ' + superPerson1.powerAppraisal());
// console.log(superPerson2.superName + ' says: ' + superPerson2.powerAppraisal());
// console.log('The battle is done! Referee says: ' + (showDown(superPerson1, superPerson2)));

