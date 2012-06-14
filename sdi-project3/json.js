
var opponent = {
	"members": {
		"slot1": {
			"name": "Player 1",
			"hero": "Twitch"
		},
		"slot2": {
			"name": "Player 2",
			"hero": "Morgana"
		},
		"slot3": {
			"name": "Player 3",
			"hero": "Ryze"
		},
		"slot4": {
			"name": "Player 4",
			"hero": "Fiddlesticks"
		},
		"slot5": {
			"name": "Player 5",
			"hero": "Warwick"
		},	
	}		
};

//json.friends["001435235"].name //or I can ["name] at the end of for another allowed syntax

for (var key in opponent.members){
	var member = opponent.members[key]
	//friend.name // or age or what ever data I am trying to pull
};


var opponent2 = {
	"members": [
		{
			"slot": "1",
			"name": "Player 1",
			"hero": "Twitch"
		},
		{
			"slot": "2",
			"name": "Player 2",
			"hero": "Morgana"
		},
		{
			"slot": "3",
			"name": "Player 3",
			"hero": "Ryze"
		},
		{
			"slot": "4",
			"name": "Player 4",
			"hero": "Fiddlesticks"
		},
		{
			"slot": "5",
			"name": "Player 5",
			"hero":  "Warwick"
		},
	]	
};

