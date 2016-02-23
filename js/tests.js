QUnit.test("SuperHuman basics", function(assert) {
    var hulk = new SuperHuman("The Incredible Hulk","has super strength");
    assert.propEqual(hulk,{
        name:"The Incredible Hulk",
        lifeForce:100,
        power:"has super strength",
        powerLevel:2
    },"Incredible Hulk is okay");

    var maleficient = new SuperHuman("Maleficient","can fly");
        assert.propEqual(maleficient,{
        name:"Maleficient",
        lifeForce:100,
        power:"can fly",
        powerLevel:2
    },"Maleficient is okay");

    assert.notStrictEqual(hulk,maleficient,"The Incredible Hulk is not Maleficient");
});

QUnit.test("SuperHero details", function(assert) {
    var bo = new SuperHero("Bo","succubus");
    assert.propEqual(bo,{
    	name:"Bo",
    	heroType:"succubus",
    	lifeForce:100,
    	enemies:[],
    	power:"feeds on the energy of humans",
    	powerLevel:5
    },"Bo is okay");

    var tamsin = new SuperHero("Tamsin","valkyrie");
    assert.propEqual(tamsin,{
    	name:"Tamsin",
    	heroType:"valkyrie",
    	lifeForce:100,
    	enemies:[],
    	power:"chooses the slain",
    	powerLevel:4
    },"Tamsin is okay");

    var dyson = new SuperHero("Dyson","shape-shifter");
    assert.propEqual(dyson,{
    	name:"Dyson",
    	heroType:"shape-shifter",
    	lifeForce:100,
    	enemies:[],
    	power:"changes into a wolf",
    	powerLevel:3
    },"Dyson is okay");

    var hale = new SuperHero("Hale","siren");
    assert.propEqual(hale,{
    	name:"Hale",
    	heroType:"siren",
    	lifeForce:100,
    	enemies:[],
    	power:"has an enchanted voice",
    	powerLevel:2
    },"Hale is okay");

 	assert.notStrictEqual(bo,tamsin,"Bo is not Tamsin");
 	assert.notStrictEqual(tamsin,dyson,"Tamsin is not Dyson");
 	assert.notStrictEqual(dyson,hale,"Dyson is not Hale");
 	assert.notStrictEqual(hale,bo,"Hale is not Bo");
});

QUnit.test("SuperHero enemies", function(assert) {
	var bo = new SuperHero("Bo","succubus");
	bo.addEnemy("Tamsin");
	assert.strictEqual(bo.isEnemy("Tamsin"),true,"Tamsin is Bo's enemy");
	bo.addEnemy("Hale");
	assert.deepEqual(bo.enemies,["Tamsin","Hale"],"Tamsin and Hale are Bo's enemies");
	assert.strictEqual(bo.isEnemy("XXX"),false,"XXX is not Bo's enemy");
	bo.removeEnemy("Tamsin");
	assert.strictEqual(bo.isEnemy("Tamsin"),false,"Tamsin is now not Bo's enemy");
	assert.strictEqual(bo.isEnemy("Hale"),true,"Hale is still Bo's enemy");
	bo.removeEnemy("Hale");
	assert.deepEqual(bo.enemies,[],"Bo has no enemies");
});

QUnit.test("SuperHero intro", function(assert) {
	var bo = new SuperHero("Bo","succubus");
	assert.strictEqual(bo.intro(),"My name is Bo, and I'm a succubus","Bo's intro is okay");
});

QUnit.test("SuperHero attack", function(assert) {
	var bo = new SuperHero("Bo","succubus");
	var tamsin = new SuperHero("Tamsin","valkyrie");
	tamsin.attack(bo);
	assert.strictEqual(bo.lifeForce,100,"Bo's life force is 100");
	assert.strictEqual(tamsin.lifeForce,80,"Tamsin's life force is 80");
	bo.attack(tamsin);
	bo.attack(tamsin);
	assert.strictEqual(bo.lifeForce,100,"Bo's life force is 100");
	assert.strictEqual(tamsin.lifeForce,40,"Tamsin's life force is 40");
	bo.attack(tamsin);
	assert.strictEqual(tamsin.isAlive(),true,"Tamsin is alive");
	bo.attack(tamsin);
	assert.strictEqual(tamsin.isAlive(),false,"Tamsin is dead");	
});
