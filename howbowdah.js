var slate = document.getElementById("slate");
var context = slate.getContext("2d");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stopper = document.getElementById("stopper");
var clearer = document.getElementById("clearer");
var requestID;

var clearIt = function(e) {
    e.preventDefault();
    context.clearRect(0,0,slate.width,slate.height);
    context.beginPath();
};

var animateCircle = function(e) {
    window.cancelAnimationFrame(requestID);
    var radius = 1;
    var xcor = slate.width / 2;
    var ycor = slate.height / 2;
    var grow = true;
    var drawCircle = function() {
        console.log(requestID);
        context.clearRect(0, 0, slate.width, slate.height);
        context.beginPath();
        context.arc(xcor, ycor, radius, 0, 2*Math.PI);
        context.stroke();
        context.fill();
        if (radius >= xcor) {
            grow = false;
        };
        if (radius <= 1) {
            grow = true;
        }
        if (grow) {
            radius++;
        }
        else {
            radius--;
        }
        requestID = window.requestAnimationFrame(drawDot);

    };
    drawCircle();
};

var animateDvd = function(e) {
    window.cancelAnimationFrame(requestID);
    var myImg = new Image();
    myImg.src = "dvd.jpg";
    var xcor=30;
    var ycor=60;
    var hor=true;
    var vert=true;

    var drawDvd= function(e){
  	console.log(requestID);
  	context.clearRect(0,0,slate.width, slate.height);

  	context.beginPath();
  	context.drawImage(myImg, xcor, ycor, 60, 30);

  	context.stroke();
  	context.fill();

  	if (hor)
  	    xcor+=1;
  	else
  	    xcor-=1;

  	if (vert)
  	    ycor+=2;
  	else
  	    ycor-=2;

  	if (xcor>slate.width-60)
  	    hor=false;
  	if (xcor<0)
  	    hor=true;
  	if (ycor>slate.height-30)
  	    vert=false;
  	if (ycor<0)
  	    vert=true;

  	requestID=window.requestAnimationFrame(drawDvd);
    };

    drawDvd();
};

var stopIt = function() {
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

circle.addEventListener("click", animateCircle);
dvd.addEventListener("click", animateDvd);
stopper.addEventListener("click", stopIt);
clearer.addEventListener("click", clearIt);
context.beginPath();
