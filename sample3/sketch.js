let glassY = 200;
let bgColor;

function setup() {
  createCanvas(600, 400);
  bgColor = color(130, 209, 221);

}

function draw() {
  background(bgColor);
  noStroke();
  fill(49, 0, 142);
  circle(430, 120, 200);
  circle(50, 20, 190);
  circle(150, 320, 250);
  circle(600, 400, 150); //배경
  
  fill(0);
  quad(200, 215, 400, 215, 440, 380, 160, 380); //뒷머리
  fill(244, 234, 195); //피부색
  noStroke();
  rect(270, 300, 60, 70); //윗목
  ellipse(200, 215, 50, 50); //왼쪽귀
  ellipse(400, 215, 50, 50); //오른쪽귀
  ellipse(300, 200, 200, 230); //얼굴
  
  fill(21, 140, 0);
  ellipse(300, 400, 320, 100); //초록옷
  fill(244, 234, 195);
  ellipse(300, 350, 60, 50);//아래목
  stroke(255);
  strokeWeight(20);
  line(220, 360, 220, 400);
  line(380, 360, 380, 400); //나시끈
  
  fill(0);
  stroke(0);
  strokeWeight(8);
  
  line(220, 170, 270, 170);
  line(330, 170, 380, 170); //눈썹
  strokeWeight(25);
  point(265, 200);
  point(335, 200); //눈
  strokeWeight(20);
  fill(232, 156, 150);
  noStroke();
  ellipse(250, 240, 50, 30);
  ellipse(350, 240, 50, 30); //볼터치
  fill(0);
  stroke(0);
  bezier(298, 85, 270, 150, 240, 190, 200, 200);
  bezier(300, 84, 280, 85, 205, 70, 200, 200);
  bezier(302, 85, 330, 150, 360, 190, 400, 200);
  bezier(300, 84, 320, 85, 395, 70, 400, 200); //앞머리
  stroke(229, 126, 112);
  triangle(300, 228, 301, 230, 299, 230); //코
  
  strokeWeight(5);
  stroke(0);
  point(240, 230);
  point(355, 280); //점
  
  
  noFill();
  stroke(216, 67, 97);
  strokeWeight(7);
  arc(300, 265, 30, 20, radians(20), radians(160)); //입
  
    if (200 > mouseY && mouseY > 70) {
    glassY = mouseY;
  }
  stroke(0);
  strokeWeight(5);
  ellipse(250, glassY, 70, 50);
  ellipse(350, glassY, 70, 50);
  line(285, glassY, 315, glassY); //안경
  
}

function keyPressed() {
  print("key pressed:", key);

  if (key === 'P') {
    bgColor = color(239, 134, 211); // 핑크
  } else if (key === 'Y') {
    bgColor = color(238, 244, 181); // 노랑
  } else if (key === 'B') {
    bgColor = color(130, 209, 221); //파랑
  } else if(key === 'S') {
    saveGif('me', 10);
  }
}
