var SuperHero = function() {
    /*
     * the super hero's age
    */
    SuperHero.prototype.age =  20;
    /*
     * the super hero's super power
    */
    SuperHero.prototype.superPower = '';
    /*
     * the super hero's kryptonite
    */
    SuperHero.prototype.kryptonite = '';
    /*
     * the number of people a super hero has saved
    */
    SuperHero.prototype.peopleSaved = 0;
    /*
     * the state of the super hero's health
    */
    SuperHero.prototype.health = 100;

    /*
     * returns the super hero's age
    */
    SuperHero.prototype.getAge = function() {
        return SuperHero.prototype.age;
    };

    /*
     * changes the super hero's age
    */
    SuperHero.prototype.setAge = function(age) {
        SuperHero.prototype.age = age;
    };

    /*
     * returns the super hero's health
    */
    SuperHero.prototype.getHealth = function() {
        return SuperHero.prototype.health;
    };

    SuperHero.prototype.setHealth = function(health) {
        SuperHero.prototype.health = health;
    };

    /*
     * the super hero's super power
    */
    SuperHero.prototype.getSuperPower = function() {
        return SuperHero.prototype.superPower;
    };

    /*
     * change the super hero's super power
    */
   SuperHero.prototype.setSuperPower = function(power) {
        SuperHero.prototype.superPower = power;
    };

    /*
     * indicates a super hero has saved someone by increasing the count of people saved
    */
    SuperHero.prototype.savePerson = function() {
        SuperHero.prototype.peopleSaved++;
    };

    /*
     * returns the number of people the super hero saved
    */
    SuperHero.prototype.getPeopleSaved = function() {
        return SuperHero.prototype.peopleSaved;
    };

    SuperHero.prototype.setPeopleSaved = function(people) {
        SuperHero.prototype.peopleSaved = SuperHero.prototype.peopleSaved + people;
    };

    /*
     * reduces an attacked superHero's health
    */
    SuperHero.prototype.attack = function(superHero) {
        superHero.setHealth(superHero.getHealth() - 1);
    };

};

HealerHero.prototype = new SuperHero();
HealerHero.prototype.constructor=HealerHero;

function HealerHero() {

    HealerHero.prototype.heal = function() {
        HealerHero.prototype.setHealth(100);
    };

};

SuperVillian.prototype = new SuperHero();
SuperVillian.prototype.constructor = SuperVillian;

function SuperVillian () {
    SuperVillian.prototype.destroy = function(people) {
        SuperVillian.prototype.setPeopleSaved(people * -1);
    };
};

