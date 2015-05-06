// var SuperHero = ...

var Superhero = function( name, strength, loveInterest, isLoveRequited, catchphrase) {
  this.name = name;
  this.strength = strength;
  this.loveInterest = loveInterest;
  this.isLoveRequited = isLoveRequited;
  this.catchphrase = catchphrase;

  this.fightSceneAgainst = function(fightAgainst) {
    var winFightStr = this.name + " punches " + fightAgainst + " and shouts, \"" + this.catchphrase + "\"";
    var loseFightStr = "Oh no, " + this.name + "\'s strength is too low. " + fightAgainst + " punches them and runs off with " + this.loveInterest + ".";
    if (this.strength > fightAgainst.strength) {
      fightAgainst.strength--;
      return winFightStr;
    } else {
      this.strength--;
      return loseFightStr;
    }
  };

  this.LoveScene = function() {
    var loveRequitedStr = this.name + " approaches " + this.loveInterest + " and (after obtaining consent) kisses them, and whispers \"" + this.catchphrase + ".\"";
    var loveUnrequitedStr = this.name + "looks lovingly at " + this.loveInterest + ", dreaming of the day they can be together.";
    return this.isLoveRequited ? loveRequitedStr : loveUnrequitedStr;
  };
};

var Batman = function(){};

Batman.prototype = Object.create(Superhero.prototype);

Batman.prototype.numParents = function() {
  return 0;
};

Batman.prototype.Director = function(year) {
  if (year > 2005) {
    return "Christopher Nolan";
  } if ( 1989 < year < 1995) {
    return "Tim Burton";
  }
};