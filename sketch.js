let bg = '#ebdec7';
let fg = '#b6412a';
let accent1 = '#162343';
let accent2 = '#0886d6';
let accent3 = '#cac98e';
let padding = 100;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let highwayGothic;

function preload() {
    img1 = loadImage("images/madre-mezcal.png");
    img2 = loadImage("images/agave-pic.jpg");
    img3 = loadImage("images/jicara.png");
    img4 = loadImage("images/ancestral.png");
    img5 = loadImage("images/tequila.png");
    img6 = loadImage("images/espadin.png");
    highwayGothic = loadFont('fonts/highway-gothic.ttf');
}

function setup() {
    createCanvas(900, 600);
    strokeCap(PROJECT);
    img1.resize(int(random(400, 500)), 0);
    img2.resize(int(random(400, 500)), 0);
    img3.resize(int(random(400, 500)), 0);
    img4.resize(int(random(400, 500)), 0);
    img5.resize(int(random(400, 500)), 0);
    img6.resize(int(random(400, 500)), 0);

    textFont(highwayGothic);
    textSize(100);
    fill(fg);
    frameRate(1);
}

function draw() {
    background(bg);

    let allColors = [fg, accent1, accent2, accent3];


    // circle//
    let circleColor = random(allColors);
    noStroke();
    fill(circleColor);
    let circleX = random(padding, width - padding);
    let circleY = random(padding, height - padding);
    let diameter = random(200, 600);
    circle(circleX, circleY, diameter);

    // image
    let imgToDraw = random([img1, img2, img3, img4, img5, img6]);

    imageMode(CENTER);
    push();
    translate(random(padding, width - padding), random(padding, height - padding));
    image(imgToDraw, 0, 0);
    pop();

    //text
    let textColors = allColors.filter(c => c !== circleColor);
    let textColor = random(textColors);
    noStroke();
    fill(textColor);
    let textX = random(padding, width - padding);
    let textY = random(padding, height - padding);
    textAlign(CENTER, CENTER);
  
    
    textSize(random(50, 150));
    text("¡SALUD!", textX, textY);

    // line
    let lineColors = allColors.filter(c => c !== circleColor & c !==textColor);
    let lineColor = random(lineColors);
    stroke(lineColor);
    strokeWeight(5);
    let lineX1 = random(padding, width - padding);
    let lineY1 = random(padding, height - padding);
    let lineX2 = random(padding, width - padding);
    let lineY2 = random(padding, height - padding);
    line(lineX1, lineY1, lineX2, lineY2);
}

  