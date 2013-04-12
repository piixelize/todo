var uniqueId = 0; 
var numItems = 0;
var checked = {};

function addTask() {

	var value = document.getElementById('newTask').value;

	var emptyTest = value.trim();
	if (emptyTest) {
		createTask(value);
		uniqueId++;
		numItems++;
		updateTaskTotal();
	}

	resetForm();
}

function resetForm() {
	document.getElementById('newTask').value = "";
	document.getElementById('newTask').focus();
}

function createTask(value) {
	var outerdiv = document.getElementById("container");
	var div = document.createElement("div");
	div.className = "task";
	div.id = "item" + uniqueId;

	var input = document.createElement("input");
	input.id = "input" + uniqueId;
	input.type = "checkbox";
	input.onclick = check;

	var label = document.createElement("label");
	label.id = "label" + uniqueId;
	label.appendChild(document.createTextNode(" " + value));

	// var delbutton = document.createElement("button");
	// delbutton.className = "delete";
	// delbutton.innerHTML = "delete";
	// delbutton.onclick = function() {deleteTask(div.id)};

	div.appendChild(input);
	div.appendChild(label);
	//div.appendChild(delbutton);
	outerdiv.appendChild(div);
}

var check = function() {
	var idNum = getId(this.id);
	var label = document.getElementById("label" + idNum);
	if (this.checked) {
		label.className = "strike"
		checked[idNum] = true;
	}
	else {
		label.className = "normal"
		delete checked[idNum];
	}

}

function deleteTask(id) {
	var div = document.getElementById(id);
	var outerdiv = document.getElementById("container");
	outerdiv.removeChild(div);
	numItems--;
	updateTaskTotal();
}

function deleteTasks() {
	// find all checked tasks
	var outerdiv = document.getElementById("container");
	for (id in checked) {
		var child = document.getElementsById("item" + id));
		outerdiv.removeChild(child);
		numItems--;
	}
	updateTaskTotal();
}

// function checkAll() {

// }


function getId(id_string) {
	return id_string.charAt(id_string.length - 1);
}

function handleEnter(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		addTask();
	}
}

function checkFirst() {
	var form = document.getElementById("newTask");
	if (form.value == "enter a task") {
		form.value = "";
	}
}

function updateTaskTotal() {
	var total = document.getElementById("taskTotal");
	total.innerHTML = numItems + " task(s)";
}

// function ToDoList() {
// 	this.counter = 0;
// }

// function Item(index, task) {
// 	this.id = index;
// 	this.content = task;
// }