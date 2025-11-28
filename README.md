# Result Management System

A web-based Result Management System designed for the BS-IT 5th Semester (Spring 2025) to manage and display student results efficiently. This system allows students to search for their results using their Roll Number or Name and view a detailed result card.

## 🚀 Features

*   **Search by Roll Number:** Students can quickly find their results by entering their unique Roll Number.
*   **Search by Name:** Allows searching for results using the student's name.
*   **Detailed Result Card:** Displays a comprehensive result card including:
    *   Student Information (Name, Roll No, PU Roll No)
    *   Subject-wise Performance (Marks/GPA)
    *   CGPA
*   **Print Functionality:** Built-in option to print the result card for official use or records.
*   **Responsive Design:** The interface is user-friendly and responsive, built with Bootstrap 5.
*   **Database Integration:** Stores student records securely in a MySQL database.

## 🛠️ Technologies Used

*   **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5
*   **Backend:** PHP
*   **Database:** MySQL

## ⚙️ Setup and Installation

1.  **Install XAMPP:** Download and install XAMPP (or any other local server environment that supports PHP and MySQL).
2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/aleenamalik12354-bot/result-managment-system.git
    ```
3.  **Move Files:** Move the project folder `result_system` to your server's root directory (e.g., `htdocs` in XAMPP).
4.  **Database Setup:**
    *   Open phpMyAdmin (`http://localhost/phpmyadmin`).
    *   Create a new database named `result_management`.
    *   Import the `database.sql` file located in the project directory into the `result_management` database. Alternatively, you can copy the SQL commands from `database.sql` and run them in the SQL tab.
5.  **Configuration:**
    *   Open `config.php` and ensure the database credentials match your local setup (default is usually User: `root`, Password: ``).

## 📖 Usage

1.  Start the Apache and MySQL modules in XAMPP Control Panel.
2.  Open your web browser and navigate to `http://localhost/result_system`.
3.  Select your search method (Roll Number or Name).
4.  Enter your details and click "Search Result".
5.  View your result card and print it if needed.

## 📂 Project Structure

*   `index.html`: The main user interface for searching and viewing results.
*   `search.php`: Handles the search logic and fetches data from the database.
*   `config.php`: Database connection configuration.
*   `database.sql`: SQL script to create the database and sample data.
*   `style.css`: Custom styling for the application.
*   `script.js`: Frontend JavaScript for handling search requests and UI updates.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open-source and available for educational purposes.