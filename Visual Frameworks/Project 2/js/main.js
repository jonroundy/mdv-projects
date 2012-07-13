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
	
	//Save data into local storage.
	function storeData(key){
			var id = Math.floor(Math.random()*100000001);
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
	
	
	//Variable defaults
	var categoryLists = ["--Choose A Category--", "Personal", "Work", "Misc"],
		urgentValue = "No"
	;
	makeCats();
	
	
	
	//Set Link & ubmit Click Events
	//var displayLink = g('displayLink');
	//displayLink.addEventListener("click", getData);
	
	//var clearLink = g("clear");
	//clearLink.addEventListener("click", clearLocal);
	
	var save = g("submit");
	save.addEventListener("click", storeData);
	

});




/*
	//getElementById Funtion
	function f(x){
			var theElement = document.getElementById(x);
			return theElement;
	}

	//Define Vars
	var pw = t('password');
	var cpw = t('conirm');
	var check = t('submit');

	//console.log(pw);
	var checkpw = function(){
		if(pw.value != ""){
			cpw.removeAttribute("disabled", "disabled");
		}else{
			cpw.setAttribute("disabled", "disabled");
			
		}
	};
		
		var compare = function(){
		if(){
			alert("The passwords match!")	
		}else{}
			alert("The passwords DO NOT match!");
		}
	};
	
		pw.addEventListener("blur", checpw)
		check.addEventListener("click", compare);
});
*/