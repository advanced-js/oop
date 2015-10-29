var SuperHero = function (name, color) {
    this.name = name; 
    this.isHero = true; 
    this.powerLevel = 10;
    this.color = color; 

    // construct/create HTML element representing superhero
    var superHeroElement = '<div id="' + name + '" class="superhero" style="background: ' + color + ';">' + name + '</div>'; 
    $('#SuperHeroWrapper').append(superHeroElement); 
};

SuperHero.prototype.attack = function (enemy) {
    console.log('Kick! Punch! Bam! Zing!'); 
    enemy.powerLevel--; 
    $('#' + enemy.name).css('height', 500*(enemy.powerLevel*.1) + 'px'); 

    if(enemy.powerLevel == 0) { 
        enemy.isHero = false; 
    }
};

SuperHero.prototype.powerUp = function () {
    this.powerLevel++; 
    $('#' + this.name).css('height', 500*(this.powerLevel*.1) + 'px'); 

    if(this.powerLevel == 0) { 
        this.isHero = false; 
    }
};


// begin when ready
$(document).ready(function() { 
    var batman = new SuperHero('batman', 'black'); 
    var superman = new SuperHero('superman', 'blue'); 

    batman.attack(superman); 
    batman.attack(superman); 

    superman.attack(batman); 

    batman.powerUp(); 

    console.log(batman); 
    console.log(superman); 
}); 