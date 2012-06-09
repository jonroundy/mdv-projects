//alert("JavaScript works!");

var teamName;
var teamCount = 5;
var turretCount = ["Top Lane 1", "Top Lane 2", "Mid Lane 1", "Mid Lane 2", "Bottom Lane 1", "Bottom Lane 2"];
var readyToPlay = true;

var rushBase = "towers are down charge the base!";
var atkNexus = "we are in attack the nexus!";
var turretsAllDown = false;

var notReady = false;
var otherTeamReady = true;


function letsPlay(weekEnd){

	if (weekEnd === true) {
		return console.log("Yes I have time to play.");
	} else {
		return console.log("No I do not have time to play");
	}

};
letsPlay(weekEnd);

function startMatch(){
	var notReady = false;
	var otherTeamReady = true;
	
	if ((otherTeamReady && readyToPlay) || notReady) {
		console.log("I will gather my team and start the match.");
	} else {
		console.log("We need all members to start the match.");
		
	};
	
	
}; // Boolean function
startMatch();

var towerTakeDown = function(){
	for(var i = 0; i < 6; i++){
		var towerNames = [
			"Top 1",
			"Top 2",
			"Middle 1",
			"Middle 2",
			"Bottom 1",
			"Bottom 2",
	];
	
	console.log("Once match is started we need to take out towers " + towerNames[i] )
	}
	return  i


};


towerTakeDown();

var lanesAttacked = function(){

	var towersStanding = 6;
	while (towersStanding > 0) {
	console.log(towersStanding + " Towers need to be destroyed before we can rush base!");
	towersStanding--;
	};
		
	}; // End of number function
lanesAttacked();

myFunction('Harry Potter' , 'Wizard'){
function myFunction(name,job)
console.log("welcone" + name + ", the " job);
}
	

}; //end of string function

/*
var rushBase = "towers are down charge the base!";
var atkNexus = "we are in attack the nexus!";
var turretsAllDown = false;

var letsAttack = function(){
	var test 1

	if(turretsAllDown === true) {
		 console.log("Everyone the " + rushBase + " Ok everyone " + atkNexus );
	} else {
		console.log("there is nothing left we can do");
	};
*/

