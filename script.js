// Load tasks from local storage on page load
window.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    // Add to DOM
    addTaskToDOM(task);

    // Save to local storage
    saveTask(task);

    input.value = "";
    input.focus();
    updateTaskCount();
}

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.id = `task-${task.id}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", function() {
        toggleTask(task.id);
    });

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    span.addEventListener("click", function() {
        toggleTask(task.id);
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", function() {
        deleteTask(task.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    updateEmptyState();
}

function toggleTask(taskId) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        const li = document.getElementById(`task-${taskId}`);
        li.classList.toggle('completed');
        li.querySelector('.checkbox').checked = task.completed;
    }
}

function deleteTask(taskId) {
    const tasks = getTasks();
    const filteredTasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    
    const li = document.getElementById(`task-${taskId}`);
    li.remove();
    updateTaskCount();
    updateEmptyState();
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function loadTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach(task => addTaskToDOM(task));
    updateTaskCount();
    updateEmptyState();
}

function clearCompleted() {
    const tasks = getTasks();
    const incompleteTasks = tasks.filter(t => !t.completed);
    localStorage.setItem('tasks', JSON.stringify(incompleteTasks));
    loadTasks();
}

function clearAll() {
    if (confirm('Are you sure you want to delete all tasks?')) {
        localStorage.removeItem('tasks');
        loadTasks();
    }
}

function updateTaskCount() {
    const tasks = getTasks();
    document.getElementById('taskCount').textContent = tasks.length;
}

function updateEmptyState() {
    const taskList = document.getElementById("taskList");
    const emptyState = document.getElementById("emptyState");
    emptyState.style.display = taskList.children.length === 0 ? "block" : "none";
}

// Allow Enter key to add task
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});