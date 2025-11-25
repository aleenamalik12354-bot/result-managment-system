<?php
/**
 * ================================================
 * Database Configuration File
 * Result Management System
 * ================================================
 */

// Database Connection Settings
$host = 'localhost';        // MySQL Server (usually localhost)
$username = 'root';         // MySQL Username (default: root)
$password = '';             // MySQL Password (default: empty)
$database = 'fgresult';  // Database Name

// Create Connection
$conn = new mysqli($host, $username, $password, $database);

// Check Connection
if ($conn->connect_error) {
    die("❌ Database Connection Failed: " . $conn->connect_error);
}

// Set Character Encoding to UTF-8
$conn->set_charset("utf8mb4");

// Optional: Uncomment for debugging
// echo "✅ Database Connected Successfully!";
?>