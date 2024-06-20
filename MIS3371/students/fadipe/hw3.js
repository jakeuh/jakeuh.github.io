   // Date ////
const d = new Date();
let doutput = d.toLocaleDateString();
document.getElementById("today").innerHTML =doutput;

// slider//
let slider = document.getElementById("range");
let output = document.getElementById("range-scale");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
    formoutput = "<table class='output'><th colspan = '3' > Your Information</th>";
    for (i = 0; i < formcontent.length; i++) {
    if (formcontent.elements[i].value != "") {
        datatype = formcontent.elements[i].type;
        switch (datatype) {
        case "checkbox":
            if (formcontent.elements[i].checked) {
            formoutput = 
                formoutput + 
                "<tr><td align= 'right' >" + 
                formcontent.elements[i].name + 
                "</td>";
            formoutput = 
                formoutput + "<td class='outputdata' >&#x2713;</td></tr>";
            }
            break;
        case "radio":
        if (formcontent.elements[i].checked) {
        formoutput = 
            formoutput + 
            "<tr><td align= 'right' >" +
            formcontent.elements[i].name +
            "</td>";
        formoutput = 
        "<td class='outputdata'>" + 
        formcontent.elements[i].value + 
        "</td></tr>";
        }
        break;
        case "button":
        case "submit":
        case "reset":
            break;
        default:
            formoutput = 
            formoutput + 
            "<tr><td align='right'> " + 
            formcontent.elements[i].name + 
            "</td>";
            formoutput = 
            formoutput +
            "<td class = 'outputdata' >" +
            formcontent.elements[i].value +
            "</td></tr>";
        }

    }
    }
    if (formoutput.length > 0) {
    formoutput = formoutput + "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
 }

}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeBtn = document.getElementById("close-alert");
    alertBox.style.display = "block";
    closeBtn.onclick = function () {
    alertBox.style.display = "none";
    }
}


function fnameValidation() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^A-Za-z'-]+$/;

    if (fname == "") {
    document.getElementById("fname-error").innerHTML =
        "First name must not be empty";
    return false;
     } else if (fname != "") {
    if (!fname.match(namePattern)) {
       document.getElementById("fname-error").innerHTML = 
        "Letters, apostrophes, and dashed only";
    return false; 
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML =
    "First name must be at least 2 characters";
    return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = 
        "First name must not exceed 30 characters";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
    return true;
    }
    }
        
}

function lnameValidation() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^A-Za-z2-5'-]+$/;

    if (lname == "") {
    document.getElementById("lname-error").innerHTML =
        "Last name must not be empty";
    return false;
     } else if (lname != "") {
    if (!lname.match(namePattern)) {
       document.getElementById("lname-error").innerHTML = 
        "Letters, apostrophes, and dashed only";
    return false; 
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML =
    "Last name must be at least 2 characters";
    return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = 
        "Last name must not exceed 30 characters";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
    }

}

function emailValidation() {
    email = document.getElementById("email").value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
       document.getElementById("email-error").innerHTML = 
        "Email address must not be empty";
    return false; 
    } else if (!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML =
    "Please enter a valid emial address";
    return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }



}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !== 10) {
    document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
    return false; 
    } 
    
    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
    }


    // DOB ///
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()){
    document.getElementById("dob-error").innerHTML =
    "Date can not be in the future";
    dob.value = "";
    return false;
    } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = 
        "Date can not be more than 120 years ago";
    dob.value = ""
    return false;
    } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
    }
}

// SSN //
function validateSSN() {
    const ssn = document.getElementById("ssn").value;

    
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if(!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML =
        "Please enter a valid Social Security Number (e.g 123-45-6789) ";
    return false;
    } else{
    document.getElementById("ssn-error").innerHTML = "";
    return true;
    }
}

function addressValidation() {
    address = document.getElementById("address1").value.trim();
    
    if (!address) {
    document.getElementById("address-error").innerHTML = "Address is required";
    return false; 
    } else {
    document.getElementById("address-error").innerHTML = "";
    return true;
    }

}

function cityValidation() {
    city = document.getElementById("city").value.trim();
    
    if (!city) {
    document.getElementById("city-error").innerHTML = "City is required";
    return false; 
    } else {
    document.getElementById("city-error").innerHTML = "";
    return true;
    }

}

function validateZipCode() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");
    
    if (!zip) {
    document.getElementById("zip-error").innerHTML = "Zip code is required";
    return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0,5);
    }
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
    }

function validateUserId() {
    userId = document.getElementById("userid").value;

    userId = userId.toLowerCase();

    document.getElementById("userid").value = userId;

    if (user.Id.length ===0) {
    document.getElementById("userid-error").innerHTML =
        "User ID can not be empty";
    return false;
    }
    
    if (!isNaN(userId.charAt(0))) {
    document.getElementById("userid-error").innerHTML =
        "User ID can not start with a number";
    return false;
    }

let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(userId)) {
    document.getElementById("userid-error").innerHTML = 
        "User ID can only contain letters, numbers, or underscores";
    return false;

    } else if (userId.length < 5) {
    document.getElementById("userid-error").innerHTML = 
        "User ID must be at least 5 characters";
    return false;
    } else if (userId.length > 30) {
    document.getElementById("userid-error").innerHTML = 
        "User ID must not exceed 3o characters";
    return false;
    } else {
    document.getElementById("userid-error").innerHTML = "";
    return true;
    }

}
    function validatePassword(); boolean
function validatePassword() {
    const pwd = document.getElementById("pwd").value;
    const user = document.getElementById("userid").value;

    const errorMessages = [];

    if (!pwd.match(/[a-z]/)){
    errorMessages.push("Enter at least 1 lowercase letter.");
    }

    if (!pwd.match(/[A-Z]/)) {
        errorMessages.push("Enter at least 1 uppercase letter.");
    }

    if (!pwd.match(/[0-9]/)) {
        errorMessages.push("Enter at least 1 number.");
    }


    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
      errorMessages.push("Enter at least 1 special character."); 
    }

    if (pwd.length < 8) {
    errorMessages.push("Enter a minimum of 8 characters.");
    }

    if (pwd == user || pwd.includes(user)) {
        errorMessages.push("Password cannot equal userid.");
    }

    const errorContainer = document.querySelector(".pwd-message");
    errorContainer.innerHTML = errorMessages
    .map((message) => '<span>${message}</span><br />')
    .join("");

    return errorMessages.length ===0;
}

function confirmPassword() {
    pwd1 = document.getElementById("pwd").value;
    pwd2 = document.getElementById("pwd2").value;

    if (pwd2 != pwd1) {
    document.getElementById("pwd2-error").innerHTML = "Password do not match";
    return false;
    } else {
    document.getElementById("pwd2-error").innerHTML = "";
    return true;
    }
}


function validateAll() {
    let valid = true;

    if (!fnameValidation()) {
        valid = false;
    }
    if (!lnameValidation()) {
        valid = false;
    }
    if (!emailValidation()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSSN()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!addressValidation()) {
        valid = false;
    }
    if (!cityValidation()) {
        valid = false;
    }
    if (!validateZipCode()) {
        valid = false;
    }
    if (!validateUserId()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
}


if (valid) {
    document.getElementById("submit").disabled = false;
    } else {
    showAlert();

 }
 }