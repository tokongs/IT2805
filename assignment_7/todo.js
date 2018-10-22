let tasks = []
let current_num = 0;

function check() {
    let task = tasks.find( task => task.id == event.srcElement.id);

    if (event.srcElement.checked) {
        document.getElementById("l" + event.srcElement.id).style.textDecoration = "line-through";
        task.completed = true;
    }

    else {
        document.getElementById("l" + event.srcElement.id).style.textDecoration = "none";
        task.completed = false;
    }
    updateOutput();
}

function addTask() {
    const task = document.getElementById("task").value;
    if (!task || task.length === 0)
        return;

    list = document.getElementById("task_list");

    node = document.createElement("li");
    node.innerHTML = task;
    node.id = "l" + current_num;

    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = current_num;
    checkbox.addEventListener("click", check);

    var task_object = {
        text: task,
        timestamp: Date.now(),
        id: current_num,
        completed: false
    };

    tasks.push(task_object);

    node.appendChild(checkbox);
    list.insertBefore(node, list.childNodes[0]);

    document.getElementById("task").value = "";
    
    current_num++;
    updateOutput();
}

function updateOutput() {
    let num = 0;
    let completed = 0;
    for (i = 0; i < tasks.length; i++) {
        num += 1;
        if (tasks[i].completed)
            completed++;
    }

    document.getElementById("output").innerHTML = completed + '/' + num + " completed";
}

document.getElementById("add").addEventListener("click", addTask);