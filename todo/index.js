console.log("works");

var completed_task = '' , remove_task = '';

document.getElementById('submit').addEventListener('click' , function() {
    var input = document.getElementById('input').value;

    if (input === '') {
        alert("no task enetred");
    } 

    else {
        var new_task = document.createElement('li');
        new_task.innerHTML = "<p>" + input + "</p>" + "<button id=remove onclick = task_delete()>❌</button><button id = completed onclick = task_completed()>✅</button>";

        new_task.id = 'task';
        new_task.className = 'task';

        var list = document.getElementById('todo-list').appendChild(new_task);

        clearInput();
    }
});

function task_completed() {
    var task_text = document.getElementById('task').querySelector('p');
    console.log(task_text.innerText);

    task_text.innerHTML = "<strike>" + task_text.innerText + "</strike>";
    task_text.style.color = 'greenyellow';
}

function task_delete() {
    var task = document.getElementById('task');
    console.log(task);
    task.style.visibility = "hidden";
    task.innerHTML = '';
    task.remove();
}

function clearInput() {
    document.getElementById('input').value = '';
}