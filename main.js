function setup(){
    canvas=createCanvas(550,550)
    canvas.position(700,80)
    video=createCapture(VIDEO);
    video.position(50,80)
    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotPoses)
}

function modelloaded(){
console.log(modelloaded)
}

function gotPoses(results){
    console.log(results)

}

function draw(){
    background("lightpink")
}