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
	inventory=document.getElementsByClassName('game');
	element=document.getElementById('maze');
		if(mazeCounter==0){
			element.src="../assets/places/maze1.png";
			for (var i=0;i<inventory.length;i++){
			inventory[i].style.display="block";
			}
			mazeCounter++;
		} else if(mazeCounter==1){
			element.src="../assets/places/maze2.png";
			for (var i=0;i<inventory.length;i++){
			inventory[i].style.display="block";
			}
			mazeCounter++;
		} else if(mazeCounter==2){
			element.src="../assets/places/maze3.png";
			for (var i=0;i<inventory.length;i++){
			inventory[i].style.display="block";
			}
			mazeCounter++;
		} else if(mazeCounter==3){
			element.src="../assets/places/maze4.png";
			for (var i=0;i<inventory.length;i++){
			inventory[i].style.display="block";
			}
			mazeCounter++;
		} else if(mazeCounter==4){
			element.src="../assets/places/maze5.png";
			for (var i=0;i<inventory.length;i++){
			inventory[i].style.display="block";
			}
			mazeCounter++;
		} else if(mazeCounter==5){
			element.src="../assets/places/maze6.png";
			for (var i=0;i<inventory.length;i++){
			inventory[i].style.display="block";
			}
			mazeCounter=0;
		}
}
