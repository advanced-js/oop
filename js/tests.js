//var SuperHero = function(name,heightInCms,weightInKgs,strength,toughness,speed,stamina,health)
var stretch = new SuperHero('Mr. Stretch',220,90,40,90,100,110,100);
var brick = new SuperHero('Brickhouse',190,150,120,100,20,50,100);


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

test("Test a fight",function(){
	stretch.attack(brick,15);
	ok(stretch.stamina===95,"Yep, stamina went down 15");
	ok(brick.health===85,"Yep, health went down 15");
})

QUnit.asyncTest("Test the fortify power (and asynchronous test)", function(){
	stretch.fortify();

	ok(stretch.strength===20,stretch.name+"'s strength has been halved!")
	ok(stretch.toughness===180,stretch.name+"'s toughness has been doubled!")
	ok(stretch.expPoints===2,stretch.name+"'s experience points went up by 2!")
	ok(stretch.stamina===90,stretch.name+"'s stamina went down by 10 points!")
	setTimeout(function() {
		ok(stretch.stamina===92,stretch.name+"'s stamina went up 2 points in 10 seconds");
    	QUnit.start();
  	}, 10000);
});
test("Test level up",function(){
	stretch.levelUp();
	ok(stretch.level===2,"Level up to 2");
	ok(stretch.expPoints === 0,"Experience points back down to 0");
	ok(stretch.strength === 42,"Strength increased to 42");
	ok(stretch.toughness === 92,"toughness increased to 92");
	ok(stretch.speed === 102,"speed increased to 92");
	ok(stretch.stamina === 112,"stamina increased to 92");
})