  function updateDateTime() 
{
    var now = new Date();
    var dateTimeString = "Today is: " + now.toLocaleString();
    document.getElementById('datetime').innerHTML = dateTimeString;
        
    //this updates the time every second
    setInterval(updateDateTime, 1000);
    //call to display date and time immediately
    updateDateTime();
}
window.onload = function() {
    updateDateTime();
};
function fnameValidation()
{
    fname = document.getElementById('fname').value;
    var namePattern = /^[A-Za-z'-]+$/;

    if(fname == '')
    {
        document.getElementById("ferror").innerHTML = "First name must not be empty.";
        return false;
    } 
    else if(fname!= '')
    {
        if(!fname.match(namePattern))
        {
            document.getElementById("ferror").innerHTML = "Letters, dashes, and apostrophes only";
            return false;
        }
        else if(fname.length < 1)
        {
            document.getElementById("ferror").innerHTML = "First name must contain at least 1 character";
            return false;
        }
        else if(fname.length > 30)
        {
        document.getElementById("ferror").innerHTML = "First name must not exceed 30 characters";
        return false;
        } 
        else
        {
        document.getElementById("ferror").innerHTML = "";
        return true; 
        }
    }
}
function midinitialValidation()
{
    midinitial = document.getElementById('midinitial').value;
    var initialPattern = /^[A-Z]/;

    if(midinitial != '')
    {
        if(!midinitial.match(initialPattern))
        {
            document.getElementById("midinitial-error").innerHTML = "Upper letters only";
            return false;
        }
        else if (midinitial.length > 1)
        {
            document.getElementById("midinitial-error").innerHTML = "Must not exceed 1 character";
            return false;
        }
        else
        {
            document.getElementById("midinitial-error").innerHTML = "";
            return true;
        }
    }
}
function lnameValidation() 
{
    lname = document.getElementById('lname').value;
     var lnamePattern = /^[A-Za-z'-]+$/;
 
    if (lname == '')
    {
         document.getElementById("lerror").innerHTML = "Last Name must not be left blank!";
         return false;
    }
    else if (lname!= '') 
    {
        if (!lname.match(lnamePattern)) 
        {
            document.getElementById("lerror").innerHTML = "Letters, apostrophes, and dashes only!";
            return false;
        } 
        else if (lname.length < 1) 
        {
            document.getElementById("lerror").innerHTML = "Last name must contain at least 1 charactrer!";
            return false;
        } 
        else if (lname.length > 30) 
        {
            document.getElementById("lerror").innerHTML = "Last name must be less than 30!";
            return false;
        }
         else 
         {
            document.getElementById("lerror").innerHTML = "";
            return true;
        }
    }
}
function validateDate()
{
    dateInput = document.getElementById('dob');
    var date = new Date(dateInput.value);
    var maxAge = new Date().setFullYear(new Date().getFullYear() - 120);
    var error = document.getElementById("dateerror");

    if (date > new Date() || date < new Date(maxAge))
    {
        error.innerHTML = "Please enter a date that is not in the future or more than 120 years ago";
        dateInput.value = '';
        return false;
    }
    else 
    {
        error.innerHTML = '';
        return true;
    }
}
function phoneValidation()
{
    phone = document.getElementById('phone').value;
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    var error = document.getElementById('phoneerror');

    if(phone =='')
    {
        error.innerHTML = "Field must not be emtpy.";
        return false;
    } 
    else if(!phone.match(phonePattern))
    {
        error.innerHTML = "Must match the following format: xxx-xxx-xxxx. Digits only.";
        return false;
    } 
    else 
    {
        error.innerHTML = '';
        return true;
    }
}

function validateZipCode() 
{
    const zipInput = document.getElementById("zipcode").value;
    const zipRegex = /^\d{5}(-\d{4})?$/;
  
    return zipRegex.test(zipInput);
}
  const zipInput = document.getElementById("zipcode");
  const zipError = document.getElementById("ziperror");
  
  zipInput.addEventListener("input", () => {
    let zipValue = zipInput.value.trim();
    const isValidZip = validateZipCode(zipValue);
    if (isValidZip) 
    {
      zipValue = zipValue.slice(0, 5);
      zipInput.value = zipValue;
  
      zipInput.setCustomValidity("");
      zipError.innerHTML = "";
    }
    else 
    {
      zipInput.setCustomValidity(
        "Must enter a valid zip code (5 digits i.e. 12345).");
      zipError.innerHTML =
        "Must enter a valid zip code (5 digits i.e. 12345).";
    }
  });
function emailValidation() 
{
    email = document.getElementById('email').value;
    var X = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if (email == '') 
    {
        document.getElementById("emailerror").innerHTML = "Email must be entered!";
        return false;
    } 
    else if (!email.match(emailpattern)) 
    {
        document.getElementById("emailerror").innerHTML = "Email address must be valid!";
        return false;
    } 
    else 
    {
        document.getElementById("emailerror").innerHTML = "";
        return true
    }
}
function sliderValidation(x)
{
    document.getElementById('slidervalue').innerHTML = x;
}
function userValidation(){
    user = document.getElementById('user').value;
    var userPattern = /^[^0-9]/;
    var unamePattern = /^\S+[A-Za-z_-][A-Za-z0-9_-]+$/;
    var error = document.getElementById('usererror');

    if(user == '')
    {
        error.innerHTML = "Field must not be blank.";
        return false;

    }
    else if(user!='')
    {
        if(!user.match(userPattern))
        {
            error.innerHTML = "Username must not start with a number.";
            return false;
        }
        else if(!user.match(unamePattern))
        {
            error.innerHTML = "Username must not include spaces or speical characters.";
            return false;
        } 
        else if (user.length < 5) 
        {
            error.innerHTML = "Username must be at least 5 characters.";
            return false;
        } 
        else if(user.length > 30) 
        {
            error.innerHTML = "Username must not exceed 30 characters.";
            return false;
        }
        else 
        {
            error.innerHTML = '';
            return true;
        }
    }
}
function passValidation()
{
    pass = document.getElementById('pass').value;
    user = document.getElementById('user').value;
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    var error = document.getElementById('passerror');

    if(pass == '')
    {
        error.innerHTML = "Field must not be empty";
        return false;

    }
    else if (pass != '')
    {
        if(!pass.match(passPattern)){
            error.innerHTML = "Password must contain 1 uppercase, 1 lowercase, 1 special character, and 1 digit.";
            return false;

        }else if (pass == user){
             error.innerHTML = "Password must not match UserID.";
             return false;

        } else if (pass.length < 8){
            error.innerHTML = "Password must be at least 8 characters.";
            return false;
        } else if (pass.length > 30){
            error.innerHTML = "Password must not exceedd 30 characters.";

        } else {
            error.innerHTML = "";
            return true;
        }
    }
}
function pass2Validation() {
    pass = document.getElementById("pass").value;
    pass2 = document.getElementById("pass2").value;

    if (!pass2) {
      document.getElementById("pass2error").innerHTML =
        "Field must not be empty";
      return false;
    }

    if (pass2 !== pass) {
      document.getElementById("pass2error").innerHTML =
        "Passwords must be the same.";
      return false;
    } else if (pass2 == pass) {
      document.getElementById("pass2error").innerHTML = "";
      return true;
    }
  }
const validations = [
    fnameValidation,
    minitialValidation,
    lnameValidation,
    socialValidation,
    validateZipCode,
    emailValidation,
    validateDate,
    userValidation,
    phoneValidation,
    passValidation,
    pass2Validation,
  ];
function sliderValidation(x)
{
    document.getElementById('slidervalue').innerHTML = x;
}
function checkValidations() 
{
    for (let func of validations) 
    {
      console.log(func(), func.name)

        if (!func()) 
        {
            document.getElementById("suberror").innerHTML =
            "Must fix your fields and re-submit";
            return false;
        }
    }
    return true
function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        // Function to get the value of a cookie by its name
        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }

        // Function to initialize the "Remember Me" checkbox state based on the saved preference
        function initRememberMe() {
            var rememberMeCheckbox = document.getElementById("remember_me");
            var rememberMe = getCookie("remember_me");
            if (rememberMe === "true") {
                rememberMeCheckbox.checked = true;
            }
        }

        // Function to handle the change event of the "Remember Me" checkbox
        function handleRememberMeChange() {
            var rememberMeCheckbox = document.getElementById("remember_me");
            setCookie("remember_me", rememberMeCheckbox.checked, 30); // Store the preference for 30 days
        }


// This add the sticky class to the footer when you reach its scroll position. It will remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    footer.classList.add("sticky");
  } else {
    footer.classList.remove("sticky");
  }
}
}