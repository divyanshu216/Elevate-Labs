// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener to the Add button
addButton.addEventListener('click', addTask);

// Add event listener for Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', () => toggleTaskCompletion(li, checkbox));

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => li.remove());

    // Append elements to list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}

// Toggle task completion
function toggleTaskCompletion(li, checkbox) {
    li.classList.toggle('completed', checkbox.checked);
}