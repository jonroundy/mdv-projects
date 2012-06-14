
var json = {
	"friends": {
		"001435235": {
			"name": "Chris",
			"age": 30
		},
		"001435236": {
			"name": "Scott",
			"age": 42
		},
		"001435237": {
			"name": "Jason",
			"age": 32
		}
	}		
};

json.friends["001435235"].name //or I can ["name] at the end of for another allowed syntax

/*for (var key in json.friends){
	var friend = json.friends[key]
	friend.name // or age or what ever data I am trying to pull
};
*/

var json2 = {
	"friends": [
		{
			"uuid": "001435235",
			"name": "Chris",
			"age": 30
		},
		{
			"uuid": "001435236",
			"name": "Scott",
			"age": 42
		},
		{
			"uuid": "001435237",
			"name": "Jason",
			"age": 32
		},
	]	
};

