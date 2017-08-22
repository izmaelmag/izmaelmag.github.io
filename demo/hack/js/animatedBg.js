(function() {

    var width, height, canvas, ctx, points, target, animateHeader = true;

    var randomFactorX = Math.random()*10, randomFactorY = Math.random()*10;

    var xAmountFactor, yAmountFactor, cornerDistances, pointerDistances;

    if (window.innerWidth > 640) {
      cornerDistances = {
        close: 150000,
        mid:   600000,
        far:  1000000
      };

      pointerDistances = {
        close: 2000,
        mid:   4000,
        far:   8000
      };

      xAmountFactor = 20;
      yAmountFactor = 10;
    } else {
      cornerDistances = {
        close: 0,
        mid:   0,
        far:   0
      };

      pointerDistances = {
        close: 0,
        mid:   10000,
        far:   20000
      };

      xAmountFactor = 7;
      yAmountFactor = 14;
    }

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};

        canvas = document.getElementById('wirebg');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = -100; x < width+200; x = x + width/xAmountFactor) {
            for(var y = -100; y < height+200; y = y + height/yAmountFactor) {
                var px = x;
                var py = y;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 1+Math.random()*2, 'rgba(255,255,255,0.1)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        var corner = {
          x: ctx.canvas.width,
          y: ctx.canvas.height
        };

        ctx.clearRect(0,0,width,height);

        for(var i in points) {
            // detect points in range
            if(Math.abs(getDistance(corner, points[i])) < cornerDistances.close) {
                points[i].active = 0.3;
                points[i].circle.active = 0.1;
            } else if(Math.abs(getDistance(corner, points[i])) < cornerDistances.mid) {
                points[i].active = 0.12;
                points[i].circle.active = 0.08;
            } else if(Math.abs(getDistance(corner, points[i])) < cornerDistances.far) {
                points[i].active = 0.03;
                points[i].circle.active = 0.04;
            } else {
                points[i].active = 0;
                points[i].circle.active = 0;
            }

            drawLines(points[i]);
            points[i].circle.draw();
        }

        for(var i in points) {
            // detect points in range
            if(Math.abs(getDistance(target, points[i])) < pointerDistances.close) {
                points[i].active = 0.1;
                points[i].circle.active = 0.6;
            } else if(Math.abs(getDistance(target, points[i])) < pointerDistances.mid) {
                points[i].active = 0.08;
                points[i].circle.active = 0.3;
            } else if(Math.abs(getDistance(target, points[i])) < pointerDistances.far) {
                points[i].active = 0.06;
                points[i].circle.active = 0.1;
            } else {
                points[i].active = 0;
                points[i].circle.active = 0;
            }

            drawLines(points[i]);
            points[i].circle.draw();
        }

        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite
          .to(p, 1+1*Math.random(),
              {
                x: p.originX + 30 + Math.random()*40,
                y: p.originY + 30 + Math.random()*40,

                ease: Sine.easeInOut,
                onComplete: function() {
                      shiftPoint(p);
                  }
              }
             );
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

})();
