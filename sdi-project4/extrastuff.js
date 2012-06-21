 
 var usNumValidationForm = function (inputedNum) {
	
	
	var	usNumPat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //Regular Expression 
		if (usNumPat.test(inputedNum)) {
				var validatedPhoneNumber = inputedNum.replace(usNumPat, "($1) $2-$3");
				alert("Phone number validated."); // delete if I can't get this to work also.
		} else {
				alert("Not a Valid Phone Number!"); // Outputs string into console log
			return this;
	} 

	};
	// End of Function 1.
