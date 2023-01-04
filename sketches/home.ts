import P5 from "p5";

function easeInOutQuint(x: number): number {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export const HomeSketch = (p: P5) => {
  const ww = window.innerHeight;
  const wh = window.innerHeight;

  let xoff = 0;
  let yoff = 0;

  const circPos = {
    x: ww / 2,
    y: ww / 2,
  };

  p.setup = () => {
    p.createCanvas(ww, wh);
    p.noStroke();
    p.fill(222);
  };

  p.draw = () => {
    const easeFunc = easeInOutQuint;

    p.background("#fff");

    for (let i = 0; i < 20; i++) {
      const off = 40 * p.sin(p.millis() / 1000 + 50 * i);
      const zoomProgress = p.constrain(
        p.map(p.millis(), 0, 1200 + 100 * i, 0, 1),
        0,
        1
      );

      p.fill(255 - 10 * i);
      p.circle(
        ww / 2 + off * Math.sin(p.millis()/2000),
        wh / 2 + off * Math.cos(p.millis()/3000),
        (600 - 30 * i) * easeFunc(zoomProgress)
      );
    }
  };
};
