module.exports = function(server) {
  var carQuery = server.where({ type: 'car' });
  var bulbQuery = server.where({type: 'huebulb', name: 'Hue Bulb Hue Downlight 1'});
  server.observe([carQuery, bulbQuery], function(car, bulb){
    car.streams.speed.on('data', function(m) {
      if(m.data > 100) {
        if (bulb.available('turn-on')) {
          bulb.call('turn-on');
          bulb.call('color', '#ff0000');
        }
      } else {
        if (bulb.available('turn-off')) {
          bulb.call('turn-off');
        }
      }
    });
  });}
