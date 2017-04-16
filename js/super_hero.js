var SuperHero = function(name, energy, canFly) {
  this.name = name;
  this.energy = energy;
  this.canFly = canFly;
};


SuperHero.prototype.attack = function(superhero) {
    this.energy -= 2;
    superhero.energy -= 5;    
  };

SuperHero.prototype.drinkElixir = function(){
    while (this.energy < 100) {
      this.energy++;
    }
  };

SuperHero.prototype.giveReport = function () {
    console.log('I\'m ' + this.name + ', I currently have ' + this.energy + ' percent of energy!');
    return 'I\'m ' + this.name + ', I currently have ' + this.energy + ' percent of energy!';
  };

function Villain(name) {
  SuperHero.call(this, name);
  this.intentions = "evil";
  this.kill = function(superhero){
    superhero.energy = 0;
  };
}

Villain.prototype = Object.create(SuperHero.prototype);

Villain.prototype.constructor = Villain;

Villain.prototype.comeBackFromDead = function(){
    if (this.energy === 0) {
      this.energy = 50;
    }
  };