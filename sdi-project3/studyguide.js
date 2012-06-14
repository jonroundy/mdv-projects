
// An object allows me to call upon a key ie name = job which can be called upon to give the value ie = "teacher"
// In the situtation of needing to use a value of 0 as the begining value javascript will not see it use a string in these situations
// While using an object I can also use another array of data within it. Allowing for more complex code that rests within another complex data type
var reagent = { id: "10533", 
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
	},
	address: {
		street: 43432,
		city: "Rainbow City",
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
	for (var i = 0; i < json.friends.length; i++){
		var friend = json.friends[i];
		console.log("User ID: " + friend.uuid + ", Name: " + friend.name + ", Age: " + friend.age);
	};
};

handleData(json2);

//
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);

/*--------------------------------------------*/

// Dauntless, Interceptor, Bounty, Enterprise


var dauntless = { name: "Dauntless", hold: [] };
/*
var interceptor = { name: "Interceptor", hold: [] };
var bounty = { name: "Bounty", hold: [] };
var enterprise = { name: "Enterprise", hold: [] };
dauntless.hold.push("oranges");
bounty.hold.push("rum");
enterprise.hold.push("elephants");
*/

// Constructor a function that builds objects - MODULE PATTERN
var pirateShip = function (name) {
	//PRIVATE Data - which means we can only see the data within the function.
	var cargoHold = [];
	var crew = [];
	var cargoLoad = function (item) {
		if (item !== "elephants"){
			cargoHold.push(item);
		} else {
			console.log("Not allowed to load elephants!");
		}
		
	};
	var cargoList = function () {
		for (var n = 0; n < cargoHold.length; n++) {
			console.log(name + " cargo " + n + ": " +
				cargoHold[n] + ".");
		}
	};
	var getName = function () { return name; };
	return { // PUBLIC
		"name": getName,
		//"captain": getCaptain, //not a function but if it were to be used it would need to be
		"crewLoad": crewLoad,   //Methods from here to list
		"crewUnload": crewUnload,
		"cargoLoad": cargoLoad,
		"cargoList": cargoList
	};
};
var dauntless = pirateShip("Dauntless");
// api : application programming interface
dauntless.cargoLoad("oranges");
dauntless.cargoLoad("elephants");
dauntless.cargoList();
console.log(dauntless.name()); // getter, accessor
console.log(dauntless);

//If a value is a function it is a "METHOD"

//The reason we want to hide certain data keeps information clean and to the point to not risk issues with code. This way we can set it to not allow certain information from not being able to be pushed into the 
