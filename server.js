var zetta = require('zetta');
var CAR = require('zetta-car-mock-driver');
var Hue = require('zetta-hue-driver');
var carSpeedAlert = require('./apps/car_speed_alert');

zetta()
.name('Anil Sagar')
.use(CAR)
.use(Hue)
.use(carSpeedAlert)
.link('http://hello-zetta.herokuapp.com/')
.listen(1337, function(){
  console.log('Zetta is running at http://127.0.0.1:1337');
});
