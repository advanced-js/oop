// var SuperHero = ...
var SuperHero = function SuperHero(name, move, lives, numAttacks) {
  this.name = name;
  this.move = move;
  this.lives = lives || 3;
  this.numAttacks = numAttacks || 3;
};

SuperHero.prototype.attack = function(target) {
  console.log(target.name + ' is being ' + this.move + 'ed by ' + this.name + '!');
  target.lives -= 1;
  console.log(target.name + ' now has ' + target.lives + ' lives!');
  target.numAttacks -=1;
  console.log(this.name + ' now has ' + target.numAttacks + ' attacks!');
};

var emmaStone = new SuperHero('Emma Stone', 'sucker punch');
var michelleWilliams = new SuperHero('Michelle Williams', 'curb stomp');

emmaStone.attack(michelleWilliams);



