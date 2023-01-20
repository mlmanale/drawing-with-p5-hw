function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  noStroke();
  fill(255,255,0);
  arc(75, 150, 100, 100, PI + QUARTER_PI, HALF_PI + QUARTER_PI);
  fill(255,0,0);
  arc(200, 150, 100, 100, PI, 0);
  rect(150, 150, 100, 50);
  fill(255);
  ellipse(175, 150, 30);
  ellipse(225, 150, 30);
  fill('blue');
  ellipse(175, 150, 17);
  ellipse(225, 150, 17);
  
  //console.log(mouseX,mouseY);
}
