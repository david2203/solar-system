var jupiterElipse = (function() {

    function getPosition(settings, ellapsedTime) {
      var angle = getAngle(settings, ellapsedTime);
      return {
        x: Math.round(settings.center.x + settings.radius * Math.cos(angle) * 2),
        y: Math.round(settings.center.y + settings.radius * Math.sin(angle))
      };
    }
  
    function getAngle(settings, ellapsedTime) {
      return ellapsedTime / settings.interval * 2 * Math.PI * settings.direction - settings.startPositionRad;
    }
  
    function start(id, settings) {
    
      const jupiter = document.querySelector(".jupiter");
  
      
      var el = document.getElementById(id),
        startTime = (new Date()).getTime(),
        width = el.offsetWidth,
        height = el.offsetHeight;
      if (el['#rev:tm'] !== null) stop(id);
      el.style.position = settings.cssPosition || 'absolute';
      if (!settings.startPositionRad) settings.startPositionRad = settings.startPositionDeg / 180 * Math.PI;
      el['#rev:tm'] = setInterval(function() {
        var pos = getPosition(settings, (new Date()).getTime() - startTime);
        
        jupiter.style.zIndex = pos.y;
        el.style.left = (pos.x - Math.round(width / 2)) + 'px';
        el.style.top = (pos.y - Math.round(height / 2)) + 'px';
      }, settings.updateInterval);
      if (settings.iterations > -1) setTimeout(function() {
        stop(id);
      }, settings.iterations * settings.interval);
    }
  
    function stop(id) {
      var el = document.getElementById(id);
      if (el['#rev:tm'] === null) return;
      clearInterval(el['#rev:tm']);
      el['#rev:tm'] = null;
    }
  
    return {
      start: start,
      stop: stop
    };
  
  })();

jupiterElipse.start('moveJupiter', {
  radius:483,
  center: {
    x: centerx,
    y: centery
  },
  // time in milliseconds for one revolution
  interval: 42700,
  // direction = 1 for clockwise, -1 for counterclockwise
  direction: 1,
  // number of times to animate the revolution (-1 for infinite)
  iterations: -1,
  // startPosition can be a degree angle
  // (0 = right, 90 = top, 180 = left, 270 = bottom)
  startPositionDeg: 90,
  // how often (in milliseconds) the position of the
  // circle should be attempted to be updated
  updateInterval: 0.00001
 
});
