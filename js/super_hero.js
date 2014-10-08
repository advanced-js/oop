var SuperHero = function() {
    this.age =  20;
    this.superPower = '';
    this.kryptonite = '';
    this.peopleSaved = 0;


    this.getAge = function() {
        return this.age;
    };

    this.setAge = function(age) {
        this.age = age;
    }

    this.getSuperPower = function() {
        return this.superPower;
    };

   this.setSuperPower = function(power) {
        this.superPower = power;
    };

    this.savePerson = function() {
        this.peopleSaved++;
    };

    this.getPeopleSaved = function() {
        return this.peopleSaved;
    };


};
