//alert("JavaScript works!");

// An object allows me to call upon a key ie name = job which can be called upon to give the value ie = "teacher"
// In the situtation of needing to use a value of 0 as the begining value javascript will not see it use a string in these situations
// While using an object I can also use another array of data within it. Allowing for more complex code that rests within another complex data type

var readyToPlay = true

var team = { 	name: "Viral", 
				members:[
				"Crazi", 
				"Tegom", 
				"Tonks", 
				"Rage",
				"Drag"
	], 
	rank: 89,
	sayHi: function () {
		console.log("Hi");
	},
	heros: {
		Crazi: "Gang Plank",
		Tegom: "Teemo",
		Tonks: "Shen",
		Rage: "Graves",
		Drag: "Shaco"
	},

	

}; // End of object
console.log(readyToPlay);
console.log(team.members.length);
var key = "members";

console.log( team["sayHi"] );

//team.sayHi();
//team["sayHi"]();

//team.sayHi = function () {
//		console.log("Get lost.");
//};

team.sayHi();

// to run a loop within an object
for (var key in team) {
		console.log("key: " + key + ", value: ", team[key]);
	
};

var teamRoster = function (team) {
	for (var i = 0; i < team.heros; i++){
		var members = team.heros[i];
		console.log("Player Slot: " + team.heros  + ", Player Name: " + member.name + ", Hero: " + member.hero);
	};
};

/*This will show all values listed inside the object*/
//console.log(student);

//gives me access to the requested value
//console.log( student.id)

//This is also another method of pulling the data from an object similiar to how we access arrays. ie "intrests" will give me that value
//console.log( student["intrests"])

//Using this method I can set a variable with any name and call a value from within my object and pull it through the var with the called object value
//console.log( student[key] );

// when ever a key is used within an object to specify a value anything other then a function are called Property!
//if we use a key to store a function we call this a method




//console.log(opponent.members["slot1"].name); //This pulls the single json value requested

var handleData = function (opponent) {
	for (var i = 0; i < opponent.members.length; i++){
		var member = opponent.members[i];
		console.log("Player Slot: " + member.slot + ", Player Name: " + member.name + ", Hero: " + member.hero);
	};
};

handleData(opponent2);

/*
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);
*/
