class OGGenerator {
  constructor(opt) {
    this.img    = opt.img;
    this.width  = opt.width;
    this.height = opt.height;
    this.blur   = opt.blur;
    
    this.setVirtualContext();
    this.setImage();
    this.setText(opt.label);
    this.setText(opt.title);
    this.setText(opt.subtitle);
  }
  
  setVirtualContext() {
    let canvas = document.querySelector('#canvas');
    
    let context = canvas.getContext('2d');
    
    context.canvas.width  = this.width;
    context.canvas.height = this.height;
    
    this.canvas = canvas;
    this.ctx = context;
  }
  
  setImage() {
    this.createTempImage();

    let img = new Image;
    img.src = this.img.getAttribute('src');
    
    // Cover image
    drawImageProp(this.ctx, img, 0, 0, this.width, this.height);

    // Write cutten image in img tag
    document.querySelector('#tempImg').setAttribute('src', this.canvas.toDataURL());

    // Blur temp image to canvas
    stackBlurCanvasRGBA('canvas', 0, 0, this.width, this.height, this.blur);
  }

  createTempImage() {
    let tempImage = document.createElement('img');
    tempImage.setAttribute('hidden', 1);
    tempImage.setAttribute('id', 'tempImg');

    document.body.appendChild(tempImage);
  }
  
  setText(obj) {
    this.ctx.save();

    this.ctx.font = obj.font;

    let textMetric = this.ctx.measureText(obj.text);
    let textOffset = (this.width - textMetric.width) / 2;

    this.ctx.fillStyle = obj.color;
    this.ctx.fillText(obj.text, textOffset, obj.topOffset);

    this.ctx.restore();
  }
  
  generate() {
    return this.canvas.toDataURL();
  }
}

const OGImage = new OGGenerator({
  img: document.querySelector('#source'),
  width: 1200,
  height: 550,
  blur: 50,
  
  label: {
    text: 'МОМЕНТЫ',
    color: '#ffffff',
    font: `bold 13px 'Montserrat'`,
    topOffset: 100
  },
  
  title: {
    text: `Ноябрьский Родос`,
    color: '#ffffff',
    font: `bold 100px 'Montserrat'`,
    topOffset: 200
  },
  
  subtitle: {
    text: 'Ксения Кушнаренко',
    color: '#ffffff',
    font: `normal 24px 'PT Serif'`,
    topOffset: 300
  }
});

let src = OGImage.generate();

document.querySelector('#ogimage').setAttribute('content', src);