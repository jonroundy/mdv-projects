// Project 1
// Author: Jon Roundy
//alert("JavaScript works!");

	var myName = "Jon";
	var tempHigh = 80;
	var tempLow = 70;
	var todaysTemp = 94;
	var classWork = "schoolwork";
	var workToday = true;
	var videoGame = "League of Legends";

	console.log("Hello everyone my name is", myName + ".");
	console.log("Depending on what day it is I may have", classWork + ", or I may have to go to work.");
	console.log("If the temperature is over", tempHigh + " degrees I will wear shorts for the day.");
	console.log("If the temperature is under", tempLow + " degrees I will wear pants for the day." );
	console.log("The high today is", todaysTemp + " degrees." );
	console.log("What will the day bring us?");

//Actions that will odor if I do work today.

	if (workToday) {
 		
 				if (todaysTemp > tempHigh) { 
 					
 						console.log( "Looks like I'm wearing shorts and going to work today.");
 		
 				} else {
 				
 					var difference = tempHigh - tempLow	;
 					
 						console.log("if it was only", difference + " degrees hotter out today I would be wearing shorts and not pants to work." )
 					};
 	
 	} else 	{
			
				if (videoGame=="League of Legends") {
					
						console.log("Yay looks like no schoolwork and I get to play League of Legends.");
				
				} else {
				
						var sw = "Look's like I'm not playing " + videoGame + " I better get started on my " + classWork ;
					
						console.log(sw);		
						};
	
			};