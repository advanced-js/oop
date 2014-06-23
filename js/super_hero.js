//SuperHero Class
var SuperHero = function (name) {
    //properties
    this.name = name;
    this.strength = 100;
    this.ability;

    //Class Method
    this.getInfo = function () {
        alert(this.name + ' is able to ' + this.ability + ' and has strength of ' + this.strength + '%');
    }
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
SuperHero.prototype.getsHit = function () {
    this.strength -= 5;
}

//Function Calls
clark.useAbility();
helen.getInfo();
