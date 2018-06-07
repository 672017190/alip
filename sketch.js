let angle = 0;

function setup() {
	createCanvas(640,480,WEBGL);	
}

function draw() {
  background(51);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);

  fill(200, 0, 255);
  normalMaterial();
  torus(100, 10);

  angle +=0.07;

  

 







}