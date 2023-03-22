function setup() {
  createCanvas(windowWidth,windowHeight);
}



function draw() {
  background(0);

  let x = 255
if (indput==true) {
  x=0
}

  //titel
  fill(x, 204, 0);
  textSize(62);
  text("Type Type",windowWidth/2 ,windowHeight/5 );
  textAlign(CENTER, TOP);
  

  //kassen
  stroke(255, 204, 0);
  strokeWeight(4);
  fill(0);
  rect(450, 300, 600, 300, 20);

}
