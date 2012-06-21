//Author: Jon Roundy
//SDI Project 3 1206 Week 4

//This is my project 4 library.
var library = function (){

//Scenario 1 Does a string follow a 123-456-7890 pattern like a phone number?
//The function uses a pattern of a series of 10 numbers formated in 3 sections two sets of 3 digits and one set of 4.
// Problem 1 starts here

 var usNumValidation = function (inputedNum) {
	
	var value = "inputedNum";
	var	usNumPat = /^\(?([0-9]{3})\)?[\-. ]?([0-9]{3})[\-. ]?([0-9]{4})$/;
	// Above - Regular Expression, a pattern is used to check if the supplied values match the criteria
		if (usNumPat.test(inputedNum)) {  // Determines if value is within pattern rules
				console.log("Phone number validated."); // Sends string into console log
		} else {
				console.log("Not a valid Phone Number!"); // Sends string into console log
			return this;
	}

	}; // End of Problem 1.

// Problem 2 Starts here

 var emailValidation = function (emailInfo) {
	
	var emailAddress = "emailInfo";
	var	emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/; //Regular Expression
		if (emailPat.test(emailInfo)) {  // Determines if value is within pattern rules
				console.log("Email address validated."); // Sends string into console log
		} else {
				console.log("Not a valid email address!"); // Sends string into console log
			return this;
	}

	}; // End of Problem 1.

return{
	"usNumValidation" : usNumValidation,
	"emailValidation" : emailValidation

	};
	// End of function returns
};
// End of library

// Function Calls
// Problem 1

var lib = library();
lib.usNumValidation("912-342-7398");
lib.emailValidation("test@abc.com");


