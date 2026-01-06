/*
Name: Julian Rodriguez
Data created: September 24, 2025
Date modified: December 10th, 2025
Version: 5
Description: Homework 5 - JavaScript code - EXTRA CREDIT
*/

//dynamic date js code
const d = new Date(); 
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
const day = weekdays[d.getDay()]; 
const date = d.toLocaleDateString(); 
//let text = d.toLocaleDateString(); 
document.getElementById("today"). innerHTML = `${day}, ${date}`; 

//name slider js code
let slider = document.getElementById("range"); 
let output = document.getElementById("range-slider"); 
output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value; 
}

//code block used to indicate scroll progress
function updateScrollProgress(){
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
  const scrollPercent = (scrollTop / scrollHeight) * 100; 

  const progressBar = document.querySelector('.scroll-progress'); 
  if(progressBar) {
    progressBar.style.width = scrollPercent + '%'; 
  }
}

//code block to work with form progress
function updateFormProgress() {
    const form = document.getElementById("signup");
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    const radioGroups = new Set();
    let filled = 0;
    
    fields.forEach(field => {
        if (field.type === 'radio') {
            if (!radioGroups.has(field.name)) {
                radioGroups.add(field.name);
                if (form.querySelector(`input[name="${field.name}"]:checked`)) filled++;
            }
        } else if (field.type === 'checkbox') {
            if (field.checked) filled++;
        } else {
            if (field.value.trim()) filled++;
        }
    });
    
    const totalFields = fields.length - radioGroups.size + (radioGroups.size > 0 ? radioGroups.size : 0);
    const percentage = Math.round((filled / totalFields) * 100);
    
    document.querySelector('.form-progress-fill').style.width = percentage + '%';
    document.querySelector('.form-progress-fill').textContent = percentage + '%';
    document.querySelector('.form-progress-text').textContent = 
        `${filled} of ${totalFields} required fields completed`;
}

//used to identify if user has caps lock s
function detectCapsLock(event) {
    const capsLockOn = event.getModifierState?.('CapsLock');
    document.querySelectorAll('.caps-warning').forEach(w => 
        w.classList.toggle('show', capsLockOn)
    );
}

//code block for the collapsable info sesssions 
function initHelpSections() {
    document.querySelectorAll('.help-header').forEach(header => {
        header.onclick = () => {
            header.nextElementSibling.classList.toggle('open');
            header.querySelector('.help-toggle').classList.toggle('open');
        };
    });
}

//will show whenever there is an error on the form text 
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + "-error");
    
    if (errorSpan) {
        errorSpan.innerHTML = message;
        field.classList.add('error-shake');
        setTimeout(() => field.classList.remove('error-shake'), 500);
    }
}

//first name validation - changed getElementById to showError to enable shake animation
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        showError("fname", "First name field cannot be empty"); 
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        showError("fname", "Letters, apostrophes, and dashes only.");
        return false;
    } else if (fname.length < 2) {
        showError("fname", "First name cannot be less than 2 characters.");
        return false;
    } else if (fname.length > 30) {
        showError("fname", "First name cannot be more than 30 characters.");
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
  }
}

//middle initial validation - changed getElementById to showError to enable shake animation
function validateMini() {
    mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        showError("mini", "Middle initial must be a single uppercase letter");
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

//last name validation - changed getElementById to showError to enable shake animation
function validateLname(){
  const lname = document.getElementById("lname").value; 
  const namePattern = /^[a-zA-Z'-]+$/;

  if(lname == ""){
    showError("lname", "Last name field cannot be empty");
    return false;
  } else if(lname != ""){
    if(!lname.match(namePattern)){
      showError("lname", "Letters, apostrophes, and dashes only."); 
      return false; 
    } else if(lname.length<1){
      showError("lname", "Last name must be at least 1 character.");
      return false; 
    } else if(lname.length>30){
      showError("lname", "Last name cannot be more than 30 characters.");
      return false;
    } else{
      document.getElementById("lname-error").innerHTML="";
      return true;
    }
  }
} 

//date of birth validation - changed getElementById to showError to enable shake animation
function validateDOB() {
  const dob = document.getElementById("DOB"); 
  let date = new Date(dob.value); 
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120); 

  if (date>new Date()){
    showError("DOB", "Date can't be in the future"); 
    dob.value=""; 
    return false; 
  }
  else if(date <new Date(maxDate)){
    showError("DOB", "Date can't be more than 120 years ago"); 
    return false; 
  } else{
    document.getElementById("dob-error").innerHTML=""; 
    return true; 
  }
}

//social security validation - changed getElementById to showError to enable shake animation
function validateSsn() {
  const ssn = document.getElementById("ssn").value; 
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/; 

  if(!ssnR.test(ssn)) {
    showError("ssn", "Please enter a valid SSN");
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML=""; 
    return true; 
  }
}

//Zip code validation- changed getElementById to showError to enable shake animation
function validateZipcode(){
  const zipInput = document.getElementById("Zipcode"); 
  let zip = zipInput.value.replace(/[^\d]/g, ""); 

  if(!zip){
    showError("Zipcode", "Zip code can't be blank");
    return false; 
  }
  
  if(zip.length !== 5){
    showError("Zipcode", "Please enter a valid 5-digit ZIP code"); 
    return false;
  } 

  zipInput.value=zip; 
  document.getElementById("Zipcode-error").innerHTML=""; 
  return true; 
}

//ZIP code lookup API
function lookupZipCode() {
    const zipInput = document.getElementById("Zipcode");
    const zip = zipInput.value.trim();
    const zipError = document.getElementById("Zipcode-error");
    const loading = document.getElementById("zip-loading");
    
    document.getElementById("City").value = "";
    document.getElementById("state").value = "";
    
    if (!/^\d{5}$/.test(zip)) {
        zipError.innerHTML = "Please enter a valid 5-digit ZIP code";
        return false;
    }

    loading.style.display = "inline";
    zipError.innerHTML = "";
    
    // Call Zippopotam API - my API implementation for mandatory 2!!!
    fetch(`https://api.zippopotam.us/us/${zip}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('ZIP code not found');
            }
            return response.json();
        })
        .then(data => {
            loading.style.display = "none";
            
            const city = data.places[0]['place name'];
            const state = data.places[0]['state abbreviation'];
            
            document.getElementById("City").value = city;
            document.getElementById("state").value = state;
            
            zipError.innerHTML = "";
            console.log(`Found: ${city}, ${state}`);
        })
        .catch(error => {
            loading.style.display = "none";
            zipError.innerHTML = "ZIP code not found. Please check and try again.";
            console.error('ZIP lookup error:', error);
        });
    
    return true;
}

//Email validation- changed getElementById to showError to enable shake animation
function validateEmail() {
  const email = document.getElementById("email").value; 
  const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email){
    showError("email", "Email can't be blank");
    return false; 
  }

  if(!emailR.test(email)){
    showError("email", "Please enter a valid email address");
    return false; 
  }

  document.getElementById("email-error").innerHTML=""; 
  return true; 
} 

//Phone number validation - changed getElementById to showError to enable shake animation
function validatePhone() {
  const phone = document.getElementById("phone").value;
  const digits = phone.replace(/\D/g, '');
  
  if(!phone){
    showError("phone", "Phone number cannot be blank");
    return false;
  }
  
  if(digits.length < 10){
    showError("phone", "Please enter a valid phone number");
    return false;
  }
  
  document.getElementById("phone-error").innerHTML="";
  return true;
}
document.getElementById('phone').addEventListener('input', function(e) {
  const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) {
    e.target.value = digits;
  } else if (digits.length <= 6) {
    e.target.value = digits.slice(0, 3) + '-' + digits.slice(3);
  } else {
    e.target.value = digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
  }
});

//address line 1 validation - changed getElementById to showError to enable shake animation
function validateAddress1(){
  const address1 = document.getElementById("address1").value; 

  if(address1.length<2){
    showError("address1", "Address must be at least 2 character"); 
    return false; 
  }
  if(address1.length>30){
    showError("address1", "Address too long"); 
    return false; 
  }
  document.getElementById("address1-error").innerHTML=""; 
  return true; 
}

//address line 2 validation - changed getElementById to showError to enable shake animation
function validateAddress2(){
  const address2 = document.getElementById("address2").value; 

  if(address2.length>30){
    showError("address2", "Address too long"); 
    return false; 
  }
  document.getElementById("address2-error").innerHTML=""; 
  return true; 
}

//City validation - changed getElementById to showError to enable shake animation
function validateCity(){
  const city = document.getElementById("City").value.trim(); 

  if(!city){
    showError("City", "Please enter a valid ZIP code first");
    return false;
    } else { 
      document.getElementById("city-error").innerHTML=""; 
      return true; 
    }
}

//state validation - changed getElementById to showError to enable shake animation
function validateState(){
    const state = document.getElementById("state").value.trim(); 
    
    if(!state){
        showError("state", "Please enter a valid ZIP code first"); 
        return false; 
    }
    document.getElementById("state-error").innerHTML=""; 
    return true; 
}


//User ID and Password Enhancement
function validateUid() {
    const uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        showError("uid", "User ID can't be blank");
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        showError("uid", "User ID can't start with a number");
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        showError("uid", "User ID can only have letters, numbers, underscores, and dashes");
        return false;
    } else if (uid.length < 5) {
        showError("uid", "User ID must be at least 5 characters");
        return false;
    } else if (uid.length > 20) {
        showError("uid", "User ID can't exceed 20 characters");
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

//validate password: 
function validatePword() {
  const pword = document.getElementById('pword').value;
  const uid = document.getElementById('uid').value;
  const errorMessages = [];
  
  if (pword.length === 0){
    document.getElementById('msg1').innerHTML = "Password can't be blank"; 
    document.getElementById('msg2').innerHTML = ""; 
    document.getElementById('msg3').innerHTML = ""; 
    document.getElementById('msg4').innerHTML = ""; 
    return false; 
  }

  if (!pword.match(/[a-z]/)) errorMessages.push("Enter at least one lowercase letter");
  if (!pword.match(/[A-Z]/)) errorMessages.push("Enter at least one uppercase letter");
  if (!pword.match(/[0-9]/)) errorMessages.push("Enter at least one number");
  if (!pword.match(/[!@#$%&*\-_\.+()]/)) errorMessages.push("Enter at least one special character");
  if (pword.length < 8) errorMessages.push("Password must be at least 8 characters"); 
  if (uid && pword.toLowerCase().includes(uid.toLowerCase())) errorMessages.push("Password can't contain user ID"); 
  
  document.getElementById('msg1').innerHTML=errorMessages[0] || ""; 
  document.getElementById('msg2').innerHTML=errorMessages[1] || ""; 
  document.getElementById('msg3').innerHTML=errorMessages[2] || ""; 
  document.getElementById('msg4').innerHTML=errorMessages[3] || ""; 

  return errorMessages.length ===0; 
}

//Confirming password validation
function confirmPword() {
    const pword1 = document.getElementById("pword").value;
    const pword2 = document.getElementById("pword2").value;

    if(pword2.length===0){
      document.getElementById("pword2-error").innerHTML=""; 
      return false; 
    }

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

//modal features - my attempt at the extra credit 
function checkAndDisplayData() {
    let valid = true;

    if(!validateFname()) valid = false;
    if(!validateLname()) valid = false;
    if(!validateDOB()) valid = false;
    if(!validateSsn()) valid = false;
    if(!validateAddress1()) valid = false;
    if(!validateAddress2()) valid = false;
    if(!validateCity()) valid = false;
    if(!validateState()) valid = false;
    if(!validateZipcode()) valid = false;
    if(!validateEmail()) valid = false;
    if(!validatePhone()) valid = false;
    if(!validateUid()) valid = false;
    if(!validatePword()) valid = false;
    if(!confirmPword()) valid = false;

    if(!valid) {
      alert("Please fix all errors before submitting."); 
      return; 
    }
    displayModalData(valid); 
}

//extra credit 1, modal features to replace 'submit' button
function displayModalData(valid) {
    const formcontent = document.getElementById("signup"); 
    let modalContent = ""; 

    if(!valid) {
      modalContent += "<p style='color: red; text-align: center; font-weight: bold;'>Please take another look before proceeding.</p>";
    }
    
    modalContent += "<table class='output'><tr><th colspan='2'>Your information:</th></tr>"; 

    for(let i=0; i<formcontent.length; i++){
      if(formcontent.elements[i].value !== ""){
        switch(formcontent.elements[i].type){
          case "checkbox":
            if(formcontent.elements[i].checked) {
              modalContent += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`; 
            }
            break;
          case "radio":
            if (formcontent.elements[i].checked) {
                modalContent += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
            break;
          case "password":
              modalContent += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>********</td></tr>`;
              break;
          case "button":
          case "submit":
          case "reset":
              break;
          default:
              modalContent += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
        }
      }
    }
    modalContent += "</table>";
    document.getElementById("modal-body").innerHTML = modalContent;
    document.getElementById("review-modal").style.display = "block";
    
    if (valid) {
        document.getElementById("modal-submit-btn").disabled = false;
    } else {
        document.getElementById("modal-submit-btn").disabled = true;
    }
}

//closing the modal - extra cred feat
function closeModal() {
  document.getElementById("review-modal").style.display="none"; 
}

//submitting the form - extra cred feat
function submitForm(){
  document.getElementById("signup").submit(); 
}

//setting cookies
function setCookie(name, cvalue, expiryHours){
  var day = new Date(); 
  day.setTime(day.getTime() + (expiryHours * 60 * 60 * 1000)); 
  var expires = "expires=" + day.toUTCString(); 
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/"; 
}

//getting cookies
function getCookie(name) {
    var cookieName = name + "="; 
    var cookies = document.cookie.split(';'); 

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim(); 
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length); 
        }
    }
    return ""; 
}

//deleting cookies
function deleteAllCookies(){
  document.cookie.split(";").forEach(function (cookie){
    let eqPos = cookie.indexOf("="); 
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie=name+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;"; 
  }); 
}

function deleteCookie(name){
  document.cookie=name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;"; 
}

//checking for returning users
function checkReturningUser() {
    const savedFirstName = getCookie("userFirstName");
    
    if (savedFirstName && savedFirstName !== "") {
        document.getElementById("welcome1").innerHTML = `Welcome back, ${savedFirstName}!`;
        document.getElementById("welcome2").innerHTML = "We've saved your information.";
        
        document.getElementById("fname").value = savedFirstName;
        
        document.getElementById("new-user-option").style.display = "block";
        document.getElementById("stored-name").innerHTML = savedFirstName;
        
        document.getElementById("remember-me").checked = true;
    } else {
        document.getElementById("welcome1").innerHTML = "Welcome, new user!";
        document.getElementById("welcome2").innerHTML = "Please fill out the form below.";
        document.getElementById("new-user-option").style.display = "none";
    }
}

function setupNotMeCheckbox() {
    const notMeCheckbox = document.getElementById("not-me-checkbox");
    if (notMeCheckbox) {
        notMeCheckbox.addEventListener("change", function() {
            if (this.checked) {
                deleteAllCookies();
                localStorage.clear();
                document.getElementById("signup").reset();
                document.getElementById("fname").value = "";
                document.getElementById("remember-me").checked = false;
                document.getElementById("welcome1").innerHTML = "Welcome, new user!";
                document.getElementById("welcome2").innerHTML = "Please fill out the form below.";
                document.getElementById("new-user-option").style.display = "none";
                this.checked = false;
            }
        });
    }
}

function setupRememberMeCheckbox() {
    const rememberMeCheckbox = document.getElementById("remember-me");
    rememberMeCheckbox.addEventListener("change", function() {
        if (!this.checked) {
            deleteAllCookies();
            localStorage.clear();
        } else {
            const firstName = document.getElementById("fname").value.trim();
            if (firstName !== "") setCookie("userFirstName", firstName, 48);
        }
    });
}

function setupFirstNameSaving() {
    const fnameInput = document.getElementById("fname");
    const rememberMeCheckbox = document.getElementById("remember-me");
    
    fnameInput.addEventListener("blur", function() {
        if (rememberMeCheckbox.checked) {
            const firstName = this.value.trim();
            if (firstName !== "" && validateFname()) {
                setCookie("userFirstName", firstName, 48); // 48 hours
                console.log("First name saved to cookie: " + firstName);
            }
        }
    });
}

//DOM event listener - added some new lines to assist with capslock detection
document.addEventListener("DOMContentLoaded", function() {
    checkReturningUser();
    loadFromLocalStorage();
    setupNotMeCheckbox();
    setupRememberMeCheckbox();
    setupFirstNameSaving();
    setupAutoSave(); 
    initHelpSections(); 

    window.addEventListener('scroll', updateScrollProgress); 

    const formInputs = document.querySelectorAll('#signup input, #signup select, #signup textarea'); 
    formInputs.forEach(input => {
      input.addEventListener('change', updateFormProgress); 
      input.addEventListener('blur', updateFormProgress);  
    }); 
    updateFormProgress(); 

    const passwordFields = document.querySelectorAll('input[type="password"]'); 
    passwordFields.forEach(field=>{
      field.addEventListener('keyup', detectCapsLock); 
      field.addEventListener('keydown', detectCapsLock); 
    }); 
});

function saveToLocalStorage(fieldId) {
    if (document.getElementById("remember-me").checked) {
        const field = document.getElementById(fieldId);
        if (field) {
            if (field.type === "checkbox") {
                localStorage.setItem(fieldId, field.checked);
            } else if (field.type === "radio" && field.checked) {
                localStorage.setItem(field.name, field.value);
            } else if (field.value.trim() !== "") {
                localStorage.setItem(fieldId, field.value);
            }
        }
    }
}

function loadFromLocalStorage() {
    if (getCookie("userFirstName")) {
        ["fname", "mini", "lname", "email", "phone", "address1", "address2", "City", "state", "Zipcode", "notes", "range"].forEach(id => {
            const value = localStorage.getItem(id);
            const field = document.getElementById(id);
            if (value && field) {
                field.value = value;
                if (id === "range") document.getElementById("range-slider").innerHTML = value;
            }
        });
        
        ["pgender", "vaccine"].forEach(name => {
            const value = localStorage.getItem(name);
            if (value) {
                const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
                if (radio) radio.checked = true;
            }
        });
        
        ["history-fever", "history-coldsweats", "history-vomitting", "history-diarrhea", "history-covid19"].forEach(id => {
            if (localStorage.getItem(id) === "true") {
                document.getElementById(id).checked = true;
            }
        });
    }
}

function setupAutoSave() {
    document.querySelectorAll('input, select, textarea').forEach(field => {
        const event = (field.type === "radio" || field.type === "checkbox" || field.tagName === "SELECT") ? "change" : "blur";
        field.addEventListener(event, () => saveToLocalStorage(field.id || field.name));
    });
}