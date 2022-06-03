//Cocossd- helps us in Label, confidence, width & height , X & Y coordinates.
//Posenet- 17 different parts of the body.
//Mobilenet- Image Identification.
//p5- image identification; ml5- sound identification
//createCapture- captures live preview of webcam
//window.speechSynthesis- text to speech
//window.webkitSpeechRecognition- speech to text
//glyphicon glyphicon-star: draws a star
//fa fa-envelope- shows a little emoji of envelope
//to find the length of the string (the no. of character in a string): .length()
//to replace the the value of a variable- .replace()
img = "";
status = "";

function preload() {
    img = loadImage('Cat.jpg')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#000000");
    text("Cat", 120, 40);
    noFill();
    stroke("#000000");
    rect(100, 25, 475, 350 );
}

