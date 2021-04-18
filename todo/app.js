console.log("works");

document.getElementById('dark-mode').addEventListener('click' , function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});

document.getElementById('submit').addEventListener('click' , function() {
    var input = document.getElementById('task-input').value;
    
    if (input !== '') {

        var text = document.createElement('li');
        text.innerHTML = "<button>⭕</button><p>" + input + "</p>";

        // text.innerHTML.
        var new_task = document.getElementById('tasks').appendChild(text);
        new_task.id = "task";
        
        clearinput();
    }

    else {
        alert("No task entered.");
    }
});



document.getElementById('task').querySelector('button').addEventListener('click' , function() {
    if (document.getElementById('task') === '') {
        console.log("deleted nothing");
    } else {
        var remove_this = document.getElementById('task').querySelector('p');
        console.log(remove_this.innerText + " task completed");
        remove_this.innerHTML = "<strike>"+ remove_this.innerHTML + "</strike>";
        remove_this.style.color = '#66BB00';
    }
});

function clearinput() {
    document.getElementById('task-input').value = '';
}
