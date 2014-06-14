
var SuperHero = function(name,heightInCms,weightInKgs,strength,toughness,speed,stamina){
	this.name = name;
	this.height = heightInCms;
	this.weight = weightInKgs;
	this.strength = strength;
	this.toughness = toughness;
	this.speed = speed;
	this.stamina = stamina;
	this.level = 1;
	this.expPoints = 0;
	
	//doubles toughness and halves strength for 1 minute. 
	this.fortify = function(){
		var startStrength = this.strength;
		var startToughness = this.toughness;
		this.strength = startStrength/2;
		this.toughness = startToughness*2;
		//this.reduceStamina(10);
		this.incExpPoints(2);

			console.log("new strength is: "+this.strength);console.log("new toughness is: "+this.toughness);		
		setTimeout(function(){
			this.strength = startStrength;
			this.toughness = startToughness;
				console.log("new strength is: "+this.strength);console.log("new toughness is: "+this.toughness);		
		},6000);
		
	};

	//Level up when called, up the stats, and empty exp points
	this.levelUp = function(){
		this.level += 1;
		this.expPoints = 0;
		this.strength += this.level;
		this.toughness += this.level;
		this.speed += this.level;
		this.stamina += this.level;

	};
	//Increment experience points by arg
	this.incExpPoints = function(r){
		this.expPoints += r;
	}
	//Decerement stamina by arg, and restore it by 1 point every 5 seconds
	this.reduceStamina = function(r){
		var startingStamina = this.stamina;
		this.stamina -= r;
		console.log("stamina is reduced to: "+this.stamina);
		var interval = setInterval(function(){
				this.stamina++;
				console.log("stamina is: "+this.stamina);
				console.log("startingstamina is: "+startingStamina);
				if (this.stamina===startingStamina){
					clearInterval(interval);
				}
			},5000);
		};
	};

