var SuperHero = function (name, human) {
  var self = this;
  self.name = name;
  self.human = human;
  self.lifeForce = 100;
  self.powers = [];
  self.alive = true;
  self.immortal = false;

  self.superPunch = function(target) {
    console.log('* ' + self.name + ' delivers a super punch to ' + target.name + '!! *');
    if (target.lifeForce >= 10) {
      target.lifeForce -= 10;
      console.log(target.name + ' says: "Damn you, ' + self.name + ', my life force is now only ' + target.lifeForce + '! But I can\'t be thwarted that easily!"');
    } else {
      target.alive = false;
      self.powerUp(50);
      self.victoryMsg(target);
    }
  }

  self.deathBlow = function(target) {
    console.log('* ' + self.name + ' delivers a powerful DeathBlow to ' + target.name + '!! *');
    if (!target.mortal) {
      target.alive = false;
      self.victoryMsg(target);
    }
  }

  self.victoryMsg = function(target) {
    console.log(target.name + ' has been killed! ' + self.name + ' is all powerful!');
  }
  self.powerUp = function(val) {
    self.lifeForce += val;
  }
}

var superMan = new SuperHero('superman', false );

var doctorEvil = new SuperHero('doctorevil', true);
console.debug(superMan);

superMan.superPunch(doctorEvil);
superMan.superPunch(doctorEvil);
superMan.deathBlow(doctorEvil);
