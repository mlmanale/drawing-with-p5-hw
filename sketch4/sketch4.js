function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,150);
  ellipseMode(CENTER);
  fill('green');
  stroke('white');
  strokeWeight(4);
  ellipse(width/2, height/2, 150);
  fill('red');
  
  // triangle(182, 175, 200, 125, 217,175);
  // triangle(217,175, 270, 175, 228, 210);
  // triangle(228, 210, 245, 260, 200, 230);
  // triangle(170, 210, 155, 260, 200, 230);
  // triangle(182, 175, 130, 175, 170, 210);

  beginShape();
    vertex(182, 175);
    vertex(200, 125);
    vertex(217, 175);
    vertex(270, 175);
    vertex(228, 210);
    vertex(245, 260);
    vertex(200, 230);
    vertex(155, 260);
    vertex(170, 210);
    vertex(130, 175);
    
  endShape(CLOSE);

  //console.log(mouseX, mouseY);
}

