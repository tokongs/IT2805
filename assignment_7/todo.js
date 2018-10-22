tasks = []

var task_object = {
    text:"",
    timestamp: Date.now()
};

function addTask(){
    const task = document.getElementById("task").value;
    if(!task || task.length === 0)
        return;

    list = document.getElementById("task_list");

    node = document.createElement("li");
    node.innerHTML = task;

    list.insertBefore(node, list.childNodes[0]);

    task_object.text = task;
    task_object.timestamp = Date.now()
    tasks.push(task_object)

    console.log(tasks)
    document.getElementById("task").value = "";

}

document.getElementById("add").addEventListener("click", addTask);