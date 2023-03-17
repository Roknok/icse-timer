let hairStrands = [];
let strandPositions = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}
e = 100
mm=1

function draw() {
  background(100,e,255);
  e+=mm;
  if(e>200){
    mm=-1
  }
  if(e<100){
    mm=1
  }
  
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
    fill(230,245,250)
    
    text("ICSE End:",windowWidth/2-textWidth("ICSE End")/2,windowHeight/5)
      
    text(p + " Hours", windowWidth/2-textWidth(p+" Hours")/2, windowHeight/5*2);
    text(r+" Minutes",windowWidth/2-textWidth(r+" Minutes")/2,windowHeight/5*3
)
    text(k,windowWidth/2-textWidth(k)/2,windowHeight/5*4)
textSize(sz/2)
text("Days : "+(d - t.getDate()) ,windowWidth- textWidth("Days : "+(d - t.getDate()))-sz/4,sz/2)  

strokeWeight(1);

  // Draw all hair strands stored in the array
  for (let i = 0; i < hairStrands.length; i++) {
    let x1 = hairStrands[i][0];
    let y1 = hairStrands[i][1];
    let x2 = hairStrands[i][2];
    let y2 = hairStrands[i][3];
    let r1 = hairStrands[i][4];
    let r2 = hairStrands[i][5];
    noFill();
    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1 + r1[0], y1 + r1[1]);
    curveVertex(x2 + r2[0], y2 + r2[1]);
    curveVertex(x2, y2);
    endShape();
}


  }
}
function mousePressed() {
  // Generate random x and y coordinates
  let x1 = random(width);
  let y1 = random(height);
  let x2 = x1 + random(-80, 80);
  let y2 = y1 - random(40, 120);

  // Generate random variations for each curve point
  let r1 = [random(-40, 40), random(-40, 40)];
  let r2 = [random(-40, 40), random(-40, 40)];

  // Store haidjjdjjdjdr strand position and random variations in the arrays
  hairStrands.push([x1, y1, x2, y2, r1, r2]);
  strandPositions.push([x1, y1, x2,  y2]);
}



