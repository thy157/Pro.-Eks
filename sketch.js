function setup() {
  createCanvas(windowWidth,windowHeight);
}

let grønneBogstaver = [''];

let kasseBredde = 600 
let kasseHøjde = 300
let kasseHjørneDiameter = 20
let kasseX = 450
let kasseY = 300


function draw() {
  background('black');

  //titel
  textAlign(CENTER, TOP);
  fill('yellow');
  textSize(62);
  text("Type Type",windowWidth/2 ,windowHeight/5 );

  

  //kassen
  stroke('yellow');
  strokeWeight(4);
  fill(0);
  rect(kasseX, kasseY, kasseBredde, kasseHøjde, kasseHjørneDiameter);

  //citat
  textWrap(WORD);
  stroke(0)
  fill('yellow');  
  textSize(42);
  textAlign(LEFT)
  text(tekst, kasseX+10, kasseY+10, kasseBredde, kasseHøjde)

  if (rigtigTast == true) {
      grønneBogstaver[antalRigtige-1]= bogstav[antalRigtige-1]
  }

  //farver bogstaver
  textAlign(LEFT)
  stroke(0)
  fill('green');  
  textSize(42);
  text(grønneBogstaver.join(''),kasseX+10, kasseY+10)
}
