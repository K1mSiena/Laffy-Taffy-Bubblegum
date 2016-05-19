
// The setup function runs once
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  frameRate(500);
  	background (100,300,600);
  		
  		

}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
	fill (252,182,242);
	stroke(200,100,50);
	ellipse (100,100,100,100);
	rect (200,200,200,200);
	ellipse (mouseX,mouseY,100,100);
	
	var randomRed = random(0,255); 
	var randomGreen = random(0,255);
	var randomBlue = random(0,255);
	
	var newColor = color(randomRed, randomGreen, randomBlue);
	fill(newColor);

}
