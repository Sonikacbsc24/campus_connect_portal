// ===== 1. Select the elements we need from the DOM =====
const statusMessage = document.getElementById("status-message");
const highlightBtn = document.getElementById("highlight-btn");
const heading = document.querySelector("#todo h2");

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const previewText = document.getElementById("preview-text");
const taskList = document.getElementById("task-list");

// ===== 2. Click event: toggle a highlight style on the heading =====
highlightBtn.addEventListener("click", () => {
    heading.classList.toggle("highlighted");

    if (heading.classList.contains("highlighted")) {
        statusMessage.textContent = "Heading highlighted!";
    } else {
        statusMessage.textContent = "Highlight removed.";
    }
});

// ===== 3. Input event: show what the user types in real time =====
taskInput.addEventListener("input", () => {
    previewText.textContent = taskInput.value;
});

// ===== 4. Keyboard event: add a task when Enter is pressed =====
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// ===== 5. Click event: add a task using the button =====
addTaskBtn.addEventListener("click", addTask);

// ===== Function to create and append a new list item =====
function addTask() {
    const taskText = taskInput.value.trim();

    // Do not add empty tasks
    if (taskText === "") {
        statusMessage.textContent = "Please type a task before adding it.";
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    statusMessage.textContent = `Task added: "${taskText}"`;

    // Reset the input field and live preview
    taskInput.value = "";
    previewText.textContent = "";
}

// ===== 6. Remove a task when its Remove button is clicked =====
// Event delegation is used so this also works for tasks added later
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const listItem = event.target.parentElement;
        const removedText = listItem.textContent.replace("Remove", "").trim();

        listItem.remove();
        statusMessage.textContent = `Task removed: "${removedText}"`;
    }
});