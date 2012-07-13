// Project 2: To Do List
// Visual Frameworks (VFW)
// Mobile Development
// Jon Roundy
// 1207 Week 2

window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function g(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//Create select field element and populate with options.
	function makeCats(){
			var formTag = document.getElementsByTagName("form"), //formag is an array of all the form tags.
				selectLi = g('select'),
				makeSelect = document.createElement('select');
				makeSelect.setAttribute("id", "groups");
			for(var i=0, j=categoryLists.length; i<j; i++){
				var makeOption = document.createElement('option');
				var optText = categoryLists[i];
				makeOption.setAttribute("value", optText);
				makeOption.innerHTML = optText;
				makeSelect.appendChild(makeOption);
			}
			selectLi.appendChild(makeSelect);
	}
	
	function getCheckboxVault(){
		if(g('urgent').checked){
			urgentValue = g('urgent').value;
		}else{
			urgentValue	= "No"
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				g('taskForm').style.display = "none";
				g('clear').style.display = "inline";
				g('displayLink').style.display = "none";
				g('addNew').style.display = "inline";
				break;
			case "off":
				g('taskForm').style.display = "block";
				g('clear').style.display = "inline";
				g('displayLink').style.display = "inline";
				g('addNew').style.display = "none";
				g('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	//Save data into local storage.
	function storeData(key){
			var id 					= Math.floor(Math.random()*100000001);
			//Gather up all our form field values and store in an object.
			//Object properties are going to contain array with the form label and input value
			getCheckboxVault();
			var item 				= {};
			item.cats 				= ["Category List: ", g("groups").value];
			item.taskname 			= ["My Task Name: ", g("taskname").value];
			item.date 				= ["Date: ", g("date").value];
			item.time 				= ["Time: ", g("time").value];
			item.urgent 			= ["Urgent: ", urgentValue];
			item.slider1			= ["Estimated Time.", g("slider1").value];
			item.textbox			= ["Notes: ", g("textbox").value];
			//Save data into Local Storage: Use Stringify to convert our object to a 	string. Local storage only stores strings.
			//Save form elements into LS
			localStorage.setItem(id, JSON.stringify(item));
			alert("Task Saved!");
}
	
	
	//Clear all data
	function clearLocal() {
		if(localStorage.lengh === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All tasks deleted.");
			window.location.reload();
			return false;
		}
		
	}
	
	function getData(){
			toggleControls("on");	
				if(localStorage.length === 0){
			alert("There are no task's to display.");
		}
		//Write Data from Local Storage to the browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		g('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from local storage value back to an object by using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				
			}
		}
	
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{	
			localStorage.clear();
			alert("All tasks deleted!")
			window.location.reload();
			return false;
		}
	}
	
	//Variable defaults
	var categoryLists = ["--Choose A Category--", "Personal", "Work", "Misc"],
		urgentValue = "No"
	;
	makeCats();
	
	//Set Link & ubmit Click Events
	
	var displayLink = g('displayLink');
	displayLink.addEventListener("click", getData);
	
	var clearLink = g("clear");
	clearLink.addEventListener("click", clearLocal);
	
	var save = g("submit");
	save.addEventListener("click", storeData);
	

	

});
