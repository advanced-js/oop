var SuperHero = function (name) {
    this.name = name; 
    this.superpower = 'Flying'; 
    this.hurt = false; 
};


// class methods
SuperHero.prototype.attack = function (enemy) {
    console.log('Kick! Punch! Bam! Zing!'); 
    enemy.hurt = true; 
};

SuperHero.prototype.giveMotivationalSpeech = function () {
    console.log('The earth is safe again!'); 
};


// instantiate
var batman = new SuperHero('batman'); 
var superman = new SuperHero('superman'); 

superman.attack(batman); 

console.log(superman); 
console.log(batman); // batman is hurt!