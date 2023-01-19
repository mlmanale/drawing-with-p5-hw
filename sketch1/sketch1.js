function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0,255,0);
    ellipseMode(CORNER); 
    ellipse(30, 30, 100);
    square(160, 30, 100);
    fill('white');
    outline('black');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
