var counter = 0; 

function add() {
	var id = "item" + counter;
	counter++;
	var value = document.getElementById('newItem').value;

	var emptyTest = value.trim();
	if (emptyTest == "") {
		alert("yo");
	}
	else {
		createTask(id, value);
	}

	resetForm();
}

function resetForm() {
	document.getElementById('newItem').value = "";
	document.getElementById('newItem').focus();
}

function createTask(id, value) {
	var outerdiv = document.getElementById("container");
	var div = document.createElement("div");
	div.className = "task";
	div.id = id;

	var input = document.createElement("input");
	input.type = "checkbox";

	var label = document.createElement("label");
	label.appendChild(document.createTextNode(" " + value));

	var delbutton = document.createElement("button");
	delbutton.className = "delete";
	delbutton.innerHTML = "delete";
	delbutton.onclick = function() {deleteTask(id)};

	div.appendChild(input);
	div.appendChild(label);
	div.appendChild(delbutton);
	outerdiv.appendChild(div);
}

function deleteTask(id) {
	var div = document.getElementById(id);
	var outerdiv = document.getElementById("container");
	outerdiv.removeChild(div);
}

function handleEnter(event) {
	if (event.keyCode == 13) 
		alert("hi");
		//list.add();
}

// function ToDoList() {
// 	this.counter = 0;
// }

// function Item(index, task) {
// 	this.id = index;
// 	this.content = task;
// }