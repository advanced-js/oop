var SuperHero = function(name, energy, canFly) {
  this.name = name;
  this.energy = energy;
  this.canFly = canFly;
  this.giveReport = function () {
    console.log('I\'m ' + name + ', I currently have ' + energy + ' percent of energy!')
    return 'I\'m ' + name + ', I currently have ' + energy + ' percent of energy!'
  };
  this.attack = function(superhero) {
    this.energy -= 2
    superhero.energy -= 5    
  };

  this.drinkElixir = function(){
    while (this.energy < 100) {
      this.energy++;
    }
  };
  return this
};

