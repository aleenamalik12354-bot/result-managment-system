<?php
/**
 * ================================================
 * Search Handler
 * Handles Roll Number and Name searches
 * ================================================
 */

// Set JSON Response Header
header('Content-Type: application/json');

// Include Database Connection
require_once 'config.php';

// Get POST Data
$searchType = isset($_POST['searchType']) ? $_POST['searchType'] : '';
$searchValue = isset($_POST['searchValue']) ? trim($_POST['searchValue']) : '';

// Validation: Check if search value is empty
if (empty($searchValue)) {
    echo json_encode([
        'success' => false,
        'message' => '⚠️ Please enter a search value'
    ]);
    exit;
}

// Prepare SQL Query based on Search Type
if ($searchType === 'rollno') {
    // Search by Roll Number or PU Roll Number
    $stmt = $conn->prepare("SELECT * FROM students WHERE roll_no = ? OR pu_roll_no = ?");
    $stmt->bind_param("ss", $searchValue, $searchValue);
} else {
    // Search by Name (partial match)
    $searchValue = "%$searchValue%";
    $stmt = $conn->prepare("SELECT * FROM students WHERE name LIKE ?");
    $stmt->bind_param("s", $searchValue);
}

// Execute Query
$stmt->execute();
$result = $stmt->get_result();

// Check if Result Found
if ($result->num_rows > 0) {
    $student = $result->fetch_assoc();
    
    echo json_encode([
        'success' => true,
        'data' => $student
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => '❌ No result found for this search'
    ]);
}

// Close Statement and Connection
$stmt->close();
$conn->close();
?>