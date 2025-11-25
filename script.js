/**
 * ================================================
 * Result Management System - JavaScript Logic
 * ================================================
 */

// Main Search Function
function searchResult() {
    // Get selected search type (rollno or name)
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    
    // Get search input value
    const searchValue = document.getElementById('searchValue').value.trim();
    
    // Get error and result containers
    const errorDiv = document.getElementById('errorMessage');
    const resultCard = document.getElementById('resultCard');

    // Hide previous messages/results
    errorDiv.classList.add('d-none');
    resultCard.classList.add('d-none');

    // Validation: Check if input is empty
    if (!searchValue) {
        showError('Please enter a search value');
        return;
    }

    // Create FormData for POST request
    const formData = new FormData();
    formData.append('searchType', searchType);
    formData.append('searchValue', searchValue);

    // Send AJAX request to search.php
    fetch('search.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Display result if found
            displayResult(data.data);
        } else {
            // Show error message if not found
            showError(data.message);
        }
    })
    .catch(error => {
        // Handle any errors
        showError('An error occurred. Please try again.');
        console.error('Error:', error);
    });
}

// Show Error Message
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.classList.remove('d-none');
    
    // Scroll to error message
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Display Student Result
function displayResult(student) {
    const resultCard = document.getElementById('resultCard');
    const studentInfo = document.getElementById('studentInfo');
    const subjectsTable = document.getElementById('subjectsTable');

    // Create Student Info Cards
    studentInfo.innerHTML = `
        <div class="col-md-6">
            <div class="info-card info-card-1">
                <div class="d-flex align-items-center">
                    <div class="info-icon" style="background: #667eea; color: white;">👤</div>
                    <div class="ms-3">
                        <p class="text-muted mb-1 fw-bold">STUDENT NAME</p>
                        <h4 class="mb-0 fw-bold">${student.name}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="info-card info-card-2">
                <div class="d-flex align-items-center">
                    <div class="info-icon" style="background: #ffc107; color: white;">📚</div>
                    <div class="ms-3">
                        <p class="text-muted mb-1 fw-bold">ROLL NUMBER</p>
                        <h4 class="mb-0 fw-bold">${student.roll_no}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="info-card info-card-3">
                <div class="d-flex align-items-center">
                    <div class="info-icon" style="background: #17a2b8; color: white;">📅</div>
                    <div class="ms-3">
                        <p class="text-muted mb-1 fw-bold">PU ROLL NUMBER</p>
                        <h4 class="mb-0 fw-bold">${student.pu_roll_no}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="info-card info-card-4">
                <div class="d-flex align-items-center">
                    <div class="info-icon" style="background: #28a745; color: white;">🏆</div>
                    <div class="ms-3">
                        <p class="text-muted mb-1 fw-bold">OVERALL CGPA</p>
                        <h4 class="mb-0 fw-bold" style="color: #28a745; font-size: 2rem;">${student.cgpa}</h4>
                        <span class="badge ${getGradeClass(student.cgpa)}">${getGradeText(student.cgpa)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Subject Details Array
    const subjects = [
        { code: 'IT-501', name: 'Database Management Systems', gpa: student.dbms },
        { code: 'IT-502', name: 'Web Engineering', gpa: student.web_engineering },
        { code: 'IT-503', name: 'Software Engineering', gpa: student.software_engineering },
        { code: 'IT-504', name: 'Computer Networks', gpa: student.computer_networks },
        { code: 'IT-505', name: 'Operating Systems', gpa: student.operating_systems }
    ];

    // Create Subject Table Rows
    subjectsTable.innerHTML = subjects.map(subject => `
        <tr>
            <td class="py-4 px-4 fw-bold">${subject.code}</td>
            <td class="py-4 px-4">${subject.name}</td>
            <td class="py-4 px-4 text-center">3</td>
            <td class="py-4 px-4 text-center">
                <span class="badge ${getGradeClass(subject.gpa)} badge-gpa">${subject.gpa}</span>
            </td>
        </tr>
    `).join('');

    // Show Result Card and Scroll to it
    resultCard.classList.remove('d-none');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Get Badge Class based on GPA
function getGradeClass(gpa) {
    if (gpa >= 3.7) return 'badge-excellent';
    if (gpa >= 3.5) return 'badge-very-good';
    if (gpa >= 3.0) return 'badge-good';
    return 'badge-satisfactory';
}

// Get Grade Text based on GPA
function getGradeText(gpa) {
    if (gpa >= 3.7) return 'Excellent';
    if (gpa >= 3.5) return 'Very Good';
    if (gpa >= 3.0) return 'Good';
    return 'Satisfactory';
}

// Enable Enter Key for Search
document.getElementById('searchValue').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchResult();
    }
});

// Update Placeholder Text based on Search Type
document.querySelectorAll('input[name="searchType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const searchInput = document.getElementById('searchValue');
        if (this.value === 'rollno') {
            searchInput.placeholder = 'Enter Roll Number (e.g., 1291)';
        } else {
            searchInput.placeholder = 'Enter Student Name (e.g., BAREERA)';
        }
        searchInput.value = ''; // Clear input
    });
});