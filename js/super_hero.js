//DEFINE SuperHero Class
var SuperHero = function ( hero_name, strength ) {
  this.hero_name = hero_name;
  this.strength = strength;
  this.health = 100;
};

//Add an attack method to the SuperHero Class
SuperHero.prototype.attack = function( defender ) {
  console.log( this.hero_name + ' attacked ' + defender.hero_name + ' with ' + this.strength + ' power');
  defender.health -= this.strength;
  console.log(defender.hero_name + ' health: ', defender.health);
};

//Guardian of the Galaxy Sub Class
var GuardianOfTheGalaxy = function( hero_name, strength ) {
    SuperHero.call( this, hero_name, strength );
    this.clan = 'guardian of the galaxy';
};

GuardianOfTheGalaxy.prototype = Object.create(SuperHero.prototype);

GuardianOfTheGalaxy.prototype.getHealth = function(){
    console.log('health', this.health);
};

//X Men Sub Class
var X_Men = function( hero_name, strength ) {
    SuperHero.call( this, hero_name, strength );
    this.clan = 'xmen';
};

X_Men.prototype = Object.create(SuperHero.prototype);

X_Men.prototype.getClan = function() {
    return(this.clan);
};

//Instantiate the Guardians of the Galaxy
var drax = new GuardianOfTheGalaxy('drax', 40);
var gamora = new GuardianOfTheGalaxy('gamora', 25);
var groot = new GuardianOfTheGalaxy('groot', 60);
var rocket_racoon = new GuardianOfTheGalaxy('rocket racoon', 10);
var star_lord = new GuardianOfTheGalaxy('star-lord', 30);

// Show the names of the guardians of the galaxy in the console
var guardians_of_the_galaxy = [drax,gamora,groot,rocket_racoon,star_lord];
for (var i=0; i < guardians_of_the_galaxy.length; i++) {
  console.log('guardian of the galaxy: ',guardians_of_the_galaxy[i].hero_name);
}

//Instantiate the X Men
var wolverine = new X_Men('wolverine', 50);
var gambit = new X_Men('gambit', 30);
var rogue = new X_Men('rogue', 25);
var beat = new X_Men('beast', 60);
