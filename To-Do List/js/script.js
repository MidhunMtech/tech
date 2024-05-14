var inputBox = document.getElementById("input-box");
var listElement = document.getElementById("listElement");
var alertMessage = document.getElementById("alert");

function addTask() {
	if (inputBox.value == ""){
		alertMessage.innerHTML = "Type Something!!!";
	} else {
		alertMessage.innerHTML = "";
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		//listElement.appendChild(li);
		listElement.insertBefore(li, listElement.firstChild);
		
		let span = document.createElement("span");
		span.innerHTML = "x";
		//li.appendChild(span);
		li.insertBefore(span, li.firstChild);
	}
	inputBox.value = "";
	saveData();
}

function saveData() {
	localStorage.setItem("data", listElement.innerHTML);
}

function showData() {
	listElement.innerHTML = localStorage.getItem("data");
}

listElement.addEventListener("click", function(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("checked");
	} else if (event.target.tagName === "SPAN") {
		event.target.parentElement.remove();
	}
	saveData();
}, false)

inputBox.addEventListener("keypress", function(event) {
  	if (event.key === "Enter") {
    	document.getElementById("add").click();
  	}
});

showData();