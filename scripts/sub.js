const thing = document.querySelectorAll('.avatar,.wide-avatar,.medium-item');

for (var i = 0; i < thing.length; i++) {
    thing[i].addEventListener('click', function(e) { 
    	if (e.altKey) {
    		console.log(this);
    		this.style.display="none";
    	}
	})	
}

var transformCounter=0;
function transform(makerString,idString){
	element=document.getElementById(idString);
		if(transformCounter==0){
			element.src="../assets/"+makerString+"/"+idString+"2.png";
			transformCounter++;
		} else if(transformCounter==1){
			element.src="../assets/"+makerString+"/"+idString+"1.png";
			transformCounter=0;
		}
}
var transformIdCounter=0;
function transformId(makerString, idString){
	element=document.getElementById(idString);
	// for (var i=0;i<classString.length;i++){
		if(transformIdCounter==0){
			element.src="../assets/"+makerString+"/"+idString+"2.png";
			transformIdCounter++;
		} else if(transformIdCounter==1){
			element.src="../assets/"+makerString+"/"+idString+"1.png";
			transformIdCounter=0;
		}
	// }
}

var mazeCounter=0;
function transformMaze(){
	element=document.getElementById('maze');
	// for (var i=0;i<classString.length;i++){
		if(mazeCounter==0){
			element.src="../assets/places/maze1.png";
			mazeCounter++;
		} else if(mazeCounter==1){
			element.src="../assets/places/maze2.png";
			mazeCounter++;
		} else if(mazeCounter==2){
			element.src="../assets/places/maze3.png";
			mazeCounter++;
		} else if(mazeCounter==3){
			element.src="../assets/places/maze4.png";
			mazeCounter=0;
		}
	// }
}
