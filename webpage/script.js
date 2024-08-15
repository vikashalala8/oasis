const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    const task = {
      text: taskText,
      completed: false,
      addedAt: new Date().toLocaleString()
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function renderTasks() {
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';
  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.text;
    if (task.completed) {
      taskElement.classList.add('completed');
      completedTasksList.appendChild(taskElement);
    } else {
      taskElement.classList.add('pending');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        markTaskCompleted(task);
      });
      taskElement.appendChild(checkbox);
      pendingTasksList.appendChild(taskElement);
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTask(task);
    });
    taskElement.appendChild(deleteBtn);
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      editTask(task);
    });
    taskElement.appendChild(editBtn);
  });
}

function deleteTask(task) {
  tasks = tasks.filter((t) => t !== task);
  renderTasks();
}

function editTask(task) {
  const newTaskText = prompt('Enter new task text:');
  if (newTaskText) {
    task.text = newTaskText;
    renderTasks();
  }
}

function markTaskCompleted(task) {
  task.completed = true;
  renderTasks();
}