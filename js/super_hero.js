var SuperHero = function() {
    /*
     * the super hero's age
    */
    this.age =  20;
    /*
     * the super hero's super power
    */
    this.superPower = '';
    /*
     * the super hero's kryptonite
    */
    this.kryptonite = '';
    /*
     * the number of people a super hero has saved
    */
    this.peopleSaved = 0;
    /*
     * the state of the super hero's health
    */
    this.health = 100;

    /*
     * returns the super hero's age
    */
    this.getAge = function() {
        return this.age;
    };

    /*
     * changes the super hero's age
    */
    this.setAge = function(age) {
        this.age = age;
    };

    /*
     * returns the super hero's health
    */
    this.getHealth = function() {
        return this.health;
    };

    /*
     * the super hero's super power
    */
    this.getSuperPower = function() {
        return this.superPower;
    };

    /*
     * change the super hero's super power
    */
   this.setSuperPower = function(power) {
        this.superPower = power;
    };

    /*
     * indicates a super hero has saved someone by increasing the count of people saved
    */
    this.savePerson = function() {
        this.peopleSaved++;
    };

    /*
     * returns the number of people the super hero saved
    */
    this.getPeopleSaved = function() {
        return this.peopleSaved;
    };

    /*
     * reduces an attacked superHero's health
    */
    this.attack = function(superHero) {
        superHero.health--;
    };

};
