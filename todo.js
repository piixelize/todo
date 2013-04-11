function ToDoList() {
	this.items = {};
	this.counter = 0;
}

ToDoList.prototype.add = function() {
	var id = "item" + this.counter;
	this.counter++;
	var value = document.getElementById('newItem').value;

	this.items[id] = new Item(id, value);
	
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.id = id;
	li.appendChild(document.createTextNode(value));
	ul.appendChild(li);
	document.getElementById('newItem').value = "";
	document.getElementById('newItem').focus();

}

ToDoList.prototype.remove = function(id) {
	var ul = document.getElementById("list");
	var li = document.getElementById(id);
	ul.removeChild(li);
	delete this.items[id];
}

function Item(index, task) {
	this.id = index;
	this.content = task;
}

function handleEnter(event) {
	if (event.keyCode == 13) 
		alert("hi");
		//list.add();
}

var list = new ToDoList();