//HTML Canvas Text
//Add text to a canvas that displays today's date.
let canvas = document.getElementById("canvas");
let canvasCtx = canvas.getContext("2d");

today = new Date();
let day = today.getDate()
let month = today.getMonth()+1
let year = today.getFullYear()

    let x = canvas.width / 0;
    let y = canvas.height / 2;
    
    backgroundColor = "#000000";
let datePath = 10;

//HTML Canvas Animation
    /*Take the example above and animate the text. It should slide in from left to right 
    (the animation should mimic the example created on day 3 for module 2).*/  
function drawDate(){
//The text should be Verdana. It should have a stroke. It should be #52ce90 in color.
  canvasCtx.font = "bold 60px Verdana";
  canvasCtx.textAlign = "center";
  canvasCtx.strokeStyle = "#52ce90";
  canvasCtx.strokeText((day +"/"+ month + "/" + year), x+=1, y);
  if (x > canvas.width + 100) {
  	x = -100;
  }

}

let update = setInterval(function(){
canvasCtx.clearRect(0,0,1000,500);
drawDate(datePath%1000);
datePath++;
}, datePath);