//  ====================nav bar=====================
// Add hovered class to selected list
let list = document.querySelectorAll(".nav ul li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}
//  ====================menu=====================
list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu toggle
let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");
let main = document.querySelector(".main");

toggle.onclick = function () {
  nav.classList.toggle("active");
  main.classList.toggle("active");
};


// This JavaScript code adds event listeners to the "Add Goal" and "Add Step" buttons, allowing users to add goals and steps dynamically. When a user adds a new goal, it creates a new box with a title and a delete button. When adding steps, it creates checkboxes along with the step text.
// Selecting elements
// const goalTitleInput = document.getElementById('goalTitle');
// const addGoalBtn = document.getElementById('addGoalBtn');
// const goalList = document.getElementById('goalList');

// // Storing goals in localStorage
// let goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];

// // Function to update localStorage
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Add step function inside a goal box
// function addStep(goalBox, goal) {
//   const stepInputValue = goalBox.querySelector('.new-step-input').value.trim();
//   if (stepInputValue) {
//     const stepItem = document.createElement('div');
//     stepItem.innerHTML = '<input type="checkbox">' + stepInputValue;
//     // Append the step item to the steps list within this goal box
//     const stepsList = goalBox.querySelector('.steps-list');
//     stepsList.appendChild(stepItem);

//     // Add step to local array and update local storage
//     goal.steps.push(stepInputValue);
//     updateLocalStorage();
    
//   // Update local storage after adding a step
//   updateLocalStorage();


//     // Clear the input field after adding a step
//     goalBox.querySelector('.new-step-input').value = '';
//   }
// }
// // Add step function inside a goal box
// function addStep(goalBox, goal) {
//   const stepInputValue = goalBox.querySelector('.new-step-input').value.trim();
//   if (stepInputValue) {
//     const stepItem = document.createElement('div');
//     stepItem.innerHTML = '<input type="checkbox">' + stepInputValue;
//     // Append the step item to the steps list within this goal box
//     const stepsList = goalBox.querySelector('.steps-list');
//     stepsList.appendChild(stepItem);

//     // Add step to local array and update local storage
//     if (!goal.steps.includes(stepInputValue)) {
//       goal.steps.push(stepInputValue);
//       updateLocalStorage();
//       addStepFromStorage(goalBox, stepInputValue);
//     }
    
//   // Update local storage after adding a step
//   updateLocalStorage();


//     // Clear the input field after adding a step
//     goalBox.querySelector('.new-step-input').value = '';
//   }
// }

// // Function to update localStorage for steps as well
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Display stored Goals on page load 
// window.addEventListener("load", function (){
//     goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];
//     goals.forEach(createGoalBox);
// });
// // Add event listener for adding a new goal
// addGoalBtn.addEventListener('click', function() {
//   const goalTitle = goalTitleInput.value.trim();
//   if (goalTitle) {
//     const newGoal = {
//       title: goalTitle,
//       steps: []
//     };
    
//     goals.push(newGoal);
    
//     createGoalBox(newGoal);
    
//     updateLocalStorage();
    
//     // Clear the input field after adding a new goal
//     goalTitleInput.value = '';
//   }
// });

// // Function to create a single Goal Box with its own Steps Container
// function createGoalBox(goal) {
//   const goalBox = document.createElement('div');
//   const titleElement = document.createElement('h3');
  
//   titleElement.textContent = goal.title;
  
//   const deleteButtonElement = document.createElement('button');
//   deleteButtonElement.classList.add("delete-goal");
  
//   deleteButtonElement.textContent = 'Delete';
  
//   deleteButtonElement.addEventListener('click', function() {
//       removeGoal(goal, goalBox);
//         // Remove 'hidden' class from 'goalList' if it's there
//   goalList.classList.remove('hidden');

//   });
  
//   // Create Steps Container for this specific Goal Box
//   const stepsContainerElement= document.createElement('div');
  
//   stepsContainerElement.classList.add("steps-container");
  
//   // Create Steps List within Steps Container 
//   const stepsListElement= document.createElement("div");
   
//    stepsListElement.classList.add("steps-list");
   
//    // Append existing steps if any
//    if (goal.steps && Array.isArray(goal.steps)) {
//     for (const step of goal.steps) {
//       var stepItem = document.createElement("div");
//       stepItem.innerHTML = '<label>' + step + '</label><input type="checkbox">';
//       stepsListElement.appendChild(stepItem);
//     }
//   }
   
//    // New Step Input Field 
//    var newStepInputElement = document.createElement("input");
  
//    newStepInputElement.classList.add("new-step-input");
   
//    newStepInputElement.type = "text";
   
//    newStepInputElement.placeholder = "Enter steps";
   
//    var addNewStepButton = document.createElement("button");
   
//    addNewStepButton.textContent = "Add Step";
   
//    addNewStepButton.classList.add("add-step-button"); // Adding class for styling
   
//    addNewStepButton.addEventListener("click", function(){
//      addStep(goalBox, goal);
//    });
       
//     // Append elements to their respective containers 
       
//    var newStepsContainer = document.createElement("div");
   
//    newStepsContainer.classList.add("new-steps-container"); // Adding class for styling
   
//    newStepsContainer.appendChild(newStepInputElement);
//    newStepsContainer.appendChild(addNewStepButton);
   
//    stepsContainerElement.appendChild(stepsListElement);
//    stepsContainerElement.appendChild(newStepsContainer);

//    // Append everything into Goal Box

//    goalBox.appendChild(titleElement);
//    goalBox.appendChild(deleteButtonElement);
//    goalBox.appendChild(stepsContainerElement);

//    goalList.appendChild(goalBox); // Changed appEndChild to appendChild
// }

// // Function to remove a Goal 
// function removeGoal(goalToRemove,goalBox){
//      goals=goals.filter(function(goaL){
//          return goaL.title!==goalToRemove.title;
//      });
//      updateLocalStorage();
     
//      goalBox.remove();
     
//       // If there are no goals left, add back 'hidden' class on 'goalList'
//   if (goals.length === 0) {
//     goalList.classList.add('hidden');
// }
// }

// // Display stored Goals on page load 

// window.addEventListener("load", function (){
//      goals.forEach(createGoalBox);
// });
// Selecting elements
// const goalTitleInput = document.getElementById('goalTitle');
// const addGoalBtn = document.getElementById('addGoalBtn');
// const goalList = document.getElementById('goalList');

// // Global goals array
// let goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];


// // Function to update localStorage
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Display stored Goals on page load''
// window.addEventListener("load", function() {
//   // Load goals from local storage
//   let goals = JSON.parse(localStorage.getItem('goals')) || [];

//   // Select the goalList div
//   const goalList = document.getElementById('goalList');

//   // Function to create a new goal box
//   function createGoalBox(goal) {
//       const newGoal = document.createElement('div');
//       newGoal.classList.add('goals');
//       newGoal.innerHTML = `
//           <h3>${goal.title}</h3>
//           <button class="delete-goal">Delete</button>
//       `;
//       goalList.appendChild(newGoal);
//   }

//   // Display existing goals on load
//   goals.forEach(createGoalBox);

//   // Add Goal Button Click Event
//   document.getElementById('addGoalBtn').addEventListener('click', function() {
//       const goalTitle = document.getElementById('goalTitle').value;
//       if (goalTitle) {
//           const newGoal = { title: goalTitle };
//           goals.push(newGoal);
//           createGoalBox(newGoal);
//           localStorage.setItem('goals', JSON.stringify(goals));
//           document.getElementById('goalList').removeAttribute('hidden');
//       }
//   });
// });
// // window.addEventListener("load", function () {
// //   // Remove the local declaration of 'goals' here so we use the global one.
// //   // Now it should populate from the global 'goals' variable initialized above.
// //   goals.forEach(createGoalBox);
// //   if (goals.length > 0) {
// //     goalList.classList.remove('hidden');
// //   } else {
// //     goalList.classList.add('hidden');
// //   }
// // });


// // Add event listener for adding a new goal
// addGoalBtn.addEventListener('click', function () {
//   const goalTitle = goalTitleInput.value.trim();
//   if (goalTitle) {
//     const newGoal = {
//       title: goalTitle,
//       steps: []
//     };

//     goals.push(newGoal);

//     createGoalBox(newGoal);

//     updateLocalStorage();

//     // Clear the input field after adding a new goal
//     goalTitleInput.value = '';

//     goalList.classList.remove('hidden');
//   }
// });

// // Function to add a step inside a goal box
// function addStep(goalBox, goal) {
//   const stepInputValue = goalBox.querySelector('.new-step-input').value.trim();
//   if (stepInputValue) {
//     const stepItem = document.createElement('div');
//     stepItem.innerHTML = '<input type="checkbox">' + stepInputValue;

//     if (goal.steps.includes(stepInputValue)) {
//       stepItem.querySelector('input').checked = true;
//     }

//     // Append the step item to the steps list within this goal box
//     const stepsList = goalBox.querySelector('.steps-list');
//     stepsList.appendChild(stepItem);

//     // Add step to local array and update local storage
//     if (!goal.steps.includes(stepInputValue)) {
//       goal.steps.push(stepInputValue);
//       updateLocalStorage();
//     }

//     // Clear the input field after adding a step
//     goalBox.querySelector('.new-step-input').value = '';
//   }
// }

// // Function to create a single Goal Box with its own Steps Container
// function createGoalBox(goal) {
//   const goalBox = document.createElement('div');
//   goalBox.classList.add("goalBox");
//   const titleElement = document.createElement('h3');

//   titleElement.textContent = goal.title;

//   const deleteButtonElement = document.createElement('button');
//   deleteButtonElement.classList.add("delete-goal");

//   deleteButtonElement.textContent = 'Delete';

//   deleteButtonElement.addEventListener('click', function () {
//     removeGoal(goal, goalBox);
    
//  // Selecting elements
// const goalTitleInput = document.getElementById('goalTitle');
// const addGoalBtn = document.getElementById('addGoalBtn');
// const goalList = document.getElementById('goalList');

// // Global goals array
// let goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];

// // Function to update localStorage
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Display stored Goals on page load 
// window.addEventListener("load", function () {
//   goals.forEach(createGoalBox);
//   if (goals.length > 0) {
//     goalList.classList.remove('hidden');
//   } else {
//     goalList.classList.add('hidden');
//   }
// });


//   // Create Steps Container for this specific Goal Box
//   const stepsContainerElement = document.createElement('div');

//   stepsContainerElement.classList.add("steps-container");

//   // Create Steps List within Steps Container 
//   const stepsListElement = document.createElement("div");

//   stepsListElement.classList.add("steps-list");

//   // Append existing steps if any
//   if (goal.steps && Array.isArray(goal.steps)) {
//     for (const step of goal.steps) {
//       var stepItem = document.createElement("div");
//       stepItem.innerHTML = '<label>' + step + '</label><input type="checkbox">';
//       stepsListElement.appendChild(stepItem);
//     }
//   }

  
//   // New Step Input Field 
//   var newStepInputElement = document.createElement("input");
  
//   newStepInputElement.classList.add("new-step-input");
  
//   newStepInputElement.type = "text";
  
//   newStepInputElement.placeholder = "Enter steps";
  
//   var addNewStepButton = document.createElement("button");
  
//   addNewStepButton.textContent = "Add Step";
  
//   addNewStepButton.classList.add("add-step-button"); // Adding class for styling
  
//   addNewStepButton.addEventListener("click", function(){
//     addStep(goalBox, goal);
//   });
  
//   // Append elements to their respective containers 
  
//   var newStepsContainer = document.createElement("div");
  
//   newStepsContainer.classList.add("new-steps-container"); // Adding class for styling
  
//   newStepsContainer.appendChild(newStepInputElement);
//   newStepsContainer.appendChild(addNewStepButton);
  
//   stepsContainerElement.appendChild(stepsListElement);
//   stepsContainerElement.appendChild(newStepsContainer);


//   // Append everything into Goal Box

//   goalBox.appendChild(titleElement);
//   goalBox.appendChild(deleteButtonElement);
//   goalBox.appendChild(stepsContainerElement);

//   goalList.appendChild(goalBox); // Changed appEndChild to appendChild
// }

// //Function to remove a Goal 
// function removeGoal(goalToRemove , goalBox){
//      goals=goals.filter(function(goaL){
//          return goaL.title!==goalToRemove.title;
//      });
//      updateLocalStorage();
     
//      goalBox.remove();
     
//       // If there are no goals left, add back 'hidden' class on 'goalList'
//   if (goals.length === 0) {
//     goalList.classList.add('hidden');
// }
// }
//////////////////////////////////////////////////////
// Display stored Goals on page load 

// window.addEventListener("load", function (){
//      goals.forEach(createGoalBox);
// });\


// I apologize for the confusion. It seems there was a misunderstanding. Here's your complete plan.js file with the necessary adjustments and all the existing code:

// // Selecting elements
// const goalTitleInput = document.getElementById('goalTitle');
// const addGoalBtn = document.getElementById('addGoalBtn');
// const goalList = document.getElementById('goalList');

// // Global goals array
// let goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];

// // Function to update localStorage
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Function to add a step inside a goal box
// function addStep(goalBox, goal) {
//   // Your existing addStep function...
// }

// // Function to create a single Goal Box with its own Steps Container
// function createGoalBox(goal) {
//   // Your existing createGoalBox function...
// }

// //Function to remove a Goal 
// function removeGoal(goalToRemove,goalBox){
//     // Your existing removeGoal function...
// }

// // Display stored Goals on page load 
// window.addEventListener("load", function () {
//   goals.forEach(createGoalBox);
//   if (goals.length > 0) {
//     goalList.classList.remove('hidden');
//   } else {
//     goalList.classList.add('hidden');
//   }
// });

// addGoalBtn.addEventListener('click', function () {
//   const goalTitle = goalTitleInput.value.trim();
//   if (goalTitle) {
//     const newGoal = { title: goalTitle, steps: [] };
//     goals.push(newGoal);
//     createGoalBox(newGoal);
//     updateLocalStorage();
//     goalTitleInput.value = '';
//     goalList.classList.remove('hidden');
//   }
// });

// You can replace your existing plan.js file with this updated code. This should address the issue you were facing with adding and displaying the goals properly. If you need further assistance, feel free to ask!

// Selecting elements
// const goalTitleInput = document.getElementById('goalTitle');
// const addGoalBtn = document.getElementById('addGoalBtn');
// const goalList = document.getElementById('goalList');

// // Global goals array
// let goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];

// // Function to update localStorage
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Function to create a single Goal Box with its own Steps Container
// function createGoalBox(goal) {
//   const goalBox = document.createElement('div');
//   goalBox.classList.add("goalBox");

//   // Title of the goal
//   const titleElement = document.createElement('h3');
//   titleElement.textContent = goal.title;

//   // Delete button for the goal
//   const deleteButtonElement = document.createElement('button');
//   deleteButtonElement.classList.add("delete-goal");
//   deleteButtonElement.textContent = 'Delete';
  
//   // Event listener to remove a Goal 
//   deleteButtonElement.addEventListener('click', function () {
//     removeGoal(goal, goalBox);
//   });

//   // Create Steps Container for this specific Goal Box
//   const stepsContainerElement = document.createElement('div');
//   stepsContainerElement.classList.add("steps-container");

//   // Create Steps List within Steps Container 
//   const stepsListElement = document.createElement("div");
//   stepsListElement.classList.add("steps-list");

//    // Append existing steps if any
//    if (goal.steps && Array.isArray(goal.steps)) {
//      for (const step of goal.steps) {
//        var stepItem = document.createElement("div");
//        stepItem.innerHTML = '<label>' + step + '</label><input type="checkbox">';
//        stepsListElement.appendChild(stepItem);
//      }
//    }

//    // New Step Input Field 
//    var newStepInputElement = document.createElement("input");
//    newStepInputElement.classList.add("new-step-input");
//    newStepInputElement.type = "text";
//    newStepInputElement.placeholder = "Enter steps";

//    var addNewStepButton = document.createElement("button");
//    addNewStepButton.textContent = "Add Step";
//    addNewStepButton.classList.add("add-step-button"); // Adding class for styling

//    addNewStepButton.addEventListener("click", function(){
//      addStep(goalBox, goal);
//    });

//     // Append elements to their respective containers 
//     var newStepsContainer = document.createElement("div");
//     newStepsContainer.classList.add("new-steps-container"); // Adding class for styling
    
//     newStepsContainer.appendChild(newStepInputElement);
//     newStepsContainer.appendChild(addNewStepButton);

//     stepsContainerElement.appendChild(stepsListElement);
//     stepsContainerElement.appendChild(newStepsContainer);

//     // Append everything into Goal Box

//     goalBox.appendChild(titleElement);
//     goalBox.appendChild(deleteButtonElement);
//     goalBox.appendChild(stepsContainerElement);

//     goalList.appendChild(goalBox); 
// }

// // Function to remove a Goal 
// function removeGoal(goalToRemove, goalBox){
//      goals=goals.filter(function(goaL){
//          return goaL.title!==goalToRemove.title;
//      });
//      updateLocalStorage();
     
//      goalBox.remove();
     
//       // If there are no goals left, hide 'goalList'
//       if (goals.length === 0) {
//         goalList.classList.add('hidden');
//       }
// }

// // Add event listener for adding a new goal
// addGoalBtn.addEventListener('click', function () {
  
// });

// // Display stored Goals on page load 
// window.addEventListener("load", function () {
  
// });

// // Function to add a step inside a goal box
// function addStep(goalBox, goal) {

// }

// // Since you already have the window load event listener setup at the top,
// // you should use it instead of creating another one. Let's fix that:

// window.addEventListener("load", function () {
  
// });
////////////////////

// // Selecting elements
// const goalTitleInput = document.getElementById('goalTitle');
// const addGoalBtn = document.getElementById('addGoalBtn');
// const goalList = document.getElementById('goalList');
// let goals = [];

// // Function to update localStorage
// function updateLocalStorage() {
//   localStorage.setItem('goals', JSON.stringify(goals));
// }

// // Display stored Goals on page load
// window.addEventListener("load", function () {
//   goals = localStorage.getItem('goals') ? JSON.parse(localStorage.getItem('goals')) : [];
//   goals.forEach(createGoalBox);
//   if (goals.length > 0) {
//     goalList.classList.remove('hidden');
//   } else {
//     goalList.classList.add('hidden');
//   }
// });

// // Add event listener for adding a new goal
// addGoalBtn.addEventListener('click', function () {
//   const goalTitle = goalTitleInput.value.trim();
//   if (goalTitle) {
//     const newGoal = {
//       title: goalTitle,
//       steps: []
//     };
//     goals.push(newGoal);

//     createGoalBox(newGoal);

//     updateLocalStorage();

//     // Clear the input field after adding a new goal
//     goalTitleInput.value = '';

//     goalList.classList.remove('hidden');
//   }
// });

// // Function to add a step inside a goal box
// function addStep(goalBox, goal) {
//   const stepInputValue = goalBox.querySelector('.new-step-input').value.trim();
//   if (stepInputValue) {
//     const stepItem = document.createElement('div');
//     stepItem.textContent = stepInputValue;

//     if (goal.steps.includes(stepInputValue)) {
//       stepItem.querySelector('input').checked = true;
//     }

//     // Append the step item to the steps list within this goal box
//     const stepsList = goalBox.querySelector('.steps-list');
//     stepsList.appendChild(stepItem);

//     // Add step to local array and update local storage
//     if (!goal.steps.includes(stepInputValue)) {
//       goal.steps.push(stepInputValue);
//       updateLocalStorage();
//     }

//     // Clear the input field after adding a step
//     goalBox.querySelector('.new-step-input').value = '';
//   }
// }

// // Function to create a single Goal Box with its own Steps Container
// function createGoalBox(goal) {
//   const goalBox = document.createElement('div');
//   goalBox.classList.add("goalBox");
//   const titleElement = document.createElement('h3');
  
//   titleElement.textContent = goal.title;
  
//   const deleteButtonElement = document.createElement('button');
//   deleteButtonElement.classList.add("delete-goal");
  
//   deleteButtonElement.textContent = 'Delete';
  
//   deleteButtonElement.addEventListener('click', function () {
//     removeGoal(goal, goalBox);
//   });
  
//   // Create Steps Container for this specific Goal Box
//   const stepsContainerElement = document.createElement('div');
  
//   stepsContainerElement.classList.add("steps-container");
  
//   // Create Steps List within Steps Container
//   const stepsListElement = document.createElement("div");
  
//   stepsListElement.classList.add("steps-list");
  
//   // Append existing steps if any
//   if (goal.steps && Array.isArray(goal.steps)) {
//     for (const step of goal.steps) {
//       var stepItem = document.createElement("div");
//       stepItem.textContent = step;
//       stepsListElement.appendChild(stepItem);
//     }
//   }
  
//   // New Step Input Field
//   var newStepInputElement = document.createElement("input");
  
//   newStepInputElement.classList.add("new-step-input");
  
//   newStepInputElement.type = "text";
  
//   newStepInputElement.placeholder = "Enter steps";
  
//   var addNewStepButton = document.createElement("button");
  
//   addNewStepButton.textContent = "Add Step";
  
//   addNewStepButton.classList.add("add-step-button"); // Adding class for styling
  
//   addNewStepButton.addEventListener("click", function(){
//     addStep(goalBox, goal);
//   });
  
//   // Append elements to their respective containers
  
//   var newStepsContainer = document.createElement("div");
  
//   newStepsContainer.classList.add("new-steps-container"); // Adding class for styling
  
//   newStepsContainer.appendChild(newStepInputElement);
//   newStepsContainer.appendChild(addNewStepButton);
  
//   stepsContainerElement.appendChild(stepsListElement);
//   stepsContainerElement.appendChild(newStepsContainer);
  
//   // Append everything into Goal Box
  
//   goalBox.appendChild(titleElement);
//   goalBox.appendChild(deleteButtonElement);
//   goalBox.appendChild(stepsContainerElement);
  
//   goalList.appendChild(goalBox); // Changed appEndChild to appendChild
// }

// //Function to remove a Goal
// function removeGoal(goalToRemove, goalBox){
//   goals = goals.filter(function(goaL){
//     return goaL.title !== goalToRemove.title;
//   });
//   updateLocalStorage();
//   goalBox.remove();

//   // If there are no goals left, add back 'hidden' class on 'goalList'
//   if (goals.length === 0) {
//   goalList.classList.add('hidden');
//   }
//   }
  
  ///newwwwwwwwwwwwwww

//   // Get the necessary elements from the DOM
// const goalForm = document.getElementById("goal-form");
// const goalInput = document.getElementById("goal-input");
// const goalList = document.querySelector(".goal-list");
// const stepForm = document.getElementById("step-form");
// const stepInput = document.getElementById("step-input");
// const stepList = document.querySelector(".step-list");

// // Function to load goals from local storage
// function loadGoals() {
//   const goals = JSON.parse(localStorage.getItem("goals")) || [];
//   goals.forEach(goalText => {
//     addGoalToDOM(goalText);
//   });
// }

// // Function to add a goal to the DOM
// function addGoalToDOM(goalText) {
//   const goal = document.createElement("div");
//   goal.classList.add("goal");

//   const goalContent = document.createElement("div");
//   goalContent.classList.add("content");

//   const goalTextElement = document.createElement("input");
//   goalTextElement.type = "text";
//   goalTextElement.classList.add("text");
//   goalTextElement.value = goalText;
//   goalTextElement.readOnly = true;

//   goalContent.appendChild(goalTextElement);

//   const goalAction = document.createElement("div");
//   goalAction.classList.add("action");

//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add("delete");
//   deleteButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

//   deleteButton.onclick = function() {
//     goal.remove();
//     removeGoalFromLocalStorage(goalTextElement.value);
//   };

//   goalAction.appendChild(deleteButton);

//   goal.appendChild(goalContent);
//   goal.appendChild(goalAction);

//   goalList.appendChild(goal);
// }

// // Function to save goal to local storage
// function saveGoalToLocalStorage(goalText) {
//   const goals = JSON.parse(localStorage.getItem("goals")) || [];
//   goals.push(goalText);
//   localStorage.setItem("goals", JSON.stringify(goals));
// }

// // Function to remove goal from local storage
// function removeGoalFromLocalStorage(goalText) {
//   const goals = JSON.parse(localStorage.getItem("goals")) || [];
//   const updatedGoals = goals.filter(g => g !== goalText);
//   localStorage.setItem("goals", JSON.stringify(updatedGoals));
// }

// // Function to load steps from local storage
// function loadSteps() {
//   const steps = JSON.parse(localStorage.getItem("steps")) || [];
//   steps.forEach(stepText => {
//     addStepToDOM(stepText);
//   });
// }

// // Function to add a step to the DOM
// function addStepToDOM(stepText) {
//   const step = document.createElement("div");
//   step.classList.add("step");

//   const stepContent = document.createElement("div");
//   stepContent.classList.add("content");

//   const stepTextElement = document.createElement("input");
//   stepTextElement.type = "text";
//   stepTextElement.classList.add("text");
//   stepTextElement.value = stepText;
//   stepTextElement.readOnly = true;

//   stepContent.appendChild(stepTextElement);

//   const stepAction = document.createElement("div");
//   stepAction.classList.add("action");

//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add("delete");
//   deleteButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

//   deleteButton.onclick = function() {
//     step.remove();
//     removeStepFromLocalStorage(stepTextElement.value);
//   };

//   stepAction.appendChild(deleteButton);

//   step.appendChild(stepContent);
//   step.appendChild(stepAction);

//   stepList.appendChild(step);
// }

// // Function to save step to local storage
// function saveStepToLocalStorage(stepText) {
//   const steps = JSON.parse(localStorage.getItem("steps")) || [];
//   steps.push(stepText);
//   localStorage.setItem("steps", JSON.stringify(steps));
// }

// // Function to remove step from local storage
// function removeStepFromLocalStorage(stepText) {
//   const steps = JSON.parse(localStorage.getItem("steps")) || [];
//   const updatedSteps = steps.filter(s => s !== stepText);
//   localStorage.setItem("steps", JSON.stringify(updatedSteps));
// }

// // Load goals and steps from local storage on page load
// loadGoals();
// loadSteps();

// // Add event listener to the goal form to handle goal submission
// goalForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent form submission

//   const goalText = goalInput.value.trim();

//   if (goalText !== "") {
//     addGoalToDOM(goalText);
//     saveGoalToLocalStorage(goalText);

//     goalInput.value = "";
//   }
// });

// // // ...

// // Add event listener to the step form to handle step submission
// stepForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Get the current step
//   const currentStep = getCurrentStep();

//   // Perform validation for the current step
//   const isValid = validateStep(currentStep);

//   if (isValid) {
//     // If the current step is valid, go to the next step
//     goToNextStep();
//   } else {
//     // If the current step is invalid, display an error message or do something else
//     displayErrorMessage();
//   }
// });

// // ...

// // Function to validate the current step
// function validateStep(currentStep) {
//   // Perform validation logic specific to the current step
//   // Return true if the step is valid, false otherwise
// }

// // Function to go to the next step
// function goToNextStep() {
//   // Logic to navigate to the next step, e.g., show the next step and hide the current step
// }

// // Function to display an error message
// function displayErrorMessage() {
//   // Logic to display an error message to the user, e.g., show an error div or toast message
// }
 
/////////////////////////////////////////////////////////////////////////
// Get the necessary elements from the DOM
document.addEventListener('DOMContentLoaded', function() {
  const goalTitleInput = document.getElementById('goalTitle');
  const addGoalBtn = document.getElementById('addGoalBtn');
  const goalList = document.getElementById('goalList');
  
  addGoalBtn.addEventListener('click', function() {
    const goalTitle = goalTitleInput.value;
    if (goalTitle) {
      // Create goal container
      const goalContainer = document.createElement('div');
      goalContainer.classList.add('goal-container');
  
      // Create goal title element
      const titleElement = document.createElement('h3');
      titleElement.textContent = goalTitle;
  
      // Create delete button for the goal
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        goalContainer.remove();
        saveGoals();
      });
  
      // Create steps input and add button
      const stepInput = document.createElement('input');
      stepInput.setAttribute('type', 'text');
      stepInput.setAttribute('placeholder', 'Enter step');
  
      const addStepButton = document.createElement('button');
      addStepButton.textContent = 'Add Step';
  
      // Create checklist for steps
      const stepsChecklist = document.createElement("ul");
      stepsChecklist.className = "steps-checklist";
     
      addStepButton.addEventListener("click", function() {
        createStepItem(stepInput.value, stepsChecklist);
        saveGoals();
        stepInput.value = "";
      });
  
      function createStepItem(stepText, checklist) {
        if (stepText) {
          let listItem = document.createElement("li");
          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          let label = document.createElement("label");
          label.textContent = stepText;
          listItem.appendChild(checkbox);
          listItem.appendChild(label);
          checklist.appendChild(listItem);
        }
      }
  
      // Append elements to the goal container
      goalContainer.appendChild(titleElement);
      goalContainer.appendChild(deleteButton);
      goalContainer.appendChild(stepInput);
      goalContainer.appendChild(addStepButton);
  
      // Append checklist to the container
      goalContainer.appendChild(stepsChecklist);
  
      // Append the new goal container to the list of goals
      goalList.appendChild(goalContainer);
      
      // Add line break to separate goal containers
      goalList.appendChild(document.createElement('br'));
  
      // Show the list of goals if it's hidden
      if (goalList.hidden) {
        goalList.hidden = false;
      }
  
      saveGoals();
    }
  });
  
  function saveGoals() {
    localStorage.setItem(
      'goals',
      JSON.stringify(Array.from(goalList.children).map((container) => ({
        title: container.querySelector('h3').textContent,
        steps: Array.from(container.querySelector('.steps-checklist').children).map((step) => ({
          text: step.querySelector('label').textContent,
          checked: step.querySelector('input').checked,
        })),
      })))
    );
  }
  
  function loadSavedGoals() {
    const savedGoalsJSON = localStorage.getItem('goals');
    if (savedGoalsJSON) {
      const savedGoalsData = JSON.parse(savedGoalsJSON);
      savedGoalsData.forEach((data) => {
        const newGoalContainer = document.createElement('div');
        newGoalContainer.classList.add('goal-container');
  
        const newTitleElement = document.createElement('h3');
        newTitleElement.textContent = data.title;
  
        const newdeleteButton = document.createElement("button");
        newdeleteButton.textContent = "Delete";
        newdeleteButton.addEventListener("click", function() {
          newGoalContainer.remove();
          saveGoals();
        });
  
        const newTextbox = document.createElement("input");
        newTextbox.type = "text";
        newTextbox.placeholder = "Enter Step";
  
        const addButton = document.createElement("button");
        addButton.textContent = "Add Step";
  
        const newList = document.createElement("ul");
        newList.className = "steps-checklist";
  
        addButton.addEventListener("click", function() {
          createNewSteps(newTextbox.value, newList)
          saveGoals()
          newTextbox.value = "";
        });
  
        newTextbox.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            createNewSteps(newTextbox.value, newList)
            saveGoals()
            newTextbox.value = "";
          }
        });
  
        function createNewSteps(stepText, checklist) {
          if (stepText) {
            let newItem = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            let label = document.createElement("label");
            
// Set the attributes for the label element
label.setAttribute("for", "nameInput");
label.textContent = "Name:";

// Create an input element
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "nameInput");

// Create a button element
let button = document.createElement("button");
button.textContent = "Submit";

// Add event listener to the button
button.addEventListener("click", submitForm);

// Append the label, input, and button to the container element
container.appendChild(label);
container.appendChild(input);
container.appendChild(button);

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();
  
  // Get the value entered in the input field
  let name = input.value;
  
  // Display the name in a paragraph element
  let paragraph = document.createElement("p");
  paragraph.textContent = "Hello, " + name + "!";
  container.appendChild(paragraph);
}
          }}})}}})