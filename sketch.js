let VkasseBredde; 
let VkasseHøjde;
let VkasseX;
let VkasseY;

let HkasseBredde; 
let HkasseHøjde;
let HkasseX;
let HkasseY;

let grønneBogstaver = [''];
let ACC;
let ACCround;

let kasseBredde;
let kasseHøjde;
let kasseHjørneDiameter = 22
let kasseX;
let kasseY;


async function setup() {
  createCanvas(windowWidth,windowHeight);
  VkasseBredde = windowWidth/5 
  VkasseHøjde = windowHeight/1.3
  VkasseX = windowWidth/20
  VkasseY = windowHeight/10

  kasseBredde = windowWidth/2.5 
  kasseHøjde = windowHeight/2
  kasseHjørneDiameter = 20
  kasseX = windowWidth/3.3 
  kasseY = windowHeight/3

  HkasseBredde = windowWidth/5  
  HkasseHøjde = windowHeight/1.3
  HkasseX = windowWidth/1.3
  HkasseY=  windowHeight/10

}

function draw() {
  

  background('black');

  //titel
  textAlign(CENTER, TOP);
  fill('yellow');
  textSize(62);
  text("Type Type",windowWidth/2 ,windowHeight/5 );

  //Vkasse til statestik
  stroke('yellow');
  strokeWeight(4);
  fill(0);
  rect(VkasseX, VkasseY, VkasseBredde, VkasseHøjde, kasseHjørneDiameter);

  //Hkasse til statestik
  stroke('yellow');
  strokeWeight(4);
  fill(0);
  rect(HkasseX, HkasseY, HkasseBredde, HkasseHøjde, kasseHjørneDiameter);
  
  //WPM

  //Timer
  Timer()
  textWrap(WORD);
  stroke(0)
  fill('yellow');  
  textSize(42);
  textAlign(LEFT)
  text(sec, HkasseX+10, HkasseY+10, HkasseBredde, HkasseHøjde)


  //Antal Fejl
  if (antalRigtige == bogstav.length) {
  textWrap(WORD);
  stroke(0)
  fill('yellow');  
  textSize(50);
  textAlign(CENTER)
  text('Fejl: '+ antalForkerte , VkasseX, VkasseY+20, VkasseBredde, VkasseHøjde)
  }

  //Præsition
  if (antalRigtige == bogstav.length) {
    ACC = 100-(antalForkerte/bogstav.length*100);
    ACCround = ACC.toFixed(2);

    textWrap(WORD);
    stroke(0)
    fill('yellow');  
    textSize(50);
    textAlign(CENTER)
    text('ACC: '+ ACCround +'%' , VkasseX, VkasseY+200, VkasseBredde, VkasseHøjde)
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
