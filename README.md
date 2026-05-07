<h1>StudySync Planner</h1>

<h2>Project Overview</h2>

StudySync is a productivity-focused web application designed to help students organize their academic workload efficiently. By providing a centralized platform for task management, StudySync helps students visualize their study requirements, prioritize subjects, and maintain academic momentum.

<h2>The Problem it Solves</h2>
Students often have deadlines and study tasks scattered across various platforms like emails, physical notebooks, and syllabi. StudySync provides a single source of truth where tasks are persisted locally in the browser. This prevents "decision fatigue" by allowing students to plan their study sessions in advance and track their progress through a clean, modern interface.

 <h2>Key Features</h2>
<h3>1. Semantic & Accessible HTML</h3>
Utilizes Semantic HTML5 tags such as <header>, <nav>, <main>, <section>, and <footer> for a well-organized and accessible document structure.

Implements a valid document head with responsive meta tags and descriptive titles for each page.

<h3>2. Responsive CSS Design</h3>
Layout Techniques: Employs CSS Grid for the task dashboard and Flexbox for the navigation system.

Mobile-First Approach: Custom Media Queries are implemented to ensure the planner is fully functional and aesthetically pleasing on mobile, tablet, and desktop devices.

Consistent UI: A cohesive color palette and typography provide a professional user experience.

<h3>3. JavaScript & Data Persistence</h3>
LocalStorage API: All tasks are persisted in the browser's localStorage. This ensures that data added on the "Add Task" page is visible on the "Dashboard" even after the browser is closed or refreshed.

<strong>DOM Manipulation:</strong> The Dashboard dynamically generates "Task Cards" based on stored data.

<strong>Form Validation:</strong> The application ensures that both the subject and description are provided before allowing a task to be saved, providing real-time error messages to the user.

<strong>Event Handling:</strong> Uses centralized event listeners to manage form submissions and task deletions.

 <h2>Project Structure</h2>
The application consists of three interconnected pages:

Dashboard (index.html): The primary view where users see their current study tasks displayed in a grid.

Add Task (add-task.html): The management page featuring a validated form to input new study sessions.

About (about.html): An educational page explaining the benefits of time blocking and strategic planning.

 <h2>Technologies Used</h2>
HTML5: Semantic structure and form elements.

CSS3: Custom styling, Grid/Flexbox layouts, and Media Queries.

JavaScript (ES6): Logic for task creation, deletion, and DOM updates.

Web Storage API: localStorage for cross-page data persistence.

 <h2>Setup Instructions</h2>
Clone the Repository:

Bash
git clone git@github.com:larrykibet-24/Final-Project.git
Run the App:
Simply open the index.html file in any modern web browser. No server setup or dependencies are required.

<h2>How to Use:</h2>

Navigate to "Add Task".

Enter the subject and a description of what you need to study.

Click "Save Task" to persist the data.

Return to the "Dashboard" to view or remove your tasks.

BDD (Behavior-Driven Development)
Scenario: Saving a Task

Given: A user is on the "Add Task" page.

When: They enter valid details and click "Save Task".

Then: An alert confirms success, and the user is redirected to the Dashboard where the new task appears.

Scenario: Deleting a Task

Given: A user has tasks on the Dashboard.

When: They click the "Remove" button on a task card.

Then: The task is removed from localStorage and the UI updates immediately.

 <h2>Author</h2>
Larry Kibet

Email: larry.kibet2@student.moringaschool.com

GitHub: larrykibet-24

live link : https://larrykibet-24.github.io/Final-Project/

 <h2>License</h2>
Copyright © 2026 Larry Kibet.
This project is licensed under the MIT License.
