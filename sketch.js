let VkasseBredde; 
let VkasseHøjde;
let VkasseX;
let VkasseY;

let grønneBogstaver = [''];

let kasseBredde = 600 
let kasseHøjde = 300
let kasseHjørneDiameter = 20
let kasseX = 450
let kasseY = 300

async function setup() {
  createCanvas(windowWidth,windowHeight);
  VkasseBredde = windowWidth/5 
  VkasseHøjde = windowHeight/1.3
  VkasseX = windowWidth/20
  VkasseY = windowHeight/10
}

function draw() {
  

  background('black');

  //titel
  textAlign(CENTER, TOP);
  fill('yellow');
  textSize(62);
  text("Type Type",windowWidth/2 ,windowHeight/5 );

  //kasse til statestik
  stroke('yellow');
  strokeWeight(4);
  fill(0);
  rect(VkasseX, VkasseY, VkasseBredde, VkasseHøjde, kasseHjørneDiameter);
  
  //Antal Fejl
  if (antalRigtige == bogstav.length) {
  textWrap(WORD);
  stroke(0)
  fill('yellow');  
  textSize(50);
  textAlign(CENTER)
  text('Fejl: '+ antalForkerte , VkasseX, VkasseY+20, VkasseBredde, VkasseHøjde)
  }
  
  

  //kassen til citatet
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
  text(citat, kasseX+10, kasseY+10, kasseBredde, kasseHøjde)

  if (rigtigTast == true) {
      grønneBogstaver[antalRigtige-1]= bogstav[antalRigtige-1]
  }

  //farver bogstaver
  textAlign(LEFT)
  stroke(0)
  fill('green');  
  textSize(42);
  text(grønneBogstaver.join(''),kasseX+10, kasseY+10, kasseBredde, kasseHøjde)
}
