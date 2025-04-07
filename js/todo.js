// Global Variables
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Create List Item Function
function createListItem(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Toggle complete on click
    listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");
    });

    return listItem;
}

// Create Add Task Function
function addTask() {
    const taskText = taskInput.value.trim(); // Trim to remove unnecessary spaces
    if (taskText === "") return; // Prevent adding empty tasks

    const listItem = createListItem(taskText);
    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear input
}

// Event Listener for Add Task Button
addTaskButton.addEventListener("click", addTask);

// Optional: Pressing 'Enter' should also add a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});