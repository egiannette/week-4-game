var tina = {
	name: "tina",
	healthpoint: Math.floor(Math.random() * 500) + 1,
	attackpower: Math.floor(Math.random() * 100) + 1,
	counterattackpower: Math.floor(Math.random() * 100) + 1
}
var gene = {
	name: "gene",
	healthpoint: Math.floor(Math.random() * 500) + 1,
	attackpower: Math.floor(Math.random() * 100) + 1,
	counterattackpower: Math.floor(Math.random() * 100) + 1
}
var louise = {
	name: "louise",
	healthpoint: Math.floor(Math.random() * 500) + 1,
	attackpower: Math.floor(Math.random() * 100) + 1,
	counterattackpower: Math.floor(Math.random() * 100) + 1
}

var bob = {
	name: "bob",
	healthpoint: Math.floor(Math.random() * 500) + 1,
	attackpower: Math.floor(Math.random() * 100) + 1,
	counterattackpower: Math.floor(Math.random() * 100) + 1
}
var character = "";
var defender = "";

$( document ).ready(function() {


$("#attackBtn").on("click",function(){
	if( (character === "") || (defender === "")){
		//do nothing - the game isn't ready to play
		return;
	}
	console.log("character: " + character.name + "healthpoint: " + character.healthpoint);
	console.log("defender: " + defender.name + "healthpoint: " + defender.healthpoint);

	character.healthpoint -= character.counterattackpower;
	$("#characterHealth").html("Character Health " + character.healthpoint);
	if(character.healthpoint <= 0){
			// You lost
			console.log("you lost");
			character.healthpoint = Math.floor(Math.random() * 500) + 1;
			defender.healthpoint = Math.floor(Math.random() * 500) + 1;
			character="";
			defender = "";
			$("#restartBtn").show();
			alert("you lost!! hit restart to play again");

	}
	else{
			defender.healthpoint -= character.attackpower;
			$("#defenderHealth").html("Defender Health " + defender.healthpoint);
			if(defender.healthpoint <= 0){
				// You won, remove defender from row3
				//alert("defender is negative");
				//var defId = '#' + defender.name;
				console.log("you won.  this defender lost ");
				if(defender === tina){
					$("img").remove("#row4 #tina");
				}
				else if(defender === gene){
					$("img").remove("#row4 #gene");
				}
				else if(defender === louise){
					$("img").remove("#row4 #louise");
				}
				else if(defender === bob){
					$("img").remove("#row4 #bob");
				}
				//$("img").remove("#row4 defId");
				defender.healthpoint = Math.floor(Math.random() * 500) + 1;
				defender="";
				// See if there are other defenders in row2
				if( $('#row2').is(':empty') ){
				//if( !($('#row2:has(img)'))){
				// No defenders so you won the whole game, see if they want to play again
					$("#restartBtn").show(); 
					alert("you won!! hit restart to play again");
					character.healthpoint = Math.floor(Math.random() * 500) + 1;
					character="";
				}

			}
	}
})
$("#restartBtn").on("click",function(){
	character = "";
	defender = "";

	$("#tina, #gene, #louise, #bob").show();
	$("#row2, #row4").empty();

	//need to reload to fix restart - need to fix this..
	//location.reload();

})



$("#tina").on("click",function(){
	// 1.check to see if tina is my character or defender
	if(character === ""){		
		//2.if tina is my character
		character = tina;
		$("#characterHealth").html("Character Health " + character.healthpoint);

		// hide other3 characters inside row1 div
		$("#gene,#louise,#bob").hide();

		// append 3 characters to row2 div
		$("#row2").append('<img id="gene" src="assets/images/gene.jpg" style="width: 150px"/>');
		$("#row2").append('<img id="louise" src="assets/images/louise.jpg" style="width: 100px"/>');
		$("#row2").append('<img id="bob" src="assets/images/bob.jpg" style="width: 100px"/>');
	}
})

$("#gene").on("click",function(){
	// 1.check to see if gene is my character or defender
	if(character === ""){
		// 2.if gene is my character other 3 characters move to row2 div
		character = gene;
		$("#characterHealth").html("Character Health " + character.healthpoint);
		
		$("#tina, #louise, #bob").hide();

		$("#row2").append('<img id="tina" src="assets/images/tina.jpg" />');
		$("#row2").append('<img id="louise" src="assets/images/louise.jpg" />');
		$("#row2").append('<img id="bob" src="assets/images/bob.jpg" />');
	}	
})
$("#louise").on("click", function(){
	// 1.check to see if louise is my character or defender
	if(character === ""){
		// 2.if louise is my character other 3 characters move to row2 div
		character = louise;
		$("#characterHealth").html("Character Health " + character.healthpoint);
		
		$("#tina, #gene, #bob").hide();

		$("#row2").append('<img id="tina" src="assets/images/tina.jpg" />');
		$("#row2").append('<img id="gene" src="assets/images/gene.jpg" />');
		$("#row2").append('<img id="bob" src="assets/images/bob.jpg" />');
	}
	
})
$("#bob").on("click", function(){
	// 1.check to see if bob is my character or defender
	if(character === ""){
	// 2.if bob is my character other 3 characters move to row2 div
		character = bob;
		$("#characterHealth").html("Character Health " + character.healthpoint);
	
		$("#tina, #gene, #louise").hide();

		$("#row2").append('<img id="tina" src="assets/images/tina.jpg" />');
		$("#row2").append('<img id="gene" src="assets/images/gene.jpg" />');
		$("#row2").append('<img id="louise" src="assets/images/louise.jpg"/>');
	}	
	
})

$('#row2').on("click","#tina",function(){ 
	console.log("clicked tina");
	if(defender===""){
		
		defender=tina;
		$("#row4").append('<img id="tina" src="assets/images/tina.jpg" />');
		$("img").remove("#row2 #tina");
		$("#defenderHealth").html("Defender Health " + defender.healthpoint);

	}
})
$("#row2").on("click","#gene",function(){ 
	if(defender===""){
		defender=gene;
		$("#row4").append('<img id="gene" src="assets/images/gene.jpg" />');
		$("img").remove("#row2 #gene");
		$("#defenderHealth").html("Defender Health " + defender.healthpoint);
	}
})
$("#row2").on("click","#louise",function(){ 
	if(defender===""){
		defender=louise;
		$("#row4").append('<img id="louise" src="assets/images/louise.jpg" />');
		$("img").remove("#row2 #louise");
		$("#defenderHealth").html("Defender Health " + defender.healthpoint);
	}
})
$("#row2").on("click","#bob",function(){ 
	if(defender===""){
		defender=bob;
		$("#row4").append('<img id="bob" src="assets/images/bob.jpg" />');
		$("img").remove("#row2 #bob");
		$("#defenderHealth").html("Defender Health " + defender.healthpoint);
	}
})

})



