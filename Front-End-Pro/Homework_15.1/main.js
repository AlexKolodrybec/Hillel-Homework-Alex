document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoToDOM(todo));
    };

    const saveTodos = () => {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(item => {
            const description = item.querySelector('.todo-item__description').innerText;
            const checked = item.querySelector('input[type="checkbox"]').checked;
            todos.push({ description, checked });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const addTodoToDOM = ({ description, checked }) => {
        const li = document.createElement('li');
        li.className = `todo-item ${checked ? 'todo-item--checked' : ''}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checked;
        checkbox.addEventListener('change', () => {
            li.classList.toggle('todo-item--checked');
            saveTodos();
        });

        const span = document.createElement('span');
        span.className = 'todo-item__description';
        span.innerText = description;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'todo-item__delete';
        deleteButton.innerText = 'Видалити';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTodos();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        todosWrapper.appendChild(li);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = input.value.trim();
        if (description) {
            addTodoToDOM({ description, checked: false });
            saveTodos();
            input.value = '';
        }
    });

    loadTodos();
});