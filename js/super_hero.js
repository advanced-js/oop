var SuperHero = function(name, profession, timeOfAction, outfit, coolness) {
  this.name = name;
  this.profession = profession;
  this.timeOfAction = timeOfAction;
  this.outfit = outfit;
  this.coolness = coolness;
};

var Batman = new SuperHero('Batman', 'Rich guy', 'night', 'batsuit', 0);
var Ironman = new SuperHero ('Ironman', 'Arms dealer', 'day', 'iron suit', 0);

SuperHero.prototype.getCoolnessFactor = function getCoolnessFactor(target) {
  console.log(target.name + ' has a coolness factor of ' + target.coolness);
};

SuperHero.prototype.theCoolest = function theCoolest(target) {
  if (this.coolness > target.coolness) {
    console.log("It has been determined that " + this.name + " is the coolest!");
  } else {
    console.log("It has been determined that " + target.name + " is the coolest!");
  }
}

SuperHero.prototype.compareCareers = function compareCareers(target) {
  if (this.profession === 'Rich guy') {
    console.log('Billionaires who appear to do nothing rule! ' + this.name + ' is cooler.');
    this.coolness += 5;
    target.coolness -= 5;
  } else if (this.profession === 'Arms dealer') {
    console.log('Sorry ' + this.name + ', ' + target.name + 'wins this one.  Arms dealers are awful.');
    this.coolness -= 5;
    target.coolness += 5;
  }
};

SuperHero.prototype.compareActivity = function compareActivity(target) {
  if (this.timeOfAction === 'night') {
    console.log(this.name + " does stuff in the " + this.timeOfAction + ", that's way cool.");
    this.coolness += 5;
    target.coolness -= 5;
  } else if (this.timeOfAction === 'day') {
    console.log("Daytime superhero action?  Idk, sounds kinda lame, " + this.name + ".");
    this.coolness -= 5;
    target.coolness += 5;
  }
};

SuperHero.prototype.compareOutfit = function compareOutfit(target) {
  if (this.outfit === 'batsuit') {
    console.log("The " + this.outfit + " is ok, but " + target.name + "'s is a bit cooler.");
    this.coolness -= 5;
    target.coolness += 5;
  } else if (this.outfit === "iron suit") {
    console.log("Yeah, the " + this.outfit + " is pretty darn cool.  You win this one, " + this.name + "!");
    this.coolness += 5;
    target.coolness -= 5;
  }
};

Batman.compareCareers(Ironman);
Batman.compareActivity(Ironman);
Ironman.compareOutfit(Batman);

Batman.getCoolnessFactor(Batman);
Ironman.getCoolnessFactor(Ironman);

Batman.theCoolest(Ironman);

