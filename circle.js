// var Circle = ...
var Circle = function(radius){
  this.radius = radius;
  this.getArea = function(){
    return 2*this.radius*Math.PI
  };
};
