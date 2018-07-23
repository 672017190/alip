function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
}

function draw() {
  background(175);
  
  bandul();

  push();
  strokeWeight(6);
	stroke(255);
	fill(0);
	translate(300, 300, -1);
	ellipse(0, 0,340,340);
  pop();


  translate(300, 300, 0);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, -90, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0,0);






  //fill(255);
  //noStroke();
  //text(hr + ':' + mn + ':' + sc, 10, 200);
}

function bandul(){

  push();
  translate(298, 473, -1);
  noStroke();
  fill(255, 204, 0);
  rect(0, 0, 5, 70);
  pop();

  push();
  translate(300, 558, -1);
  noStroke();
  fill(255, 204, 0);
  ellipse(0, 0, 40, 40);
  pop();

}
