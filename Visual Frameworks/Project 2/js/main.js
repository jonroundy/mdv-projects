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
	
	//Variable defaults
	var categoryLists = ["--Choose A Category--", "Personal", "Work", "Misc"];
	makeCats();
	
	/*
	//Set Link & ubmit Click Events
	var displayLink = g('displayLink');
	displayLink.addEventLister("click", getData);
	var clearLink = g("clear");
	clearLink.addEventLister("click", clearLocal);
	var save = g("submit");
	save.addEventLister("click", storeData);
	
	*/

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