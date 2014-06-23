//SuperClass
var SuperHero = function(){
    this.strength = 100;                                    //properties
};

SuperHero.prototype.ability = function () {                 //Method 1: returns ability
    return undefined;
};

SuperHero.prototype.type = function () {                    //Method 2: returns type
    return undefined;
};

SuperHero.prototype.vulnerability = function () {           //Method 3: returns vulnerability
    return undefined;
};

 
//SuperMan Subclass function
var SuperMan = function () { };
SuperMan.prototype = new SuperHero();

SuperMan.prototype.ability = function () {
    return "Super Strength";
};

SuperMan.prototype.type = function () {
    return "Alien";
};

SuperMan.prototype.vulnerability = function () {
    return "Kryptonite";
};

SuperMan.kryptonized = function () {
    this.strength = 1;                                      //Kryptonite gravely reduces SuperMan's strength
};

var SuperGirl = new SuperMan();

//IronMan Subclass function
var IronMan = function () { };
IronMan.prototype = new SuperHero();
IronMan.prototype.ability = function () {
    return "Technologically Savvy with an array of weapons";
};

IronMan.prototype.type = function () {
    return "Human";
};

IronMan.prototype.vulnerability = function () {
    return "Weak Heart";
};

IronMan.artificialHeartFailure = function () {
    this.strength = 1;                                      //Artificial Heart Failure gravely reduces IronMan's strength (unless he immediately replaces it)
};

var WarMachine = new IronMan();

//Hulk Subclass function
var Hulk = function () { };
Hulk.prototype = new SuperHero();
Hulk.prototype.ability = function () {
    return "Bio-engineered Weapon";
};

Hulk.prototype.type = function () {
    return "Genetically engineered being";
};

Hulk.prototype.vulnerability = function () {
    return "Human form";
};

Hulk.brutallyAttackedInHumanForm = function () {
    this.strength = 1;                                      //Brutally attacking Hulk will reduce his strength, though he may regenerate easily as Hulk
};

var SheHulk = new Hulk();

//mySuperHero Superclass function
var mySuperHero = new SuperHero();
