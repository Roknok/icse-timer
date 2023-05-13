let hairStrands = [];
let strandPositions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  d = 140;

  t = new Date();

  p = (d - t.getDate() - 1) * 24 + 24 - t.getHours() - 1 + 0;

  r = 60 - t.getMinutes() - 1;

  k = "    " + (60 - t.getSeconds() - 1) + " Seconds    ";
  e = round(
    map(
      (60000 - (t.getSeconds() * 1000 + t.getMilliseconds())) % 10000,
      1,
      10000,
      0,
      150
    )
  );

  if (e < 150 / 2) {
    background(100, 75 + e, 255);
  } else {
    background(100, 225 - e, 255);
  }

  if (p < 0 || r < 0 || 60 - t.getSeconds() - 1 < 0) {
  } else {
    textSize(10);
    sz = (10 / textWidth(k)) * windowWidth;
    textSize(sz);

    fill(230, 245, 250);

    text(
      "ICSE End :",
      windowWidth / 2 - textWidth("ICSE End :") / 2,
      windowHeight / 5
    );

    text(
      p + " Hours",
      windowWidth / 2 - textWidth(p + " Hours") / 2,
      (windowHeight / 5) * 2
    );
    text(
      r + " Minutes",
      windowWidth / 2 - textWidth(r + " Minutes") / 2,
      (windowHeight / 5) * 3
    );
    text(k, windowWidth / 2 - textWidth(k) / 2, (windowHeight / 5) * 4);
    textSize(sz / 3);
    text(
      d - t.getDate() + " days left",
      windowWidth - textWidth(d - t.getDate() + " days left") - sz / 4,
      windowHeight - sz / 4
    );

    strokeWeight(1);

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
  let x1 = random(width);
  let y1 = random(height);
  let x2 = x1 + random(-80, 80);
  let y2 = y1 - random(40, 120);

  let r1 = [random(-40, 40), random(-40, 40)];
  let r2 = [random(-40, 40), random(-40, 40)];

  hairStrands.push([x1, y1, x2, y2, r1, r2]);
  strandPositions.push([x1, y1, x2, y2]);
}
