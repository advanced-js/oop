var SuperHero = function SuperHero()
{
  this.dialog = [];
  this.talkIndex = 0;
};
SuperHero.prototype.talks = function()
{
  var saids = this.dialog[this.talkIndex];
  this.talkIndex++;
  console.log(saids);
  return saids;
};

Cartman.prototype = new SuperHero();
Cartman.prototype.constructor = Cartman;
function Cartman()
{
  this.dialog.push("Kyle...");
  this.dialog.push("Don't do this Kyle!");
  this.dialog.push("I am warning you Kyle!");
}

Kyle.prototype = new SuperHero();
Kyle.prototype.constructor = Kyle;
function Kyle()
{
  this.dialog.push("What Cartman?!");
  this.dialog.push("Don't tell me what to do!");
  this.dialog.push("You can't stop me!");
}

var cartman = new Cartman();
var kyle = new Kyle();

for(var i = 0; i < 3; i++){
  cartman.talks();
  kyle.talks();
}
