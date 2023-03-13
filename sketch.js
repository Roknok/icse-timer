function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100,100,255);
  d = 29;

  t = new Date();

  p = (d - t.getDate() - 1) * 24 + 24 - t.getHours() - 1 + 13;
  
  r=60-t.getMinutes()-1;
  
  k="    "+(60-t.getSeconds()-1) + " Seconds    ";
  
   if(p < 0 || r < 0 || 60 - t.getSeconds() - 1 < 0) {
  } else {
    textSize(10)
    sz= 10/textWidth(k)*windowWidth
    textSize(sz)
    //fill(230,245,250)
     fill(0,0,0)
    
    text("ICSE End:",windowWidth/2-textWidth("ICSE End")/2,windowHeight/5)
      
    text(p + " Hours", windowWidth/2-textWidth(p+" Hours")/2, windowHeight/5*2);
    text(r+" Minutes",windowWidth/2-textWidth(r+" Minutes")/2,windowHeight/5*3
)
    text(k,windowWidth/2-textWidth(k)/2,windowHeight/5*4)

  }
}
