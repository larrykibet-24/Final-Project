document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskContainer = document.getElementById("task-container");
  const errorMsg = document.getElementById("error-message");

  // Fill in 'form'
  if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const subject = document.getElementById("subject").value.trim();
      const taskDesc = document.getElementById("task").value.trim();

      // Validation
      if (subject === "" || taskDesc === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
      }

      const newTask = {
        id: Date.now(),
        subject: subject,
        description: taskDesc,
      };

      // Get existing tasks 
      const tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];
      tasks.push(newTask);

      // Save to localStorage
      localStorage.setItem("studyTasks", JSON.stringify(tasks));

      // Feedback to user
      alert("Task saved successfully!");
      window.location.href = "index.html";
    });
  }

  // Display what was filled in
  if (taskContainer) {
    const displayTasks = () => {
      const tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

      if (tasks.length === 0) {
        taskContainer.innerHTML =
          '<p class="empty-msg">No tasks found. Go to "Add Task" to start!</p>';
        return;
      }
// clear what has been entered
      taskContainer.innerHTML = ""; 
      tasks.forEach((item) => {
        const card = document.createElement("div");
        card.className = "task-card";
        card.innerHTML = `
                    <h3>${item.subject}</h3>
                    <p>${item.description}</p>
                    <span class="delete-btn" onclick="deleteTask(${item.id})">Remove</span>
                `;
        taskContainer.appendChild(card);
      });
    };

    displayTasks();
  }
});

// Delete function
function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];
  tasks = tasks.filter((t) => t.id !== id);
  localStorage.setItem("studyTasks", JSON.stringify(tasks));
  //Refresh to update
  location.reload(); 
}
