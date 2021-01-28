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
