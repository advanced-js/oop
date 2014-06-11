//v3
var SuperHero = function(name) {
	//private
	var health = 100;
	var that = this;

	//public
	this.superfriends = [];
	this.name = name || "Captain Anonymous";
	this.getHealth = function() 	{return health;}	//neither this nor that. hmmm.
	this.addHealth = function(num) 	{return (health += parseInt(num));}

	this.addFriend = function(friend)	{
		friend.addHealth( parseInt(0.1 * friend.getHealth()) );
		this.addHealth( parseInt(0.1 * health) );
		friend.superfriends.push(this);
		return this.superfriends.push(friend);
	}
	this.removeFriend = function(friend)	{
		friend.addHealth( parseInt(-0.1 * friend.getHealth()) );
		this.addHealth( parseInt(-0.1 * health) );
		for (var i=0; i<friend.superfriends.length; i++) {
			if (friend.superfriends[i]===this) {friend.superfriends.splice(i,1); break;}
		}
		for (var i=0; i<this.superfriends.length; i++) {
			if (this.superfriends[i]===friend) {this.superfriends.splice(i,1); break;}
		}
		return this.superfriends.length;
	}
}


var AquaMan = function() {
	this.name = "Aquaman";
};
AquaMan.prototype = new SuperHero();
AquaMan.prototype.speakToSeaCreatures = function() {
	return "Look, I'm speaking to sea creatures with my mind! Freaky!!!";
}


var WonderTwins = function() {
	this.name = "Wonder Twins";
};
WonderTwins.prototype = new SuperHero();
WonderTwins.prototype.wonderTwinPowersActivate = function() {
	return "Shape of an eagle! Form of a bucket of water!";
}