//Jon Roundy
//SDI Project 2
//Term 0612 Week 2

var teamName;
var towersStanding = 6;
var towersDestroyed = 0;
var turretCount = ["Top Lane 1", "Top Lane 2", "Mid Lane 1", "Mid Lane 2", "Bottom Lane 1", "Bottom Lane 2"];
var readyToPlay = true;
var rushBase = "towers are down charge the base!";
var atkNexus = "we are in attack the nexus!";
var turretsAllDown = true;
var notReady = false;
var otherTeamReady = true;
var weekEnd = true;
var towerNames = [
			"Top 1",
			"Top 2",
			"Middle 1",
			"Middle 2",
			"Bottom 1",
			"Bottom 2"
	];
var weWon = "Look at that we won the match!";

var letsAttack = function () {
	if(turretsAllDown === true) {
		console.log("Everyone the " + rushBase + " Ok everyone " + atkNexus);
	} else {
		console.log("there is nothing left we can do");
	};
}; //String function

var lanesAttacked = function (towersStanding) {
var totalTowers = 6;
var percentageDestroyed;
	while (towersStanding > 0) {
	percentageDestroyed = towersStanding/totalTowers;
	if (percentageDestroyed !== 1) {
	} else {
	console.log("100% of the towers have been destroyed.");
	return letsAttack(); 
	}
	towersStanding--;
	} 
		
}; // End of number function

var towerTakeDown = function (towerNames,towersDestroyed) {
	for(var i = towersDestroyed ; i < towersStanding; i++){
	console.log("Once match is started we need to take out towers " + towerNames[i] )
	}
	return lanesAttacked(i);

}; //end of array

var startMatch = function (readyToPlay,notReady,otherTeamReady) {
	if ((otherTeamReady && readyToPlay) || notReady) {
	console.log("I will gather my team and start the match.");
		return towerTakeDown(towerNames,towersDestroyed);
	} else {
		console.log("We need all members to start the match.");
		return false;
		
	};
	
}; // Boolean function

var letsPlay = function (weekEnd) {

	if (weekEnd === true) {
		console.log("Yes I have time to play.");
		return startMatch(readyToPlay,notReady,otherTeamReady);
	} else {
		console.log("No I do not have time to play");
		return false;
	}

}; //Procedure 
letsPlay(weekEnd);

var finish; 
	if (weekEnd === true) {
		console.log(weWon);
	}