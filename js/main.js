//  ====================nav bar=====================
// Add hovered class to selected list
let list = document.querySelectorAll(".nav ul li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

//  ====================menu=====================
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");
let main = document.querySelector(".main");

toggle.onclick = function () {
  nav.classList.toggle("active");
  main.classList.toggle("active");
};

// Menu toggle for smaller screens
list.forEach((item) =>
  item.addEventListener("click", function () {
    if (window.innerWidth <= 480) {
      nav.classList.remove("active");
      main.classList.remove("active");
    }
  })
);
//  ====================task buttons=====================
// Get the necessary elements from the DOM
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");

// Function to load tasks from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    addTaskToDOM(taskText);
  });
}

// Function to add a task to the DOM
function addTaskToDOM(taskText) {
  const task = document.createElement("div");
  task.classList.add("task");

  const taskContent = document.createElement("div");
  taskContent.classList.add("content");

  const taskTextElement = document.createElement("input");
  taskTextElement.type = "text";
  taskTextElement.classList.add("text");
  taskTextElement.value = taskText;
  taskTextElement.readOnly = true;

  taskContent.appendChild(taskTextElement);

  const taskAction = document.createElement("div");
  taskAction.classList.add("action");

  const doneButton = document.createElement('button');
  doneButton.classList.add("done");
  doneButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  doneButton.onclick = function() {
    taskTextElement.style.textDecoration = 'line-through';
  };

  const cancelButton = document.createElement('button');
  cancelButton.classList.add("cancel");
  cancelButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

  cancelButton.onclick = function() {
    task.remove();
    removeTaskFromLocalStorage(taskTextElement.value);
  };

  taskAction.appendChild(doneButton);
  taskAction.appendChild(cancelButton);

  task.appendChild(taskContent);
  task.appendChild(taskAction);

  taskList.appendChild(task);
}

// Function to save task to local storage
function saveTaskToLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove task from local storage
function removeTaskFromLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(t => t !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Load tasks from local storage on page load
loadTasks();

// Add event listener to the form to handle task submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTaskToDOM(taskText);
    saveTaskToLocalStorage(taskText);

    taskInput.value = "";
  }
});