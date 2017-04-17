
var SuperHero = function(name, power){
    this.name = name;
    this.power = power;
    this.hp = 100;
};

SuperHero.prototype = {
    setPower: function(power){
        this.power = power;
    },
    setName: function(name){
        this.name = name;
    },
    getHit: function(amt){
        this.hp -= amt;
        console.log(this.name+" hit!");
        console.log(this.name+" HP: "+this.hp);
    },
    attack: function(other, amt){
        console.log(this.name+" uses "+this.power+" against "+other.name+"!");
        other.getHit(amt);
    }
};

var vegeta = new SuperHero(name="Vegeta", power="Galick Gun");
var goku = new SuperHero();
goku.setName("Goku");
goku.setPower("Kamehameha");
goku.attack(vegeta, 25);
vegeta.attack(goku, 50);
