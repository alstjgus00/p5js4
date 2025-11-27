let startFrame;
let angle = 0;
let speed = 0.01;

function setup() {
  createCanvas(600, 400);
  background(194, 234, 213);
  startFrame = frameCount;
}
  
function draw(){
  let elapsedFrames = frameCount - startFrame;
  console.log(elapsedFrames);
  
  if (elapsedFrames > 60){
    background(random(255), random(255), random(255));
  }
  
  
  stroke(82, 146, 165);
  fill(137, 159, 165)
  square(400, 0, 10);
  square(400, 40, 10);
  square(400, 80, 10);
  square(400, 120, 10);
  square(400, 160, 10);
  square(400, 200, 10);
  square(400, 240, 10);
  square(400, 280, 10);
  square(400, 320, 10);
  square(400, 360, 10);
  square(400, 400, 10);
  

  stroke(0, 54, 191);
  strokeWeight(15);
  line(0,180, 50, 180);
  line(70,180, 120, 180);
  line(140, 180, 190, 180);
  line(210, 180, 260, 180);
  line(280, 180, 330, 180);
  line(350, 180, 400, 180);
  line(420, 180, 470, 180);
  
  fill(255);
  stroke(125)
  strokeWeight(5);
  arc(600, 0, 200, 200, radians(90), radians(180));
  stroke(100);
  strokeWeight(7);
  arc(0, 400, 400, 400, radians(270), radians(360))
  noStroke();
  fill(175, 102, 164);
  ellipse(100, 40, 200, 200);
  noFill();
  stroke(175, 5, 150);
  circle(100, 40, 100);
  noStroke();
  fill(185, 101, 188);
  ellipse(550, 180, 250, 250);
  stroke(175, 5, 200);
  fill(175, 153, 172);
  ellipse(175, 400, 200, 200);

  let t = millis() * 0.002;
  let w = 150 + 50 * sin(t);
  let h = 180 + 60 * sin(t);
  fill(175, 5, 150);
  ellipse(330, 300, w, h);

  
  fill(255);
  circle(550, 180, 170);
  fill(175, 153, 178);
  circle(550, 180, 100);
  
  fill(255);
  ellipse(200, 150, 250, 160);
  
  speed += 0.0008
  angle += speed;
  translate(200, 150);
  rotate(angle);
  noStroke();
  fill(0, 219,120);
  triangle(-50, -30, 50, -30, 0, 50);
  triangle(-50, 30, 50, 30, 0, -50);
  
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('msh4', 10);
  }
}