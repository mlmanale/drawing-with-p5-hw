function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  ellipseMode(CENTER);
  noStroke();
  fill(255,0,0,100);
  ellipse(200, 120, 150);
  fill(0,0,255,100);
  ellipse(150,210,150);
  fill(0,255,0, 100);
  ellipse(250,210,150);

}
