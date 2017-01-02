let OPT = {
    selector: ".spark-bg",
      amount: 400,
       speed: 0.25, // pixels per frame
    lifetime: 50,
   direction: {x: 0, y: -1},
        size: [1, 2],
  maxopacity: 1,
       color: "100, 100, 150"
}

if (window.innerWidth < 520) {
  options.amount = 50
  options.speed = 0.25;
  options.color = "150, 150, 150";
}

(function spark_bg() {
  const canvas = document.querySelector(OPT.selector);
  const ctx = canvas.getContext("2d");

  let sparks = [];
  
  window.addEventListener('resize', () => {
    setCanvasWidth()
  });
  
  function setCanvasWidth() {
    ctx.canvas.width  = window.innerWidth * 2;
    ctx.canvas.height = window.innerHeight * 2;
  }
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

  // Init animation
  function init() {
    setCanvasWidth();
    
    window.setInterval( () => {
      if (sparks.length < OPT.amount) {
        addSpark();
      }
    }, 1000 / OPT.amount);

    window.requestAnimationFrame(draw);
  }

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0, 0.1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    sparks.forEach( (spark, i, array) => {
  
      if (spark.opacity <= 0) {
        array.splice(i, 1);
      } else {
        drawSpark(spark);
      }
      
    });
  
    window.requestAnimationFrame(draw);
  }
  
  function Spark(x, y) {
    this.x = x;
    this.y = y;
    this.age = 0;
    
    this.opacity = OPT.maxopacity - this.age / (OPT.lifetime * rand(1, 10));
    
    this.go = function() {
      this.x += OPT.speed * OPT.direction.x * rand(1, 20) / 2
      this.y += OPT.speed * OPT.direction.y * rand(1, 20) / 2
      
      this.opacity = OPT.maxopacity - ++this.age / OPT.lifetime;
    }
  }
  
  function addSpark() {
    let x = rand(0, window.innerWidth*2);
    let y = rand(0, window.innerHeight*2);
    sparks.push(new Spark(x, y));
  }
  
  function drawSpark(spark) {
    let x = spark.x, y = spark.y;
    
    spark.go();
    
    ctx.beginPath();
    ctx.fillStyle = `rgba(${OPT.color}, ${spark.opacity})`;
    ctx.rect(x, y, OPT.size[0], OPT.size[1], 0, 0, Math.PI * 2);
    ctx.fill();
  }
  
  init();
})();