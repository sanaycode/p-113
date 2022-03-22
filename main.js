function preload(){
    
}
function setup(){
    var canvas=createCanvas(800, 600);
    canvas.position(390,50);
}
function draw(){
    stroke(0, 255, 234);
    fill('#00ffb7');
    circle(105, 100, 60);
    stroke(0, 81, 255);
    rect(165, 77, 200, 50);
    stroke(0, 255, 183);
    fill('#0051ff');
    rect(390, 77, 200, 50);
    stroke(0, 255, 234);
    fill('#00ffb7');
    circle(640, 100, 60);
    stroke(0, 81, 255);
    rect(615, 155, 50, 200);
    stroke(0, 255, 183);
    fill('#0051ff');
    rect(615, 380, 50, 200);//x=80
    stroke(0, 81, 255);
    fill('#00ffb7');
    rect(80, 155, 50, 200);
    stroke(0, 255, 183);
    fill('#0051ff');
    rect(80, 380, 50, 200);
}