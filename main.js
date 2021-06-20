function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelLoaded)
  create();
}
function draw(){
  image(video,0,0,350,300);
  // setTimeout(function(){
  //   classifier.classify(video,gotResult);
  // },2000);
}
function create(){
  classifier.classify(video,gotResult);
  setTimeout(create,500)
}
function modelLoaded(){
  console.log("⠀");
}
function gotResult(error,result){
  if(error){
    console.error(error);
  }
  else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
  }
}

