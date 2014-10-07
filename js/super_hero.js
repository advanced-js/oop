//DEFINE SuperHero Class
function SuperHero( hero_name, strength ) {
  this.hero_name = hero_name;
  this.strength = strength;
  this.health = 100;
}

//Add an attack method to the SuperHero Class
SuperHero.prototype.attack = function( defender ) {
  console.log( this.hero_name + ' attacked ' + defender.hero_name + ' with ' + this.strength + ' power');
  defender.health -= this.strength;
  console.log(defender.hero_name + ' health: ', defender.health);
};

//Instantiate the SuperHeroes
var drax = new SuperHero('drax', 40);
var gamora = new SuperHero('gamora', 25);
var groot = new SuperHero('groot', 60);
var rocket_racoon = new SuperHero('rocket racoon', 10);
var star_lord = new SuperHero('star-lord', 30);

// Show the names of the super heroes in the console
console.log('superhero name: ', drax.hero_name);
console.log('superhero name: ', gamora.hero_name);
console.log('superhero name: ', groot.hero_name);
console.log('superhero name: ', rocket_racoon.hero_name);
console.log('superhero name: ', star_lord.hero_name);
