let button;
let colorPicker;
let c;
let createImgDisplay;

let createImg;
let createImg1;
let createImg2;
let createImg3;
let createImg4;
let createImg1Display;
let paintButton;
let clearButton;
let createImgButton;
let createImgButton1;
let createImgButton2;
let createImgButton3;
let createImgButton4;
let mode = "";
function preload() {
  createImg = loadImage("poli.png");
  createImg1 = loadImage("roy.png");
  createImg2 = loadImage("amber.png");
  createImg3 = loadImage("helly.png");
  createImg4 = loadImage("Jin.png");
}
function setup() {
  c = createCanvas(windowWidth, windowHeight);

  background(0);
  c.mousePressed(sticky);
  button = createButton("儲存照片");
  button.position(0, 0);
  button.mousePressed(saveBg);
  // color pikcer
  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(0, 180);

  // img
  // createImgButton = createButton('上傳照片');

  createImgButton = createButton("珀利");
  createImgButton.mousePressed(changePoli);
  createImgButton.position(0, 60);

  createImgButton4 = createButton("琴");
  createImgButton4.mousePressed(changeJin);
  createImgButton4.position(0, 30);
  // image(createImg1, 50, 150, 50, 50)
  createImgButton1 = createButton("羅伊");
  createImgButton1.mousePressed(changeRoy);
  createImgButton1.position(0, 90);

  createImgButton2 = createButton("安巴");
  createImgButton2.mousePressed(changeAmber);
  createImgButton2.position(0, 120);

  createImgButton3 = createButton("海利");
  createImgButton3.mousePressed(changeHelly);
  createImgButton3.position(0, 150);
  // createImg1.mousePressed(changeBG);
  paintButton = createButton("筆刷");
  paintButton.mousePressed(changepaint);
  paintButton.position(0, 210);

  // clean
  clearButton = createButton("清除");
  clearButton.mousePressed(removeBroad);
  clearButton.position(0, 250);
}
function changeAmber() {
  print("img");
  mode = "amber";
  cleanStyle();
  createImgButton2.style("background-color", "green");
}
function changeHelly() {
  print("img");
  mode = "helly";
  cleanStyle();
  createImgButton3.style("background-color", "green");
}
function saveBg() {
  saveCanvas(c, "myCanvas", "jpg");
}
function removeBroad() {
  background(0);
}
function cleanStyle() {
  paintButton.style("background-color", "#FCFCFC");
  clearButton.style("background-color", "#FCFCFC");
  createImgButton.style("background-color", "#FCFCFC");
  createImgButton1.style("background-color", "#FCFCFC");
  createImgButton2.style("background-color", "#FCFCFC");
  createImgButton3.style("background-color", "#FCFCFC");
  createImgButton4.style("background-color", "#FCFCFC");
}
function draw() {
  // ellipse(mouseX, mouseY, 20, 20);
  // background(0)
}
function handleFile(file) {
  print(file);
  if (file.type === "image") {
    createImgDisplay = createImg(file.data, "");
    createImgDisplay.position(0, 200);
    createImgDisplay.mouseDragged(changePosition);
    // createImgDisplay.hide();
  } else {
    createImgDisplay = null;
  }
}
// this function fires with any click anywhere
function mouseDragged(event) {
  // d = d + 10;
  print({ event, mode });

  // createImgDisplay.position(mouseX, mouseY);
}

function mousePressed(event) {
  print(event, "mousePress");
}
function changeJin() {
  mode = "jin";
  cleanStyle();
  createImgButton4.style("background-color", "green");
}
function changePoli() {
  print("img");
  mode = "polie";
  cleanStyle();
  createImgButton.style("background-color", "green");
}
function changeRoy() {
  print("img");
  mode = "roy";
  cleanStyle();
  createImgButton1.style("background-color", "green");
}

function changepaint() {
  print("img");
  mode = "paint";
  cleanStyle();
  paintButton.style("background-color", "green");
}
function sticky() {
  print("imgsticky", mode);
  imageMode(CENTER);
  if (mode === "polie") {
    image(createImg, mouseX, mouseY, 150, 150);
  } else if (mode === "roy") {
    image(createImg1, mouseX, mouseY, 150, 150);
  } else if (mode === "amber") {
    image(createImg2, mouseX, mouseY, 150, 150);
  } else if (mode === "helly") {
    image(createImg3, mouseX, mouseY, 150, 150);
  } else if (mode === "jin") {
    image(createImg4, mouseX, mouseY, 150, 150);
  }
}
function mouseDragged() {
  if (mode === "paint") {
    var count = int(random(100, 350));
    var r = random(2, 20);
    // 利用sqrt(前一個mouse 跟 mouseY的 相差開平方之後)可以讓筆刷不會刷得太過誇張
    var delta = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY)) * 10;
    noStroke();

    let colorChoice = color(
      random(
        colorPicker.color().levels[0] + 100,
        colorPicker.color().levels[0]
      ),
      random(
        colorPicker.color().levels[1],
        colorPicker.color().levels[1] + 100
      ),
      random(colorPicker.color().levels[2], colorPicker.color().levels[2] + 100)
    );
    for (let i = 0; i < count; i++) {
      fill(colorChoice);

      ellipse(
        mouseX + random(-delta, delta),
        mouseY + random(-delta, delta),
        r
      );
      r *= 0.9;
    }
  }
}
