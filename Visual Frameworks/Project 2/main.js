// Project 2: To Do List
// Visual Frameworks (VFW)
// Mobile Development
// Jon Roundy
// 1207 Week 2

window.addEventListener("DOMContentLoaded", function(){

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