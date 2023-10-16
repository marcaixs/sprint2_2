
// Exercise 6
function validate() {
	var error = 0;
	let errorMessage = "";
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || !fName.value.match(/^[a-zA-Z]+$/)){
		fName.classList.add("is-invalid");
		error++;
	}else{
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	};

	if(fLastN.value == "" || fLastN.value.length < 3 || !fLastN.value.match(/^[a-zA-Z]+$/)){
		fLastN.classList.add("is-invalid");
		error++;
	}else{
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	};

	if(fAddress.value == "" || fAddress.value.length < 3){
		fAddress.classList.add("is-invalid");
		error++;
	}else{
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	};

	if(fEmail.value == "" || fEmail.value.length < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)){
		fEmail.classList.add("is-invalid");
		error++;
	}else{
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	};

	if(fPassword.value == "" || fPassword.value.length < 3 || !fPassword.value.match(/^[a-zA-Z0-9]+$/)){
		fPassword.classList.add("is-invalid");
		error++;
	}else{
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	};

	if(fPhone.value == "" || fPhone.value.length < 3 || !fPhone.value.match(/^[0-9]+$/) ){
		fPhone.classList.add("is-invalid");
		error++;
	}else{
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	};
	 
	if(error>0){
		alert("Please enter all fields correctly");
		return false;
	}else{
		alert("OSubmitted form.");
		return true;
	};

}
