"use strict";
 var SuperHero = SuperHero || {} ;

 SuperHero = function(){
 	
 	this.name 		=  '';
 	this.mission 	=  '';
 	this.energy 	= 5;
 	this.fightLevel = 0;
 	this.attack 	= function(combatant1, combatant2){
 		combatant1.energy = combatant1.energy - combatant1.fightLevel; 
 		combatant2.energy ++;
 	};
 };



var DrMohinderSuresh = new SuperHero();
	DrMohinderSuresh.mame = 'Dr. Modinder Suresh';
	DrMohinderSuresh.fightLevel = 1;
	DrMohinderSuresh.energy = 5;
console.log(DrMohinderSuresh);

var ClaireBennet = new SuperHero();
 	ClaireBennet.name = ' Claire Bennet';
 	ClaireBennet.energy = 5;
   
   	DrMohinderSuresh.attack(DrMohinderSuresh, ClaireBennet);
   	console.log('Current engey for '+ DrMohinderSuresh.name + ' is ' + DrMohinderSuresh.energy); 

 



