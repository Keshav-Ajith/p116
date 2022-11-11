noseX = 0;
noseY = 0;
rightEyeX = 0;
rightEyeY = 0
function preload()
{
    moustache = loadImage("https://i.postimg.cc/7hSr9rrg/images-removebg-preview.png");
    monocle = loadImage("https://i.postimg.cc/MTCvXwYR/download-1-removebg-preview.png");

}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded()
{
    console.log("model loaded");
}

function draw()
{
    image(video,0,0,350,350);

    image(moustache, noseX,noseY, 80, 50);

    image(monocle, rightEyeX, rightEyeY, 50, 100);

}

function take_snapshot()
{
    save("filter.png");
}

function gotPoses(results)
{

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -35;
        noseY = results[0].pose.nose.y +10;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
        rightEyeX = results[0].pose.rightEye.x - 30;
        rightEyeY = results[0].pose.rightEye.y - 20;
        console.log("Right eye x = "+ rightEyeX);
        console.log("nose y = "+ noseY);
    }
}