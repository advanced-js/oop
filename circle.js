var Circle = function(radius){
  this.radius = radius;
};

Circle.prototype.getArea = function(){
  var area = Math.PI * this.radius * this.radius;
  return Math.round(area*100) / 100;
};
