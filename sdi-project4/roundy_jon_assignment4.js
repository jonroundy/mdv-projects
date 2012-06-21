//Author: Jon Roundy
//SDI Project 3 1206 Week 4

//This is my project 4 library.
//Scenario 1 Does a string follow a 123-456-7890 pattern like a phone number?


var myLibrary = {
	function usNumValidation(inputedNumber) {
	
	var usNumPat = /^\(?([0-9]{3})\)?[-. ]?([0-9{3}])[-. ]?([0-9]{4})$/; //Regular Expression 

	if (usNumValidation.test(inputedNu)) { // Determines if inputed value matched pattern. 
			var inputedNumber = "";
			var validatedPhoneNumber = inputedNumber.replace(numberValidation, "($1) $2-$3");
			console.log("Phone number validated.")
		} else {
			console.log("Not a Valid Phone Number!") // Outputs string into console log
			alert("Please enter a valid phone number!") // For flavor please see index page of project to see use.
			return this;
	} 

	}

};
//alert(myLibrary.usNumValidation);

usNumValadation("912-342-7398");