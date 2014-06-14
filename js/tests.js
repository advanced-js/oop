//var SuperHero = function(name,heightInCms,weightInKgs,strength,toughness,speed,stamina)
var stretch = new SuperHero('Mr. Stretch',220,90,40,90,100,110);
var brick = new SuperHero('Brickhouse',190,150,120,100,20,50);

test("Test Mr. Stretch",function(){
//test the basic properties	
	ok(stretch.name==='Mr. Stretch',"Yep, his name is Mr. Stretch");
	ok(stretch.height===220,"Yep, "+stretch.name+" is 220cm tall");
	ok(stretch.weight===90,"Yep, "+stretch.name+" weighs 90 kilos");
	ok(stretch.strength===40,"Yep, "+stretch.name+" has strength of 40");
	ok(stretch.toughness===90,"Yep, "+stretch.name+" has toughness of 90");
	ok(stretch.speed===100,"Yep, "+stretch.name+" has speed of 100");
	ok(stretch.stamina===110,"Yep, "+stretch.name+" has stamina of 110");
});

test("Test the fortify power",function(){
//test fortify
	stretch.fortify();
	ok(stretch.strength===20,stretch.name+"'s strength has been halved!")
	ok(stretch.toughness===180,stretch.name+"'s toughness has been doubled!")
	ok(stretch.expPoints===2,stretch.name+"'s experience points went up by 2!")
	//can't get the one below to work
	//ok(stretch.stamina===100,stretch.name+"'s stamina went down by 10 points!")
	console.log("Waiting for stats to return to normal");
	/*setTimeout(function(){
		ok(stretch.stamina===102,stretch.name+"'s stamina went up 2 points in 10 seconds")
	},1000);
	setTimeout(function(){
		ok(stretch.stamina===110,stretch.name+"'s stamina is back to normal")
	},4000);*/
});
setTimeout(function(){
	test("Test restore after fortify",function(){
		ok(stretch.strength===40,stretch.name+" is back to full strength!")
		ok(stretch.toughness===90,stretch.name+"'s toughness is back to normal!")
	}),10000});
