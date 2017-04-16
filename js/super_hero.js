var SuperHero = function() {
    /*
     * the super hero's age
    */
    this.age =  20;
    /*
     * the super hero's super power
    */
    this.superPower = 'muggle';
    /*
     * the super hero's kryptonite
    */
    this.kryptonite = 'fire';
    /*
     * the number of people a super hero has saved
    */
    this.peopleSaved = 0;
    /*
     * the state of the super hero's health
    */
    this.health = 100;
};

/*
 * returns the super hero's age
*/
SuperHero.prototype.getAge = function() {
    return this.age;
};

/*
 * changes the super hero's age
*/
SuperHero.prototype.setAge = function(age) {
    this.age = age;
};

/*
 * returns the super hero's health
*/
SuperHero.prototype.getHealth = function() {
    return this.health;
};

SuperHero.prototype.setHealth = function(health) {
    this.health = health;
};

/*
 * the super hero's super power
*/
SuperHero.prototype.getSuperPower = function() {
    return this.superPower;
};

/*
 * change the super hero's super power
*/
SuperHero.prototype.setSuperPower = function(power) {
    this.superPower = power;
};

/*
 * indicates a super hero has saved someone by increasing the count of people saved
*/
SuperHero.prototype.savePerson = function() {
    this.peopleSaved++;
};

/*
 * returns the number of people the super hero saved
*/
SuperHero.prototype.getPeopleSaved = function() {
    return this.peopleSaved;
};

SuperHero.prototype.setPeopleSaved = function(people) {
    this.peopleSaved = this.peopleSaved + people;
};

/*
 * reduces an attacked superHero's health
*/
SuperHero.prototype.attack = function(superHero) {
    superHero.setHealth(superHero.getHealth() - 1);
};

var HealerHero = function() {
    this.superPower = 'healing';
};
HealerHero.prototype = new SuperHero();


HealerHero.prototype.heal = function() {
    this.setHealth(100);
};

var SuperVillian = function() {
    this.superPower = 'destroying people';
};
SuperVillian.prototype = new SuperHero();


SuperVillian.prototype.destroy = function(people) {
    this.setPeopleSaved(people * -1);
};

