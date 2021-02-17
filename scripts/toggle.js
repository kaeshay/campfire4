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