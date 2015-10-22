
var SuperHero = function(){};

SuperHero.prototype = {
    setPower: function(power){
        this.power = power;
    },
    setName: function(name){
        this.name = name;
    },
    setEnemy: function(enemy){
        this.enemy = enemy;
    }
};

var sh = new SuperHero();
sh.setPower("foo");
sh.setName("bar");
sh.setEnemy("goo");
console.log(sh);
