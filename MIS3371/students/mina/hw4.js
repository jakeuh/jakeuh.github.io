/*
    Program name: hw4.js
    Name: Jean Mina
    Date created: 9/15/2024
    Date last updated: 12/4/2024
    Version: 1.1
    Purpose: Homework 4 js
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;


//range slider js code
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value};

//first name validate js code
function validateFname(){
    let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if first name field is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) { //checks if first name matches pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) { //checks if name is at least 1 character
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) { //checks if name is at more than 30 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//middle initial validate js code
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]$/;

    
    //makes middle initial uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    //checks that middle initial is exactly one uppercase letter
    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

//last name validate js code
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if last name field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) { //checks if last name matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks if name is at least 1 character
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) { //checks if name is at more than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

    // dob validation js code
function validateDob() {
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        dob.value="";
        return false;
    } else if (date < new Date(maxDate)){
        document.getElementById("dob-error").innerHTML =
        "Date cannot be more than 120 years ago."   
        dob.value="";
        return false; 
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML=
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML ="";
        return true;
    }
}

// address 1 validation js code
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML =
        "Please enter something on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// city validate js code
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//zip code validation js code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML =
        "Zip code cannot be left blank.";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0,5); //removes all digits after first 5
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML ="";
    return true;
}

// email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML =
        "Email cannot be empty";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address."
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation js code
function validatePhone() {
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non-number characters

    if (phone.length == 0) {
        document.getElementById("phnum-error").innerHTML = 
        "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phnum-error").innerHTML = "";
    return true;
}

//username validation js code
function validateUname() {
    uname = document.getElementById("uname").value;

    //converts username to lowercase
    uname = uname.toLowerCase();

    // display username in lowercase
    document.getElementById("uname").value = uname;
    
    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML =
    "Username field cannot be empty.";
    return false;
    }

    //checks that username does not start with a number
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML =
        "Username cannot begin with a number.";
        return false;
    }

    //checks that username consists of only letters, number, or underscore
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML =
        "Username can only contain letters, numbers, or underscores.";
        return false;
        //checks that username does not have more than 30 characters
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = 
        "Username must be atleast 5 characters.";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = 
        "Username cannot exceed 30 characters.";
        return false;
    } else { // if all of the above checks pass then username is valid
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

//password validation js code
function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up and initalizes array
    const errorMessage = [];

    //check for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter.");
    }

    //check for upper letters
    if (!pword.match(/[A-Z]/)) {
       errorMessage.push("Enter at least one uppercase letter.");
    }

    //check for numbers
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number ");
    }

    //check for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least special character.");
    }

     //check for username not in password
     if (pword == uname || pword.includes(uname)) {
          errorMessage.push("Password cannot contain username.");
   }

   //displays error messages if there are any errors
   const errorContainer = document.querySelector(".pword-message");
   errorContainer.innerHTML = errorMessage
   .map((message) => `<span>${message}</span><br/>`)
   .join("");

    return errorMessage.length === 0; // Return true if there are no errors
   
}

//confirm password validation js code
function confirmPassword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if(pword1 != pword2) {
        document.getElementById("pword2-error").innerHTML =
        "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match.";
        return true;
    }
}

// redisplay user input back to user (review button)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr> <td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><Td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                
            }
        }
    }
    if(formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML ="";
}

//shows alert box when necessary js code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    }
}

// validate everything on form
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUname()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}

//cookie for remembering info input on form//
function setCookie (name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie (name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt (0) == '') {
            cookie = cookie.substring(1);
        }
        if(cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return " ";
}

var inputs = [
    {id: "fname", cookieName: "firstName"},
    {id: "mini", cookieName: "middleInitial"},
    {id: "lname", cookieName: "lastName"},
    {id: "dob", cookieName: "dob"},
    {id: "ssn", cookieName: "ssn"},
    {id: "address1", cookieName: "address1"},
    {id: "city", cookieName: "city"},
    {id: "zcode", cookieName: "zcode"},
    {id: "email", cookieName: "email"},
    {id: "phnum", cookieName: "phnum"},
    {id: "uname", cookieName: "userName"},
]

inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    //prefill input fields with value from the cookie
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !==" ") {
        inputElement.value = cookieValue;
    }

    //set a cookie with the input value when the input field changes
    inputElement.addEventListener("input", function(){
        setCookie(input.cookieName, inputElement.value, 30);
    });

});

//greet the user with their name + message if the cookie is set
var firstName = getCookie("firstName");
if (firstName !== " ") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName +  "! </br>";
    document.getElementById("welcome2").innerHTML = 
    "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form. </a>";

      document.getElementById("new-user").addEventListener("click", function() {
        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });

}