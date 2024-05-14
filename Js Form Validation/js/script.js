function validate() 
{
    	const form = document.getElementById("form");
    	var username = document.getElementById("user");
   	var label_user = document.getElementById("l-user");
    	var email = document.getElementById("mail");
    	var label_email = document.getElementById("l-mail");
    	var password = document.getElementById("pass");
    	var label_password = document.getElementById("l-pass");
    	var age = document.getElementById("number");
    	var label_age = document.getElementById("l-number");
	var fileInput = document.getElementById("file");
	var label_file = document.getElementById("l-file");
	var date = document.getElementById("date");
	var label_date = document.getElementById("l-date");
    	var radio = document.getElementsByName("agreement"); // called by name.
    	var label_radio = document.getElementById("l-check");
    	var check = document.getElementsByName("language"); // called by name.
    	var english = document.getElementById("eng");
    	var french = document.getElementById("french"); 
    	var label_check = document.getElementById("l-lang");

    	var regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    	var valid = true;
    	var radioChecked = false;
    	var checkChecked = false;
	var red = "3px solid #bd0606";
	var green = "3px solid #24fc03";

    	if (username.value.trim() == "") 
	{
        	username.style.border = red;
       		label_user.style.visibility = "visible";
        	valid = false;
    	} 
	else 
	{
       		username.style.border = green;
        	label_user.style.visibility = "hidden";
    	}

    	if (email.value.trim() == "" || !email.value.match(regex)) 
	{
        	email.style.border = red;
        	label_email.innerHTML = "Invalid Email!";
        	valid = false;
    	} 	
	else 
	{
        	email.style.border = green
        	label_email.innerHTML = "";
    	}

    	if (password.value.trim().length < 8) {
        	password.style.border = red;
        	label_password.innerHTML = "Password must contain 8 characters!";
        	valid = false; 
    	} 
	else 
	{
        	password.style.border = green;
        	label_password.innerHTML = "";
    	}

    	if (age.value.trim() == "") {
        	age.style.border = red;
        	label_age.innerHTML = "Invalid Age!";
        	valid = false;
    	} 
	else 
	{
       		age.style.border = green
        	label_age.innerHTML = "";
    	}

	if (fileInput.files.length == 0)
	{
		label_file.innerHTML = "File Upload is Mandatory!";
		valid = false;
	}
	else
	{
		label_file.innerHTML = "";
	}

	if(!date.value)
	{
		label_date.innerHTML = "Date Field is Mandatory!";
		valid = false;
	}
	else
	{
		label_date.innerHTML = "";
	}

    	for (var i = 0; i < radio.length; i++) 
	{
        	if (radio[i].checked) 
		{
            		radioChecked = true;
            		break;
        	}
    	}
    	if (!radioChecked) {
        	label_radio.style.visibility = "visible";
        	valid = false;
    	} 
	else 
	{
        	label_radio.style.visibility = "hidden";
    	}

    	for (var i = 0; i < check.length; i++) 
	{
        	if (check[i].checked) 
		{
            		checkChecked = true;
            		break;
        	}
    	}
    	if (!checkChecked) 
	{
        	label_check.style.visibility = "visible";
        	valid = false;
    	}
	else 
	{
        	label_check.style.visibility = "hidden";
    	}

    	return valid;
}
