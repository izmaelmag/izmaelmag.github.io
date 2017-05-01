/*
  Made by Caspian Seagull
  Source: http://codepen.io/dead_seagull/pen/NjpvdO
  ---
  Feel free to use if you want
*/
(function () {
  var canvas = document.querySelector('#circles'),
      ctx = canvas.getContext('2d'),
      PI = Math.PI;

  var R1 = window.innerHeight * 1.1,
      R2 = R1 / 3,
      COUNT = 12,
      SPEED = 0.1,
      ANGLE = 0,
      COLOR = '#ccc',
      CENTER = { x: window.innerWidth, y: window.innerHeight * 2 },
      ANGLEDIFF = 360 / COUNT * (PI / 180);

  function init() {

    ctx.canvas.width = window.innerWidth * 2;

    ctx.canvas.height = window.innerHeight * 2;

    window.requestAnimationFrame(draw);
  }
  function draw() {

    ctx.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);

    ANGLE -= PI / 360 * SPEED * 0.5; // Угол в радианах

    drawCenter(ctx);

    var COORDS = getCoordinates();

    drawFirstLevelPoints(COORDS.mainPoints);
    drawSecondLevelPoints(COORDS.secondaryPoints);
    drawConnectors(COORDS.mainPoints, COORDS.secondaryPoints);

    window.requestAnimationFrame(draw);
  }

  function getCoordinates() {
    var coords = {
      mainPoints: [],
      secondaryPoints: []
    };

    var angles = [ANGLE];

    for (var i = 1; i < COUNT; i++) {
      angles.push(ANGLE + ANGLEDIFF * i);
    }

    angles.forEach(function (angle) {
      coords.mainPoints.push(getPointCoordinates(CENTER, angle, R1));
    });

    coords.mainPoints.forEach(function (point, index) {
      var localAngle = angles[index] + angles[index] * COUNT;
      var newPointCoordinate = getPointCoordinates(point, localAngle, R2);

      coords.secondaryPoints.push(newPointCoordinate);
    });

    return coords;
  }
  function getPointCoordinates(center, angle, radius) {
    var x = undefined,
        y = undefined;

    x = center.x + radius * Math.cos(angle);
    y = center.y + radius * Math.sin(angle);

    return { x: x, y: y };
  }

  function drawCenter(ctx) {
    drawCirclePoint(CENTER.x, CENTER.y, 8);
    drawCircle(CENTER.x, CENTER.y, R1 - 4, true);
  }
  function drawFirstLevelPoints(points) {
    points.map(function (point) {
      drawCirclePoint(point.x, point.y, 6);
      drawCircle(point.x, point.y, R2 - 4);
    });
  }
  function drawSecondLevelPoints(points) {
    points.map(function (point) {
      drawCirclePoint(point.x, point.y, 4);
    });
  }
  function drawConnectors(innerPoints, outterPoints) {
    innerPoints.forEach(function (point, index) {
      drawLine(point, CENTER);
      drawLine(point, outterPoints[index]);
      var n = outterPoints.length;
      for (var i = 1; i < n; i++) {
        drawLine(outterPoints[0], outterPoints[n - 1]);
        drawLine(outterPoints[i], outterPoints[i - 1]);
      }
    });
  }
  function drawCirclePoint(x, y, rad) {
    ctx.beginPath();
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = rad;
    ctx.arc(x, y, rad / 2, 0, PI * 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = 1;
    ctx.arc(x, y, rad + 4, 0, PI * 2, false);
    ctx.stroke();
  }
  function drawCircle(x, y, rad, isDashed) {
    isDashed ? ctx.setLineDash([2, 4]) : '';

    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = 2;
    ctx.arc(x, y, rad + 4, 0, PI * 2, false);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.setLineDash([0]);
  }
  function drawLine(from, to) {
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = 1;
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  window.addEventListener('resize', function () {
    CENTER = {
      x: window.innerWidth,

      y: window.innerHeight * 2 };

    ctx.canvas.width = window.innerWidth * 2;

    ctx.canvas.height = window.innerHeight * 2;
  });
  init();
})();