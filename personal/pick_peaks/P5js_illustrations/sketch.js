let squareSize;
let squaresx, squaresy;
let h, w;
// let pickPeaks = [0, 1, 2, 5, 1, 0];
// let pickPeaks = [1, 2, 3, 6, 4, 1, 2, 3, 2, 1];
// let pickPeaks = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3,10,90];
// let pickPeaks = [0,1,10,100];
// let pickPeaks = [1, 2, 2, 2, 2];
// let pickPeaks = [];
let pickPeaks = [1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,6,7];
let x, y;
let grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  squaresx = max(pickPeaks);
  squaresy = pickPeaks.length;
  h = height / squaresx;
  w = width / squaresy;

  let  b = 0
  for (let i = 0; i < squaresy; i++) {
    grid[i] = [];
    for (let j = squaresx; j > 0; j--) {
      console.log(j,squaresy-pickPeaks[i])
      if (j-1 < squaresx-pickPeaks[i]) {
        grid[i][j-1] = false;
      } else {
        grid[i][j-1] = true;
      }
    }
    b++
  }
  console.log(grid)
  // frameRate(1)
}

function draw() {
  background(220);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      fill(0);
      // stroke(100);
      // strokeWeight(1);
      if (grid[i][j]) {
        fill(200,0,0);
      }
      rect(w * i, h * j, w, h);
    }
  }
}

// function mouseDragged() {
function mousePressed() {
  x = mouseX;
  y = mouseY;
  for (let i = 0; i < squaresy; i++) {
    for (let j = 0; j < squaresx; j++) {
      if (
        y > squareSize * j &&
        y < squareSize * j + squareSize &&
        x > squareSize * i &&
        x < squareSize * i + squareSize
      ) {
        grid[i][j] = !grid[i][j];
      }
    }
  }
}
