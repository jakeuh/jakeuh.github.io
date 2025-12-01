
// --- Global Patterns for JavaScript Validation ---
const validationPatterns = {
    // Key is the element ID, Value is the RegEx string
    'fname': '^[A-Za-z\'-]{1,30}$',
    'mname': '^[A-Za-z]?$',
    'lname': '^[A-Za-z\'-2-5]{1,30}$',
    'phone': '^\\d{3}-\\d{3}-\\d{4}$',
    'zip': '^\\d{5}(-\\d{4})?$',
    'userId': '^[A-Za-z_-][A-Za-z0-9_-]{4,29}$',
    'password': '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%^&*_=+/<.,`~])[^"]{8,30}$',
    'email': '^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$'
};

// --- Initialization on page load ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Display the current day and date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("currentDate").innerText =
        "Today is: " + new Date().toLocaleDateString(undefined, options);

  
});

// --- Dynamic Event 1: Slider Value Display [cite: 24, 25] ---
function updateSliderValue(value) {
    document.getElementById('sliderValue').innerText = `($${Number(value).toLocaleString()})`;
}

/**
 * Helper function to validate an input value against a RegEx pattern.
 * @param {string} id - The element ID.
 * @param {string} value - The input value.
 * @returns {boolean} - True if the value passes all checks, false otherwise.
 */
function validateInput(id, value) {
    const element = document.getElementById(id);
    if (!element) return true; // Can't validate if element isn't found

    // 1. Check for blank required fields (if the browser hasn't caught it already)
    const isRequired = element.hasAttribute('required');
    if (isRequired && (value === '—' || value.trim() === '')) {
        return false;
    }
    
    // If optional and empty, it passes.
    if (!isRequired && (value === '—' || value.trim() === '')) {
        return true; 
    }

    const length = value.length;
    const minLength = parseInt(element.getAttribute('minlength')) || 0;
    const maxLength = parseInt(element.getAttribute('maxlength')) || Infinity;
    
    // 2. Check min/max length (Catches '48' for Address Line 1 or 'XY' for Middle Initial)
    if (length < minLength || length > maxLength) {
        return false;
    }

    // 3. Check specific RegEx pattern
    const patternString = validationPatterns[id];
    if (patternString) {
        // Create RegEx with case-insensitive flag 'i' ONLY for fields where it's needed (e.g., names are case-insensitive in validation but case-sensitive in storage/display)
        const regex = new RegExp(patternString);
        if (!regex.test(value)) {
             return false;
        }
    }
    
    // 4. Custom checks for specific fields (DOB, etc.)
    if (id === 'dob') {
        const inputDate = new Date(value);
        const maxDate = new Date(element.getAttribute('max'));
        // Check if date is in the future (the 'max' attribute should prevent this)
        if (inputDate > maxDate) { 
            return false;
        }
    }

    return true; // All checks passed
}

// --- Dynamic Event 2: Password Matching and Cross-Field Checks (Required JavaScript validation)  ---
function validatePasswords() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const userIdField = document.getElementById('userId');
    const fnameField = document.getElementById('fname');
    const lnameField = document.getElementById('lname');

    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    const userId = userIdField.value.toLowerCase();
    const nameParts = [fnameField.value.toLowerCase(), lnameField.value.toLowerCase()];
    
    // 1. Basic pattern check (must pass HTML5 requirements first)
    if (!passwordField.checkValidity()) {
        // User will see the browser's native error message
        return false; 
    }
    
    // 2. Check for Password Match
    if (password !== confirmPassword) {
        alert("Passwords do not match!"); // Display a popup/warning [cite: 34, 35]
        confirmPasswordField.focus();
        return false; // Prevent form submission
    }
    
    // 3. Password vs. User ID/Name Checks (Required JS logic)
    const normalizedPassword = password.toLowerCase();

    // Check 3a: Password cannot equal User ID
    if (normalizedPassword === userId) {
        alert("Password cannot be the same as your User ID.");
        passwordField.focus();
        return false;
    }

    // Check 3b: Password cannot contain User ID or Name parts
    if (normalizedPassword.includes(userId)) {
        alert("Password cannot contain your User ID.");
        passwordField.focus();
        return false;
    }

    for (const namePart of nameParts) {
        // Only check if the name part is long enough to be meaningful (e.g., > 2 chars)
        if (namePart.length > 2 && normalizedPassword.includes(namePart)) {
            alert("Password cannot contain part of your first or last name.");
            passwordField.focus();
            return false;
        }
    }
    
    return true; // Allow submission
}


// --- Review Feature Function ---
function showReview() {

    // Set up data collection and pre-processing
    const zipCodeRaw = document.getElementById('zip')?.value || '—';
    // Zip Code: Truncate it and re-display the truncated version [cite: 21]
    const zipCodeTruncated = zipCodeRaw.slice(0, 5); 

    const userIdRaw = document.getElementById('userId')?.value || '—';
    // User ID: Convert it to lowercase and redisplay [cite: 31]
    const userIdCorrected = userIdRaw !== '—' ? userIdRaw.toLowerCase() : '—';
    
    const selectedHistory = Array.from(document.querySelectorAll('input[name="history"]:checked'))
        .map(cb => cb.value)
        .join(', ') || '—';

    // 1. Gather all form data into an object, using explicit IDs
    const reviewData = {
        // Input IDs mapped to display labels
        'fname': { label: 'First Name', value: document.getElementById('fname').value || '—' },
        'mname': { label: 'Middle Initial', value: document.getElementById('mname').value || '—' },
        'lname': { label: 'Last Name', value: document.getElementById('lname').value || '—' },
        'dob': { label: 'Date of Birth', value: document.getElementById('dob').value || '—' },
        'ssn': { label: 'SSN/ID (Obscured)', value: document.getElementById('ssn').value || '—' },
        'email': { label: 'Email Address', value: document.getElementById('email')?.value || '—' },
        'phone': { label: 'Phone Number', value: document.getElementById('phone')?.value || '—' },
        'addr1': { label: 'Address Line 1', value: document.getElementById('addr1')?.value || '—' }, 
        'addr2': { label: 'Address Line 2', value: document.getElementById('addr2')?.value || '—' },
        'city': { label: 'City', value: document.getElementById('city')?.value || '—' },
        'state': { label: 'State', value: document.getElementById('state')?.options[document.getElementById('state').selectedIndex]?.text || '—' },
        'zip': { label: 'Zip Code', value: zipCodeRaw }, // Use raw for validation
        'userId': { label: 'User ID', value: userIdRaw }, // Use raw for validation
        'password': { label: 'Password', value: document.getElementById('password')?.value || '—' },
        'confirmPassword': { label: 'Re-enter Password', value: document.getElementById('confirmPassword')?.value || '—' },
        
        // Non-input fields (use labels directly)
        'Medical History': { label: 'Medical History', value: selectedHistory },
        'Gender': { label: 'Gender', value: document.querySelector('input[name="gender"]:checked')?.value || '—' },
        'Vaccinated': { label: 'Vaccinated', value: document.querySelector('input[name="vaccinated"]:checked')?.value || '—' },
        'Symptoms': { label: 'Symptoms', value: document.getElementById('symptoms').value || '—' },
    };

    const reviewTable = document.getElementById('reviewTable');
    const reviewPanel = document.getElementById('reviewPanel');

    // Clear any existing content and headers
    reviewTable.innerHTML = ''; 
    reviewPanel.style.display = 'block';

    // Add Table Header Row for clarity
    const headerRow = reviewTable.insertRow();
    headerRow.innerHTML = '<th>Field</th><th>Value</th><th>Status</th>';
    headerRow.classList.add('header-row');

    // 2. Loop through the object entries and build the table rows
    for (const [id, data] of Object.entries(reviewData)) {
        
        let displayValue = data.value;
        let statusText = 'N/A';
        let statusColor = 'black';
        let rawValue = data.value;

        // Skip non-input groups for validation status (checkboxes, radio groups, textarea)
        if (['Medical History', 'Gender', 'Vaccinated', 'Desired Salary', 'Symptoms'].includes(id)) {
            statusText = '—';
            statusColor = 'gray';
        } 
        // Handle input fields with validation checks
        else {
            const isPatternValid = validateInput(id, rawValue); // Use helper function
            let customError = '';

            // 1. Custom Check for DOB (in the future)
            if (id === 'dob' && new Date(rawValue) > new Date()) {
                 customError = 'ERROR: Cannot be in the future';
            }
            
            // 2. Custom Check for State selection (must not be the default null value)
            const stateElement = document.getElementById('state');
            if (id === 'state' && stateElement.value === '') {
                customError = 'ERROR: Must select a state';
            }

            // 3. Custom Check for Password Match (Requires looking up the other field)
            if (id === 'password' || id === 'confirmPassword') {
                const otherPassword = id === 'password' ? document.getElementById('confirmPassword').value : document.getElementById('password').value;
                if (rawValue !== otherPassword) {
                    customError = 'ERROR: Passwords do not match';
                }
            }
            
            // 4. Custom Check for Password vs User ID/Name (Only check on password field)
            if (id === 'password' && customError === '') {
                 const passwordValid = validatePasswordsReview(rawValue, userIdCorrected, document.getElementById('fname').value, document.getElementById('lname').value);
                 if (passwordValid !== true) {
                     customError = passwordValid; // The function returns the error message
                 }
            }


            // Set Final Status Text
            if (customError) {
                statusText = customError;
                statusColor = 'red';
            } else if (isPatternValid) {
                statusText = '✅ pass';
                statusColor = 'green';
            } else if (rawValue === '—') {
                statusText = '—';
                statusColor = 'gray';
            } else {
                statusText = '❌ ERROR: Pattern/Length Mismatch';
                statusColor = 'red';
            }

            // Apply Display Transformations to the VALUE column
            if (id === 'zip') {
                displayValue = zipCodeTruncated; // Display truncated version
            } else if (id === 'userId') {
                displayValue = userIdCorrected; // Display lowercase version
            } else if (id === 'ssn') {
                displayValue = rawValue.slice(0, -4).replace(/./g, '*') + rawValue.slice(-4); // Obscure all but last 4
            } else if (id === 'password' || id === 'confirmPassword') {
                displayValue = '*'.repeat(rawValue.length); // Obscure password entirely
            }
        }
    
        // Create the new row
        const row = reviewTable.insertRow();
        
        // Create the table data cells
        const labelCell = row.insertCell();
        const valueCell = row.insertCell();
        const patternCell = row.insertCell();

        // Set the content
        labelCell.innerHTML = `<strong>${data.label}</strong>`;
        valueCell.textContent = displayValue;
        patternCell.innerHTML = `<span style="color: ${statusColor}; font-weight: bold;">${statusText}</span>`;
    }

    // document.getElementById('reviewPanel').style.display = 'block';
}

/**
 * Performs complex password checks for the Review Table.
 * @param {string} password - The raw password.
 * @param {string} userId - The lowercase User ID.
 * @param {string} fname - The First Name.
 * @param {string} lname - The Last Name.
 * @returns {boolean|string} - True if pass, or error message string if fail.
 */
function validatePasswordsReview(password, userId, fname, lname) {
    if (password === '—') return true; // Skip if empty, pattern check handles required

    const normalizedPassword = password.toLowerCase();
    const normalizedUserId = userId.toLowerCase();
    const normalizedFname = fname.toLowerCase();
    const normalizedLname = lname.toLowerCase();

    // Check 1: Password cannot equal User ID
    if (normalizedPassword === normalizedUserId) {
        return "ERROR: Cannot be same as User ID";
    }

    // Check 2: Password cannot contain User ID
    if (normalizedPassword.includes(normalizedUserId) && normalizedUserId.length > 0) {
        return "ERROR: Cannot contain User ID";
    }

    // Check 3: Password cannot contain name parts
    if (normalizedFname.length > 2 && normalizedPassword.includes(normalizedFname)) {
        return "ERROR: Contains First Name";
    }
    if (normalizedLname.length > 2 && normalizedPassword.includes(normalizedLname)) {
        return "ERROR: Contains Last Name";
    }
    
    return true;
}


/**
 * Prefills the form fields with either correct or incorrect test data.
 * @param {string} type - 'correct' or 'incorrect'
 */
function prefillForm(type) {
    // Determine the data set to use
    let data;
    if (type === 'correct') {
        data = {
            'fname': 'Jake',
            'mname': 'N',
            'lname': 'Messinger-3',
            'dob': '1985-10-25', // Not in the future, not too old
            'ssn': '123-45-6789',
            'addr1': '4801 Martin Luther King Blvd',
            'addr2': 'Rm 122 MH',
            'city': 'Houston',
            'state': 'TX',
            'zip': '77004-1234', // Zip+4 to test truncation
            'email': 'profjake@uh.edu',
            'phone': '713-743-7523',
            'userId': 'thejakenator', // Lowercase, valid chars
            'password': 'ABCxyz123!', // Valid per RegEx
            'confirmPassword': 'ABCxyz123!',
            'symptoms': 'I have a high fever and a persistent cough.',
            
            'gender': 'male',
            'vaccinated': 'yes'
        };
    } else {
        // Data designed to fail various pattern checks
        data = {
            'fname': 'Jake123', // Fails: Contains numbers
            'mname': 'XY', // Fails: Too long (max 1)
            'lname': 'Smith$', // Fails: Contains invalid special char
            'dob': '2030-01-01', // Fails: In the future
            'ssn': '123-45-6789', // Valid (SSN not explicitly checked by RegEx)
            'addr1': '48', // Fails: Too short (min 2)
            'addr2': '',
            'city': 'H', // Fails: Too short
            'state': 'PR', // Valid selection
            'zip': '123', // Fails: Too short (min 5 digits)
            'email': 'bademail.com', // Fails: Missing @ and domain
            'phone': '7137437523', // Fails: Missing dashes
            'userId': '123Start', // Fails: Starts with a number
            'password': 'short', // Fails: Too short (min 8) and missing requirements
            'confirmPassword': 'different', // Fails: No match
            'symptoms': 'Contains double quotes: "Error"', // Fails: Contains quotes
             
            'gender': 'female',
            'vaccinated': 'no'
        };
    }

    const form = document.getElementById('hospitalForm');
    
    // Clear the form first
    form.reset();

    // Loop through the data object and set values
    for (const [id, value] of Object.entries(data)) {
        const element = document.getElementById(id);
        
        if (element) {
            // Text, Email, Date, Password, Select, and Textarea inputs
            if (element.type !== 'radio' && element.type !== 'checkbox') {
                element.value = value;
            }
        }
    }

    // Handle Radio Buttons separately (they use the same name)
    if (data.gender) {
        document.querySelector(`input[name="gender"][value="${data.gender}"]`).checked = true;
    }
    if (data.vaccinated) {
        document.querySelector(`input[name="vaccinated"][value="${data.vaccinated}"]`).checked = true;
    }

    // Handle Checkboxes
    const historyCheckboxes = document.querySelectorAll('input[name="history"]');
    historyCheckboxes.forEach(cb => {
        if (data.history && data.history.includes(cb.value)) {
            cb.checked = true;
        } else {
             cb.checked = false;
        }
    });

    // Manually trigger the slider update to show the value
    document.getElementById('salary').value = data.desired_salary;
    updateSliderValue(data.desired_salary);
}

// In scripts.js

/**
 * Validates a single field on the fly and updates its adjacent error message.
 * NOTE: This function's full efficacy depends on fixing the repeated IDs in the HTML.
 * @param {string} id - The ID of the input field.
 */
function validateInline(id) {
    const inputElement = document.getElementById(id);
    const errorElement = document.getElementById(`error-${id}`);
    
    if (!inputElement) return;
    
    // Check if the input is one of the fields with the broken inline-error ID structure in HTML
    const brokenIds = ['fname', 'mname', 'lname', 'dob', 'ssn'];
    if (brokenIds.includes(id)) {
        // Since the error spans in the HTML all have duplicate IDs or incorrect IDs,
        // we can't reliably update the text. We will rely on the HTML5 pop-up.
        return; 
    }

    if (!errorElement) return;

    // The checkValidity() method uses the HTML5 validation attributes (pattern, required, minlength, etc.)
    if (inputElement.checkValidity()) {
        // Data is valid
        errorElement.textContent = ''; // Clear any previous error
        errorElement.style.display = 'none';
        inputElement.classList.remove('input-error'); // Optional: Remove red border
    } else {
        // Data is invalid

        // Get the specific error message from the title attribute or use a default
        const errorMessage = inputElement.title || 'Invalid format.';
        
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
        inputElement.classList.add('input-error'); // Optional: Add red border
    }
    
    // Special Case: Password Matching must be checked separately
    if (id === 'password' || id === 'confirmPassword') {
        checkPasswordMatch();
    }
}

/**
 * Checks if the two password fields match.
 * NOTE: This function relies on error spans with IDs 'error-password' and 'error-confirmPassword'.
 */
function checkPasswordMatch() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorElement = document.getElementById('error-confirmPassword');

    if (!password || !confirmPassword || !errorElement) return;

    if (password.value !== confirmPassword.value) {
        errorElement.textContent = 'Passwords do not match.'; // Specific error message [cite: 35]
        errorElement.style.display = 'block';
        confirmPassword.classList.add('input-error');
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        confirmPassword.classList.remove('input-error');
    }
}
