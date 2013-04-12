var uniqueId = 0; 
var numTasks = 0;
var checked = {};

function addTask() {

	var value = document.getElementById('newTask').value;

	var emptyTest = value.trim();
	if (emptyTest) {
		createTask(value);
		uniqueId++;
		numTasks++;
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
	div.id = "task_" + uniqueId;

	var input = document.createElement("input");
	input.id = "input_" + uniqueId;
	input.type = "checkbox";
	input.className = "taskCheckbox"
	input.onclick = function() {
		check(this); // how does this work?
	};

	var label = document.createElement("label");
	label.id = "label_" + uniqueId;
	label.appendChild(document.createTextNode(" " + value));

	div.appendChild(input);
	div.appendChild(label);
	outerdiv.appendChild(div);
}

function check(checkbox) {
	var idNum = getId(checkbox.id);
	var label = document.getElementById("label_" + idNum);
	if (checkbox.checked) {
		label.className = "strike"
		checked[idNum] = true;
	}
	else {
		label.className = "normal"
		delete checked[idNum];
	}

}

function checkAll(checkAllBox) {
	var taskDivs = document.getElementsByClassName("task");
	for (var i = 0; i < numTasks; i++) {
		var checkbox = taskDivs[i].childNodes[0];
		checkbox.checked = checkAllBox.checked;
		check(checkbox);
	}
}

function deleteTasks() {
	console.log(checked);
	var outerdiv = document.getElementById("container");
	for (var id in checked) {
		var child = document.getElementById("task_" + id);
		outerdiv.removeChild(child);
		numTasks--;
	}
	checked = {};
	updateTaskTotal();
	var checkAllBox = document.getElementById("checkAll");
	checkAllBox.checked = false;
}

function getId(idString) {
	var parts = idString.split("_");
	return parts[1];
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
	total.innerHTML = numTasks + " task(s)";
}