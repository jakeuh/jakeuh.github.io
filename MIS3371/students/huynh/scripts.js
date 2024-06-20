 <script>
        // JavaScript code for dynamically updating the date in the banner
        var today = new Date();
        var day = today.toLocaleDateString('en-US', { weekday: 'long' });
        var date = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        document.getElementById("date").innerHTML = "Today is: " + day + ", " + date;
]

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("firstName").addEventListener("blur", validateFirstName);
    // Add event listeners for other fields
});

// Validation functions for each field
function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    var namePattern = /^[A-Za-z'-]+$/;
    if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").textContent = "First name must contain only letters, apostrophes, and dashes.";
    } else {
        document.getElementById("firstNameError").textContent = "";
    }
}


// Function to validate all fields when the Validate button is clicked
function validateForm() {
    // Validate all fields
    validateFirstName();
    // Validate other fields

    // Check if there are any errors
    var errorMessages = document.querySelectorAll(".error-message");
    if (errorMessages.length === 0) {
        // No errors, show submit button
        document.getElementById("submitButton").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for input fields to validate as they enter or leave the field
    document.getElementById("firstName").addEventListener("input", validateFirstName);
    document.getElementById("middleInitial").addEventListener("input", validateMiddleInitial);
    document.getElementById("lastName").addEventListener("input", validateLastName);
    document.getElementById("dob").addEventListener("input", validateDOB);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("addressLine1").addEventListener("input", validateAddressLine1);
    document.getElementById("addressLine2").addEventListener("input", validateAddressLine2);
    document.getElementById("city").addEventListener("input", validateCity);
    document.getElementById("zipCode").addEventListener("input", validateZipCode);
    document.getElementById("userId").addEventListener("input", validateUserID);
    document.getElementById("password").addEventListener("input", validatePassword);
    document.getElementById("reenterPassword").addEventListener("input", validateReenterPassword);

    // Hide the Submit button initially
    document.getElementById("submitButton").style.display = "none";
});

// Validation functions for each field
function validateFirstName() {
    var firstName = document.getElementById("firstName").value;
    var namePattern = /^[A-Za-z'-]+$/;
    var errorElement = document.getElementById("firstNameError");
    if (!namePattern.test(firstName)) {
        errorElement.textContent = "First name must contain only letters, apostrophes, and dashes.";
    } else {
        errorElement.textContent = "";
    }
    checkFormValidity();
}

// Add similar validation functions for other fields

// Function to check overall form validity and show/hide Submit button
function checkFormValidity() {
    var errorMessages = document.querySelectorAll(".error-message");
    if (errorMessages.length === 0) {
        document.getElementById("submitButton").style.display = "block";
    } else {
        document.getElementById("submitButton").style.display = "none";
    }
}

    </script>