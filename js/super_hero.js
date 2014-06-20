
var SuperHero = function(name,heightInCms,weightInKgs,strength,toughness,speed,stamina,health){
	this.name = name;
	this.height = heightInCms;
	this.weight = weightInKgs;
	this.strength = strength;
	this.toughness = toughness;
	this.speed = speed;
	this.stamina = stamina;
	this.health = health;
	this.level = 1;
	this.expPoints = 0;
	};
//doubles toughness and halves strength for 1 minute. 
SuperHero.prototype.fortify = function(){
	var startStrength = this.strength;
	var startToughness = this.toughness;
	this.strength = startStrength/2;
	this.toughness = startToughness*2;
	this.reduceStamina(5);
	this.incExpPoints(2);
		console.log("new strength is: "+this.strength);console.log("new toughness is: "+this.toughness);
	var that = this;
	setTimeout(function(){
		that.strength = startStrength;
		that.toughness = startToughness;
			console.log("new strength is: "+that.strength);console.log("new toughness is: "+that.toughness);		
	},60000);	
};
//Level up when called, up the stats, and empty exp points
SuperHero.prototype.levelUp = function(){
	this.level += 1;
	this.expPoints = 0;
	this.strength += this.level;
	this.toughness += this.level;
	this.speed += this.level;
	this.stamina += this.level;
	
};
//Increment experience points by arg
SuperHero.prototype.incExpPoints = function(r){
	this.expPoints += r;
}
//Decrement stamina by arg, and restore it by 1 point every 5 seconds
SuperHero.prototype.reduceStamina = function(r){
	var startingStamina = this.stamina;
	this.stamina -= r;
	console.log("stamina is reduced to: "+this.stamina);
	var that = this;
	var interval = setInterval(function(){
			that.stamina++;
			console.log(this.name+"'s stamina is: " + that.stamina);
			if (that.stamina===startingStamina){
				clearInterval(interval);
			};
		},5000);
}

//reduce health by arg, and start restoring
SuperHero.prototype.damage = function(amount){
	var startingHealth = this.health;
	this.health -= amount;
	this.restoreHealth(startingHealth);
}

//increase health by 1 point every 7 seconds
SuperHero.prototype.restoreHealth = function(maxHealth){
	var that = this;
	var interval = setInterval(function(){
		that.health++;
		console.log(this.name+"'s health is: "+that.health);
		console.log(this.name+"'s startingHealth is: "+maxHealth);
		if (that.health===maxHealth){
			clearInterval(interval);
		}
	},7000);
}
SuperHero.prototype.attack = function(enemy,attackStrength){
	enemy.damage(attackStrength);
	this.reduceStamina(attackStrength);
	console.log(this.name + " attacked "+enemy.name+"! "+enemy.name+"'s health is now: "+enemy.health+"and "+this.name+"'s stamina is now: "+this.stamina);
	}

