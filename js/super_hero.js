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
      var targetMission = (target.mission ? ' to ' + target.mission + ' ' : '');
      console.log(target.name + ' says: "Damn you, ' + self.name + ', my life force is now only ' + target.lifeForce + '! But my mission' + targetMission + 'can\'t be thwarted that easily!"');
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


/* Let's go! */

var SuperVillain = function (name, human, mission) {
  var self = this;
  SuperHero.call(this, name, human);
  self.mission = mission;
}

var superMan = new SuperHero('superman', false );

var doctorEvil = new SuperVillain('doctorevil', true, 'take over the world');

superMan.superPunch(doctorEvil);
superMan.superPunch(doctorEvil);
superMan.deathBlow(doctorEvil);
