//alert("JavaScript works!");

// An object allows me to call upon a key ie name = job which can be called upon to give the value ie = "teacher"
// In the situtation of needing to use a value of 0 as the begining value javascript will not see it use a string in these situations
// While using an object I can also use another array of data within it. Allowing for more complex code that rests within another complex data type
var student = { id: "0000111", 
				name: "Jon", 
				intrests:[
				"JavaScript", 
				"HTML", 
				"CSS", 
				"Flash"
	], 
	age: 503423,
	sayHi: function () {
		console.log("Hi");
	}.
	address: {
		street: 43432,
		city: "Rainbow City"
		state: "Alabama"
	}
}; // End of object

var key = "intrests";

//This will show all values listed inside the object
console.log(student);

//gives me access to the requested value
console.log( student.id)

//This is also another method of pulling the data from an object similiar to how we access arrays. ie "intrests" will give me that value
console.log( student["intrests"])

//Using this method I can set a variable with any name and call a value from within my object and pull it through the var with the called object value
console.log( student[key] );

// when ever a key is used within an object to specify a value anything other then a function are called Property!
//if we use a key to store a function we call this a method

console.log( student["sayHi"] );

student.sayHi();
student["sayHi"]();

student.sayHi = function () {
		console.log("Get lost.");
};

// to run a loop within an object
for (var key in student) {
		console.log("key: " + key + ", value: ", student[key]);
	
};

var handleData = function (json) {
	console.log(json);
};

handleData(json2);
