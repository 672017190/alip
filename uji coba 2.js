//drag mouse to toggle the world!
//you will see there's a vanish point
function setup() {
  createCanvas(100, 100, WEBGL);
  var fov = 60 / 180 * PI;
  var cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);
}
function draw() {
  background(200);
  orbitControl();
  for (var i = -1; i < 2; i++) {
    for (var j = -2; j < 3; j++) {
      push();
      translate(i * 160, 0, j * 160);
      box(40, 40, 40);
      pop();
    }
  }
}