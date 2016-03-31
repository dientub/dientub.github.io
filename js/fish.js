background(89, 216, 255);

var speed = 1;

var bubbleSpeed = 1;

var bubbleX = [random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400)];
var bubbleY = [500,500,500,500,500,500,500,500,500,500,];

var fishX = [-100,-100,-100,-100,-100,-100,-100,-100];
var fishY = [random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400),random(0,400)];

var mover = function(){
    for(var i = -100;i<fishX.length;i++){
        if(fishX[i]>550){
            fishX[i] = -150;
            fishY[i] = random(0,400);
        } else if(i === 0) {
            fishX[i] += speed;
        } else if(i === 1) {
            fishX[i] += speed;
        } else if(i === 2) {
            fishX[i] += speed*2;
        } else if(i === 3) {
            fishX[i] += speed*1.5;
        } else if(i === 4) {
            fishX[i] += speed*3;
        } else if(i === 5) {
            fishX[i] += speed*0.5;
        } else if(i === 6) {
            fishX[i] += speed*1.25;
        } else if(i === 7) {
            fishX[i] += speed*0.75;
        } else {
            fishX[i] += speed;
        }
    }
};

var drawFish = function(centerX,centerY,eyeSize,bodyLength,bodyHeight,tailWidth,tailHeight,flapSpeed,bodyColor){
    noStroke();
    fill(bodyColor);
    triangle(centerX-0.2*bodyLength,centerY,centerX-0.2*bodyLength,centerY-0.8*bodyHeight,centerX+0.4*bodyLength,centerY-0*bodyHeight);
    // body
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/2.35, centerY, eyeSize, eyeSize);
    
    fill(bodyColor*5);
    
    triangle(centerX-0.2*bodyLength,centerY,centerX-0.2*bodyLength,centerY-0.8*bodyHeight,centerX+0.4*bodyLength,centerY-0*bodyHeight);
    
    
    triangle(centerX+-0.16*bodyLength,centerY+0.39*bodyHeight,centerX+0.19*bodyLength,centerY+0.42*bodyHeight,centerX+-0.15*bodyLength,centerY+0.61*bodyHeight);
    
    fill(bodyColor);
    
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    fill(bodyColor*5);
    
    triangle(centerX+0.14*bodyLength,centerY+0.13*bodyHeight,centerX+0.02*bodyLength,centerY+0.36*bodyHeight,centerX+-0.10*bodyLength,centerY+0.16*bodyHeight);
    
    fill(bodyColor);
    // tail
    
    triangle(centerX-bodyLength/2.5, centerY,
             centerX-bodyLength/2-(10 * sin(frameCount * flapSpeed)+10), centerY-tailHeight,
             centerX-bodyLength/2-(10 * sin(frameCount * flapSpeed)+10), centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
};

var bubbleMover = function(){
    for(var i = -100;i<bubbleX.length;i++){
        if(bubbleY[i]<-500){
            bubbleY[i] = 500;
            bubbleX[i] = random(0,400);
        } else if(i === 0) {
            bubbleY[i] -= speed*0.9;
        } else if(i === 1) {
            bubbleY[i] -= speed*0.5;
        } else if(i === 2) {
            bubbleY[i] -= speed*0.75;
        } else if(i === 3) {
            bubbleY[i] -= speed*1;
        } else if(i === 4) {
            bubbleY[i] -= speed*1.25;
        } else if(i === 5) {
            bubbleY[i] -= speed*1.5;
        } else if(i === 6) {
            bubbleY[i] -= speed*1.75;
        } else if(i === 7) {
            bubbleY[i] -= speed*2;
        } else if(i === 8) {
            bubbleY[i] -= speed*2.25;
        } else if(i === 9) {
            bubbleY[i] -= speed*2.50;
        } else {
            bubbleY[i] -= speed;
        }
    }
};

var drawbubble = function(bubbleX,bubbleY,size){
    strokeWeight(2.5);
    stroke(100, 255, 255, 100);
    fill(150, 255, 255, 100);
    ellipse(bubbleX,bubbleY,size,size);
    noFill();
    stroke(230, 255, 255, 100);
    arc(bubbleX,bubbleY,size/1.25,size/1.25,180,300);
};

var drawPebble = function(pebbleX,pebbleY,sizeX,sizeY){
    strokeWeight(5);
    stroke(185, 170, 100);
    fill(185, 170, 100);
    ellipse(pebbleX,pebbleY,sizeX,sizeY);
    noFill();
    stroke(195, 180, 115);
    arc(pebbleX,pebbleY,sizeX,sizeY,150,350);
    stroke(168, 147, 65);
    arc(pebbleX,pebbleY,sizeX,sizeY,25,125);
};

var drawSeaweed = function(weedX, weedY){
    stroke(0, 100, 15, 230);
    strokeWeight(15);
    noFill();
    bezier(weedX, weedY, weedX+50, weedY+-125, weedX+-50, weedY+-50, weedX+5, weedY+-175);
};


var draw = function() {
    
    noStroke();
    fill(89, 216, 255,75);
    rect(0,0,width,height);
    
    bubbleMover();
    mover();

    // First Purple fish
    drawFish(fishX[0],fishY[0],15,125,75,25,25,5,color(185, 0, 125));
    // The one next to it
    drawFish(fishX[0]-50,fishY[0]+50,15,115,75,25,25,5,color(165, 0, 110));
    // Short yellow one
    drawFish(fishX[2],fishY[2],15,55,65,15,40,5,color(255, 187, 0));
    // Green one
    drawFish(fishX[3],fishY[3],15,100,65,15,40,5,color(170, 255, 0));
    // Slim fast grey one
    drawFish(fishX[4],fishY[4],10,200,30,15,20,5,color(135, 135, 135));
    // Big blue one
    drawFish(fishX[5],fishY[5],10,100,100,10,50,5,color(0, 17, 255));
    // Tiny Red one
    drawFish(fishX[6],fishY[6],7.5,30,30,10,10,5,color(225, 0, 0));
    // Big tailed pale gray one
    drawFish(fishX[7],fishY[7],10,100,50,50,25,5,color(219, 219, 219));
    
    drawSeaweed(15,400);
    drawSeaweed(125,500);
    drawSeaweed(97,447);
    drawSeaweed(274,428);
    drawSeaweed(175,472);
    drawSeaweed(351,438);
    drawSeaweed(312,403);
    drawSeaweed(221,523);
    
    drawPebble(8,392,50,25);
    drawPebble(52,392,78,41);
    drawPebble(114,392,50,25);
    drawPebble(80,390,33,17);
    drawPebble(144,385,21,32);
    drawPebble(168,392,50,25);
    drawPebble(113,408,50,25);
    drawPebble(16,405,50,25);
    drawPebble(210,379,50,25);
    drawPebble(232,400,121,25);
    drawPebble(301,379,121,56);
    drawPebble(371,369,80,65);
    drawPebble(335,388,86,25);
    drawPebble(403,409,35,44);
    
    drawbubble(bubbleX[0],bubbleY[0],15);
    drawbubble(bubbleX[1],bubbleY[1],50);
    drawbubble(bubbleX[2],bubbleY[2],10);
    drawbubble(bubbleX[3],bubbleY[3],25);
    drawbubble(bubbleX[4],bubbleY[4],30);
    drawbubble(bubbleX[5],bubbleY[5],25);
    drawbubble(bubbleX[6],bubbleY[2],10);
    drawbubble(bubbleX[7],bubbleY[3],25);
    drawbubble(bubbleX[8],bubbleY[4],30);
    drawbubble(bubbleX[9],bubbleY[5],25);
};

