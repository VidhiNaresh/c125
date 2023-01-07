noseX =0;
noseY =0;
leftWristX =0;
rightWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
posenet = ml5.poseNet(video, modelLoaded);
posenet.on("pose", gotPoses);
}
function draw() {
    background("yellow");
    document.getElementById("sqaure_side").innerHTML ="Weight and Height of square will be "+difference+"px";
fill("red");
stroke("white");
square(noseX, noseY, difference);

}
function modelLoaded() {
    console.log("Posenet is initialized");
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log(noseX, noseY);

leftWristX =results[0].pose.leftWrist.x;
rightWristX =results[0].pose.righttWrist.x;
difference = floor(leftWristX-rightWristX);
console.log(leftWristX, rightWristX);

    }
}