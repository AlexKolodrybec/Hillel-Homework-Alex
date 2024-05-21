document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
});

function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText.trim()) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = taskText + ' <button>Видалити</button>';
        document.getElementById('taskList').appendChild(li);
        document.getElementById('newTask').value = '';
    }
}