function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(255);
  textSize(19);
  textStyle("bold");
  text("Tick Tock Clock", 100,400); 
  text("Blue and Yellow Colour Denotes Second Hand",13,440);

translate(200,200)
rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
  strokeWeight(8);
  stroke("yellow");
  noFill();
   end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("Pink");
   end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("Light blue");
 end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  }