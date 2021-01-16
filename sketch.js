// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let video;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  classifier = ml5.imageClassifier("MobileNet", video, modelReady);
  // img = loadImage('https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

  image(video, 0, 0);
}

function modelReady() {
    classifier.classify(gotResult);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    let resultData = document.querySelector('.result');
    let confidenceData = document.querySelector('.confidence');

    resultData.innerHTML = results[0].label;
    confidenceData.innerHTML = results[0].confidence;
    setTimeout(function() {
        classifier.classify(gotResult);
    },1000)
}
}
