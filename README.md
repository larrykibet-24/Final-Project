StudySync Planner
Project Overview
StudySync is a productivity-focused web application designed to help students organize their academic workload efficiently. By providing a centralized platform for task management, StudySync helps students visualize their study requirements, prioritize subjects, and maintain academic momentum.

The Problem it Solves
Students often have deadlines and study tasks scattered across various platforms like emails, physical notebooks, and syllabi. StudySync provides a single source of truth where tasks are persisted locally in the browser. This prevents "decision fatigue" by allowing students to plan their study sessions in advance and track their progress through a clean, modern interface.

🚀 Key Features
1. Semantic & Accessible HTML
Utilizes Semantic HTML5 tags such as <header>, <nav>, <main>, <section>, and <footer> for a well-organized and accessible document structure.

Implements a valid document head with responsive meta tags and descriptive titles for each page.

2. Responsive CSS Design
Layout Techniques: Employs CSS Grid for the task dashboard and Flexbox for the navigation system.

Mobile-First Approach: Custom Media Queries are implemented to ensure the planner is fully functional and aesthetically pleasing on mobile, tablet, and desktop devices.

Consistent UI: A cohesive color palette and typography provide a professional user experience.

3. JavaScript & Data Persistence
LocalStorage API: All tasks are persisted in the browser's localStorage. This ensures that data added on the "Add Task" page is visible on the "Dashboard" even after the browser is closed or refreshed.

DOM Manipulation: The Dashboard dynamically generates "Task Cards" based on stored data.

Form Validation: The application ensures that both the subject and description are provided before allowing a task to be saved, providing real-time error messages to the user.

Event Handling: Uses centralized event listeners to manage form submissions and task deletions.

📂 Project Structure
The application consists of three interconnected pages:

Dashboard (index.html): The primary view where users see their current study tasks displayed in a grid.

Add Task (add-task.html): The management page featuring a validated form to input new study sessions.

About (about.html): An educational page explaining the benefits of time blocking and strategic planning.

🛠️ Technologies Used
HTML5: Semantic structure and form elements.

CSS3: Custom styling, Grid/Flexbox layouts, and Media Queries.

JavaScript (ES6): Logic for task creation, deletion, and DOM updates.

Web Storage API: localStorage for cross-page data persistence.

🚦 Setup Instructions
Clone the Repository:

Bash
git clone 
Run the App:
Simply open the index.html file in any modern web browser. No server setup or dependencies are required.

How to Use:

Navigate to "Add Task".

Enter the subject and a description of what you need to study.

Click "Save Task" to persist the data.

Return to the "Dashboard" to view or remove your tasks.

📝 BDD (Behavior-Driven Development)
Scenario: Saving a Task

Given: A user is on the "Add Task" page.

When: They enter valid details and click "Save Task".

Then: An alert confirms success, and the user is redirected to the Dashboard where the new task appears.

Scenario: Deleting a Task

Given: A user has tasks on the Dashboard.

When: They click the "Remove" button on a task card.

Then: The task is removed from localStorage and the UI updates immediately.

👤 Author
Larry Kibet

Email: larry.kibet2@student.moringaschool.com

GitHub: larrykibet-24

live link : https://larrykibet-24.github.io/Final-Project/

📄 License
Copyright © 2026 Larry Kibet.
This project is licensed under the MIT License.