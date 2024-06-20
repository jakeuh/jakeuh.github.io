// JavaScript Code

//////////////DATE////////////////////////
const d = new Date();
let doutput = d.toLocaleDateString();
document.getElementById("today").innerHTML = doutput;

//////////////DOB//////////////////////////////
function validateDob() {
    let dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let today = new Date();
    let maxDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());

    if (date > today) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future";
        dob.value = "";
        return false;
    } else if (date < maxDate) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// Set min and max attributes for the date input
document.addEventListener("DOMContentLoaded", function() {
    let today = new Date();
    let maxDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());

    let dobInput = document.getElementById("dob");
    dobInput.setAttribute("max", today.toISOString().split('T')[0]);
    dobInput.setAttribute("min", maxDate.toISOString().split('T')[0]);
});


////////////////////SSN//////////////////////
function validateSSN(){
    const ssn = document.getElementById("ssn").value;

    const ssnRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/;

    if (!ssnRegex.test(ssn)){
       document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number (e.g 123-45-6789)"
       return false; 
    }   else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

/////////////// Phone //////////////////////
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g,"") // Remove all non-digit characters

    if(phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
    return false;
}

const formattedPhone = 
phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6);
phoneInput.value = formattedPhone;
document.getElementById("phone-error").innerHTML = "";
return true;
}

///////////// Zip Code ////////////////

function validateZipCode(){
const zipInput = document.getElementById("zip");
let zip = zipInput.value.replace(/[^\d-]/g, ""); //Reomve all non-digit and non-hyphen characters

if(!zip) {
    document.getElementById("zip-error").innerHTML = "Zip code is required";
    return false;
}

if(zip.length > 5) {
    zip = zip.slice(0, 5); //Only keep the first 5 digits 
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

////////// SLIDER /////////////

let slider = document.getElementById("range");
let output = document.getElementById("range-scale");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

////////// USER ID ////////////
function validateUserId() {
    userId = document.getElementById("userid").value;
    
    // Conver UserId to lowercase
    userId = userId.toLowerCase();

    // Redisplay the userID in lowercase 
    document.getElementById("userid").value = userId;

    if (userId.length === 0) {
    document.getElementById("userid-error").innerHTML = 
    "User ID can not be empty";
    return false;
 } 

 //Check that User ID does not start with a number
 if(!isNaN(userId.charAt(0))) {
    document.getElementById("userid-error").innerHTML = 
    "User ID can not start with a number";
    return false;
 }

 //Check that User ID only contains letters, numbers,or underscores
 let regex = /^[a-zA-Z0-9_]+$/;
 if(!regex.test(userId)) {
    document.getElementById("userid-error").innerHTML =
     "User ID can only contain letters, numbers, or underscores";
    return false;
 }  else if( userId.length < 5) {
    document.getElementById("userid-error").innerHTML =
     "User ID must be at least 5 characters";
    return false;
 } else if(userId.length > 30) {
    document.getElementById("userid-error").innerHTML = 
    "User ID must not exceed 30 characters";
    return false;
 }  else {
    // IF all checks pass, User ID is valid
    document.getElementById("userid-error").innerHTML = "";
    return true;
 }
}


/////////// Password ////////////////////
function validatePassword(){
    const pwd = document.getElementById("pwd").value;
    const user = document.getElementById("userid").value;

    let errorFlag = 0;
    // Checking for lowercase letters
    if(!pwd.match(/[a-z]/)){
     document.getElementById("msg1").innerHTML = 
     "Enter at least 1 lowercase letter";
     errorFlag = 1;   
    } else{
     document.getElementById("msg1").innerHTML = "";
    }

// Check for capital letter
    if(!pwd.match(/[A-Z]/)){
    document.getElementById("msg2").innerHTML = 
    "Enter at least 1 capital letter";
    errorFlag = 1;
    }   else{
    document.getElementById("msg2").innerHTML = "";
    }

    //Check for numbers
    if(!pwd.match(/[0-9]/)){
    document.getElementById("msg3").innerHTML = 
    "Enter at least 1 number";
    errorFlag = 1;
    }   else{
    document.getElementById("msg3").innerHTML = "";
     }

    //Check for special characters
    if(!pwd.match(/[!\@#/$%&*/-_\\(\)]/)){
        document.getElementById("msg4").innerHTML = 
        "Enter at least 1 special letter";
        errorFlag = 1;
    }   else{
        document.getElementById("msg4").innerHTML = "";
    }

    //Check for length
    if(pwd.length < 8){
        document.getElementById("msg5").innerHTML = 
        "Enter a minimum of 8 characters";
        errorFlag = 1;
    } else{
        document.getElementById("msg5").innerHTML = "";
    }

    //Checks that passowrd cannot equal UserID

    if(pwd == user || pwd.include(user)){
        document.getElementById("msg6").innerHTML = 
        "Password cannot equal UserID";
        errorFlag = 1;
    } else{
        document.getElementById("msg6").innerHTML = "";
    }
    // If there no errors, display nothing
    if(errorFlag === 0){
        document.getElementById("msg3").innerHTML = "Valid Password"
    }
}


////////// Confirm Password//////////////////
function confirmPassword(){
    pwd1 = document.getElementById("pwd").value;
    pwd2 = document.getElementById("pwd2").value;

    if(pwd2 != pwd1){
        document.getElementById("pwd2-error").innerHTML = 
        "Passwords do not match";
        return false;
    }   else {
        document.getElementById("pwd2-error").innerHTML = "";
        return true;
    }
}


/////////// Re-display user input ///////////
function reviewInput(){
    var formcontent = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
    formoutput = "<table class= 'output'><th colspan = '3'> Your Information</th>";
    for(i = 0; i <formcontent.length; i++){
    if(formcontent.elements[i].value != ""){
        datatype = formcontent.elements[i].type;
        switch(datatype){
            case "checkbox":
                if (formcontent.elements[i].checked) {
                    formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;
            
                case "radio":
    if (formcontent.elements[i].checked) {
        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
        formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
    }
    break;

                case "button":
                case "submit":
                case "reset":
                break;
                default:
                    formoutput = formoutput +
                     "<tr><td align= 'right'>" + 
                    formcontent.elements[i].name + 
                    "</td>"
                    formoutput = formoutput + 
                    "<td class = 'outputdata'>" +
                     formcontent.elements[i].value +
                     "</td></tr>";

            }
        }
    }
    if(formoutput.length > 0){
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//////// Remove User Input /////////////
function removeReview(){
    document.getElementById("showInput").innerHTML = "";
}