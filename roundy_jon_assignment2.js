//alert("JavaScript works!");

var teamName;
var teamCount = 5;
var turretCount = ["Top Lane 1", "Top Lane 2", "Mid Lane 1", "Mid Lane 2", "Bottom Lane 1", "Bottom Lane 2"];
var readyToPlay = true;

// Notes while I am coding
//turretCount.push( "lane 4" ); 			//Will push lane to the next available value in my array
//turretCount.unshift( "lane4" ); 			//Will push lane4 to the beginning of my array
//turretCount.pop();						//Will remove what ever value is at the end of my array
//turretCount.shift();						//Will remove what ever value is at the beg of my array

var letsPlay = function(){
	var yes = "Yes I have time to play";
	var no = "No I do not have time to play.";
	var weekEnd = true;
	
	if (weekEnd === true) {
		console.log(yes);
	} else {
		console.log(no);
	}

}; // Procedure
letsPlay();

//If we can play

function startMatch(){
	var notReady = false;
	var otherTeamReady = true;
	
	if ((otherTeamReady && readyToPlay) || notReady) {
		console.log("I will gather my team and start the match.");
	} else {
		console.log("We need all members to start the match.");
		
	};
	
	
}; //end startMatch - Boolean
startMatch();

var turretTakeDown = function(){
	for(var i = 0; i < 6; i++){
		var turretNames = [
			"Top 1",
			"Top 2",
			"Middle 1",
			"Middle 2",
			"Bottom 1",
			"Bottom 2",
	];
	
	console.log("Once match is started we need to take out turrets " + turretCount[i] )
	}



}; // End of turretTakeDown array function

turretTakeDown();


//console.log(turretCount[1])

// for (var i=2; j=turretCount.length; i < 3; i++) {
//	console.log(turretCount[i])
//}; // This will show the values in my array until 0 is less then 3 - I can also use length if i want it to run to end or change the equation


