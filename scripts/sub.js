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