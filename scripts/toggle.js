document.getElementById('containment-wrapper').onclick = function clickEvent(e) {
		var rect = e.currentTarget.getBoundingClientRect();
		var xPos = 0;
		var yPos = 0;
      // e = Mouse click event.
     



const thing = document.querySelectorAll('.avatar,.car,.wide-avatar,.pack-avatar,.pack-wide-avatar,.pack-vehicle,.vehicle,.building,.item');
// const container = document.getElementById('containment-wrapper');

// container.addEventListener('click',function(el) {
// 	var rect = el.target.getBoundingClientRect();
// 	var xPos = el.clientX - rect.left; //x position within the element.
// 	var yPos = el.clientY - rect.top;  //y position within the element.
// 	console.log('left:'+xPos + 'top:'+yPos);

	for (var i = 0; i < thing.length; i++) {

		    thing[i].addEventListener('dblclick', function(e) { 
		    	if (e.altKey) {
		    		this.style.position="fixed";
		    		this.style.top="50vh";
		    		this.style.left="50vw";
		    		this.style.zIndex="99";

		    	} else if (e.shiftKey) {
		    		this.style.position="absolute";
		    		xPos = e.clientX - rect.left; //x position within the element.
					yPos = e.clientY - rect.top;  //y position within the element.
		    		console.log("ShiftLeft: " + xPos + " ; ShiftTop : " + yPos + ".");
		    		this.style.top=yPos+'px';
		    		this.style.left=xPos+'px';
		    	}
			})
	}
}
// })


var transformCounter=0;
function transformClass(makerString, classString){
	element=document.getElementsByClassName(classString)[0];
	// for (var i=0;i<classString.length;i++){
		if(transformCounter==0){
			element.src="assets/"+makerString+"/"+classString+"2.png";
			transformCounter++;
		} else if(transformCounter==1){
			element.src="assets/"+makerString+"/"+classString+"1.png";
			transformCounter=0;
		}
	// }
}
var transformIdCounter=0;
function transformId(makerString, idString){
	element=document.getElementById(idString);
	// for (var i=0;i<classString.length;i++){
		if(transformIdCounter==0){
			element.src="assets/"+makerString+"/"+idString+"2.png";
			transformIdCounter++;
		} else if(transformIdCounter==1){
			element.src="assets/"+makerString+"/"+idString+"1.png";
			transformIdCounter=0;
		}
	// }
}
var showCounter = 0;
function showInventory(idString){
	element = document.getElementById(idString);
	if(showCounter==0){
		element.style.display='block';
		showCounter++;
	} else if (showCounter==1){
		element.style.display='none';
		showCounter=0;
	}
}
var sunglassesCounter = 0;
function showGlasses(){
	seller = document.getElementsByClassName("sunglass-seller")[0];
	sunglasses =  document.getElementById("sunglasses")
	if(showCounter==0){
		seller.src="assets/kay/sunglass-seller2.png";
		sunglasses.style.display='block';
		showCounter++;
	} else if (showCounter==1){
		seller.src="assets/kay/sunglass-seller1.png";
		sunglasses.style.display='none';
		showCounter=0;
	}
}
var lizzyCounter = 0;
function changeLizzy(){
	lizzy = document.getElementsByClassName('lizzy')[0];
	if(lizzyCounter==0){
		lizzy.src="assets/aziz/lizzy2.png";
		lizzyCounter++;
	} else if (lizzyCounter==1){
		lizzy.src="assets/aziz/lizzy3.png";
		lizzyCounter++;
	} else if (lizzyCounter==2){
		lizzy.src="assets/aziz/lizzy4.png";
		lizzyCounter++;
	} else if (lizzyCounter==3){
		lizzy.src="assets/aziz/lizzy.png";
		lizzyCounter=0;
	}
}

var heartCounter = 0;
function changeHeart(){
	heart = document.getElementById('scarletHeart');
	if(heartCounter==0){
		heart.src="assets/scarlet/heart-fancy.png";
		heartCounter++;
	} else if (heartCounter==1){
		heart.src="assets/scarlet/heart-happy.png";
		heartCounter++;
	} else if (heartCounter==2){
		heart.src="assets/scarlet/heart-sad.png";
		heartCounter++;
	} else if (heartCounter==3){
		heart.src="assets/scarlet/heart-fancy.png";
		heartCounter=0;
	}
}

var tamoCounter = 0;
function ageTamo(){
	tamo = document.getElementsByClassName('tamo')[0];
	if(tamoCounter==0){
		tamo.src="assets/kay/tamo2.png";
		tamoCounter++;
	} else if (tamoCounter==1){
		tamo.src="assets/kay/tamo3.png";
		tamoCounter++;
	} else if (tamoCounter==2){
		tamo.src="assets/kay/tamo4.png";
		tamo.style.width="100px"
		tamoCounter++;
	} else if (tamoCounter==3){
		tamo.src="assets/kay/tamo5.png";
		tamo.style.width="130px"
		tamoCounter++;
	} else if (tamoCounter==4){
		tamo.src="assets/kay/tamo1.png";
		tamo.style.width="70px"
		tamoCounter=0;
	}
}
var pinCounter = 0;
function transformPin(idString){
	element = document.getElementById(idString);
	if(pinCounter==0){
		element.src="assets/bowling/pin-fall.png";
		element.style.width="108px";
		pinCounter++;
	} else if (pinCounter==1){
		element.src="assets/bowling/pin.png"
		element.style.width="70px";
		pinCounter=0;
	}
}
