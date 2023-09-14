status="";
img="";
objects=[];
function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded(){
console.log("model is loaded");
objectDetector.detect(img,gotResult);
status=true;
}

function gotResult(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}

function draw(){
image(img,0,0,640,420);
if(status != ""){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="status:objects detected";
fill("red");
noFill();
stroke("red");
percent=Math.floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}

