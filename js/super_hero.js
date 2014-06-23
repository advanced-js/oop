//SuperHero Class
var SuperHero = function (name) {
    //properties
    this.name = name;
    this.strength = 100;
    this.ability;
};

//New Instances
var tony = new SuperHero('IronMan');
tony.ability = "build weapons";

var clark = new SuperHero('SuperMan');
clark.ability = "fly";

var helen = new SuperHero('ElastiGirl');
helen.ability = "stretch";

//Instance Method
SuperHero.prototype.useAbility = function () {
    this.strength += 10;
}

//Instance Method
SuperHero.prototype.attacked = function () {
    this.strength -= 10;
}

//Instance Method
SuperHero.prototype.attacks = function (SuperHero2)
{
    this.strength -= 5;
    SuperHero2.attacked();
}

//Function Calls
clark.attacks(tony);
alert("Superman's strength is: " + clark.strength + " Ironman's strength is: " + tony.strength);