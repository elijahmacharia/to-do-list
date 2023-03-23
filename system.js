let taskCounter = 1;

function addTask() {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${taskCounter}. ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">Delete</button>
            </div>
        `;

        document.querySelector('#newtask input').value = '';
        taskCounter++;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

document.querySelector('#push').onclick = addTask;

document.querySelector('#newtask input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
