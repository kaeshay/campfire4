var soundCounter=0;
function playSound(idString){
	var sound=document.getElementById(idString);
	if (soundCounter==0){
		sound.play();
		soundCounter++;
	} else if (soundCounter==1){
		sound.pause();
		soundCounter=0;
	}
}

var turnCounter=0;
function turnSwitch(){
	element=document.getElementById("turnButton");
	if(turnCounter==0){
		element.src="assets/tools/rui.png";
		turnCounter++;
	} else if(turnCounter==1){
		element.src="assets/tools/amali.png";
		turnCounter++;
	} else if(turnCounter==2){
		element.src="assets/tools/aziz.png";
		turnCounter++;
	} else if(turnCounter==3){
		element.src="assets/tools/aristotle.png";
		turnCounter++;
	} else if(turnCounter==4){
		element.src="assets/tools/dice.png";
		turnCounter=0;
	}
}

var emergencyCounter=0;
function emergencyOn(){
	element=document.getElementById("emergencyCover");
	if(emergencyCounter==0){
		element.style.display="block";
		emergencyCounter++;
	} else if(emergencyCounter==1){
		element.style.display="none";
		emergencyCounter=0;
	}
}

var slowCounter=0;
function slowDown(){
	element=document.getElementById("containment-wrapper");
	if(slowCounter==0){
		element.style.animation="blur 15s";
		element.style.animationTimingFunction="ease-in";
		element.style.animationFillMode="forwards";
		slowCounter++;
	} else if(slowCounter==1){
		console.log('hi');
		element.style.animation="none";
		// element.style.animationFillMode="backwards";
		slowCounter=0;
	}
}

var lightCounter=0;
function lightOff(){
	element=document.getElementById('containment-wrapper');
	toolbox=document.getElementById('toolbox');
	toilet=document.getElementsByClassName('popup-toilet')[0];
	if(lightCounter==0){
		// element.style.filter="invert(1)"
		// toolbox.style.filter="invert(1)";
		element.style.animation="invert 120s";
		element.style.animationTimingFunction="ease-in";
		element.style.animationFillMode="forwards";
		toolbox.style.animation="invert 120s";
		toolbox.style.animationTimingFunction="ease-in";
		toolbox.style.animationFillMode="forwards";
		toilet.src="assets/adriana/popup-toilet2.png";
		lightCounter++;
	} else if(lightCounter==1){
		element.style.filter="invert(0)"
		toolbox.style.filter="invert(0)"
		element.style.animation="none";
		toolbox.style.animation="none";
		toilet.src="assets/adriana/popup-toilet1.png";
		lightCounter=0;
	}
}

var sanitizerCounter=0;
function sanitizerOpen(){
	element=document.getElementById('sanitizerButton');
	if(sanitizerCounter==0){
		element.src="assets/aziz/sanitizer-open.png";
		sanitizerCounter++;i
	} else if(sanitizerCounter==1){
		element.src="assets/aziz/sanitizer-close.png";
		sanitizerCounter=0;
	}
}

var brushCounter=0;
function changeBrush(){
	element=document.getElementById('brushButton');
	if(brushCounter==0){
		element.src="assets/aziz/chalk-closed.png";
		brushCounter++;i
	} else if(brushCounter==1){
		element.src="assets/aziz/chalk-open.png";
		brushCounter++;
	} else if(brushCounter==1){
		element.src="assets/aziz/brush-tool.png";
		brushCounter++;
	}
}
var timeCounter = 0;
var newTime = 100;
var timerInterval = null;
var startCounter = 0;
function start() {
  if (startCounter==0){
	  document.getElementById("timer").style.display="flex";
	  stop(); // stoping the previous counting (if any)
	  timeCounter = 120;
	  timerInterval = setInterval(changeValue, 1000); 
	  startCounter++;
  } else if (startCounter==1){
  	 playSound('kazoo');
  	 document.getElementById("timer").style.display="none";
  	 startCounter=0;
  }
}
var stop = function() {
  clearInterval(timerInterval);
  newTime = 100;
  document.getElementById("timeBar").style.height = newTime +"px";
}
function changeValue() {
  newTime -= (100/timeCounter);
  document.getElementById("timeBar").style.height = newTime +"px";
}

function enlarge(idString){
	element=document.getElementById(idString);
	element.style.width='200px';
	element.style.position='absolute';
	element.style.height='auto';
}
