// var SuperHero = ...
var SuperHero = function(name) {
    this.name   = name;
    this.hp     = 100;
    this.str    = 10;
    this.dex    = 10;
    this.def    = 10;
};

SuperHero.prototype.transform = function(multiplier) {
    this.hp     *= multiplier;
    this.str    *= multiplier;
    this.dex    *= multiplier;
    this.def    *= multiplier;
};

SuperHero.prototype.attack = function(target) {
    if (target.str <= 100) {
        console.log("Can't attack civilian!");
    } else {
        target.hp -= this.str;
        console.log(this.name + ' took a hit, losing ' + this.str + ' hp.');
    }
};

var FlightHero = function(name) {
    this.name       = name;
    this.flight     = true;
};

FlightHero.prototype = new SuperHero("");

var WaterHero = function(name) {
    this.name               = name;
    this.waterbreathing     = true;
};