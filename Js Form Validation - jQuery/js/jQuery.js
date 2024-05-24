$(document).ready(function() {
   	$("#submitId").click(function() {
        	var user = $("#userName").val();
		var mail = $("#mail").val();
		var pass = $("#pass").val();
		var age = $("#age").val();
		var file = $("#file").val();
		var date = $("#date").val();
		var check = $('[name="language"]');
		var radio = $('[name="agreement"]');

		var valid = true;
		var checkChecked = false;
		var radioChecked = false;
		var regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
		
        	if(user.trim().length == "") {
            		$("#lUser").show();
            		valid = false;
        	} else {
            		$("#lUser").hide();  
        	}

		if(!mail.match(regex)) {
			$("#lMail").show();
			valid = false;
		} else {
			$("#lMail").hide();
		}

		if(pass.trim().length < 8) {
			$("#lPass").show();
			valid = false;
		} else {
			$("#lPass").hide();
		}

		if(age.trim().length == "") {
			$("#lAge").show();
			valid = false;
		} else {
			$("#lAge").hide();
		}

		if(file.length === 0) {
			$("#lFile").show();
			valid = false;
		} else {
			$("#lFile").hide();
		} 

		if(date.length === 0) {
			$("#lDate").show();
			valid = false;
		} else {
			$("#lDate").hide()
		}
		
		for (var i = 0; i < check.length; i++) {
			if (check[i].checked)
			{
				checkChecked = true;
				break;
			}
		}
		if(!checkChecked){
			$("#lLang").show();
			valid =  false;
		} else {
			$("#lLang").hide();
		}

		for (var i = 0; i < radio.length; i++) {
			if (radio[i].checked)
			{
				radioChecked = true;
				break;
			}
		}
		if(!radioChecked){
			$("#lAgree").show();
			valid =  false;
		} else {
			$("#lAgree").hide();
		}

        	return valid;
    	});
});
