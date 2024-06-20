/* 
 Name: Jake Messinger
 File: script.js for hw
 Date Created: 2023-05-01
 Date Updated: 2023-05-01
 Purpose: Cookies and stuff
 
*/
// Set up some starting points
function setup()
  {
    let firstnameflag;
    let middleflag;
    /* lastnameflag addr1flag password1flag password2flag;  */
("setting up for the first run...");
    checkCookie();
    getdata1();
    
  }
/* 
This subroutine simply retrieves the data names and entered data from the form.
This code doesn't require that you know how many elements are in your form OR the names of the variables. 
*/
function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(you started over)";
}
 
function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            // console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            //if (formcontents.elements[i].value !="") {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
        

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}


/* function getrangedata() {
  var slider = document.getElementById("budget");
  document.getElementById("rangedisplay").value = slider;
}
*/

/* This version gets the data from the form explicitely by field name. 
function getdata2()
*/

/* These are the subroutines to check inidivudial fields  */
function checkfirstname()
    {
        x = document.getElementById("firstname").value;
        firstnameflag=1;  // 1 = set error ON
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";
              firstnameflag=0; // 0 = set error OFF
              setCookie("fname", x , 1);
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
        checkflags();
    }
function checkmiddle()
    {  
        x = document.getElementById("middleinit").value;
        middleflag=0;   // Not required to set error flag off
        if( x.length>0) { 
              if (x.match(/[a-zA-Z ]/)) {
              document.getElementById("name_message").innerHTML = "";  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              middleflag=1;  // Turn on error flag
              }
        } 
        checkflags();
    }
function checklastname()
    {
        x = document.getElementById("lastname").value;
        lastnameflag=1;  // turn on the error since required
        if( x.length<2) { 
              document.getElementById("name_message").innerHTML = "Invalid name... too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_message").innerHTML = "";
              lastnameflag=0; // turn off error flag  
            }
            else  {
              document.getElementById("name_message").innerHTML = "Invalid characters in name.";
              error_flag = 1;
              }
        }
        checkflags();
    }

// Deal with password    
function passwordentry() 
    {
    password1flag=0; // turn OFF password1 flag to start
    var passwordoutput;
    var passwordinput = document.getElementById("password1").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter At least 1 lower case letter";
      error_flag = 1;
      password1flag=1; // Turn on error in password1
    } else {
      passwordoutput = "Got at least 1 lower case letter";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
      password1flag=1; // Turn on error in password1
    } else {
      passwordoutput = "Got at least 1 upper case letter";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "EnteraAt least 1 number";
    error_flag = 1;
    password1flag=1; // Turn on error in password1
    } else {
    passwordoutput = "Got at least 1 number";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter At least 1 special character";
    error_flag = 1;
    password1flag=1; // Turn on error in password1
    } else {
    passwordoutput = "Got at least 1 special character";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters";
      error_flag = 1;
      password1flag=1; // Turn on error in password1
  } else {
      passwordoutput = "Password is now 8 or more characters";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;
  checkflags();
  }

// Check that both passwords match
function checkpassword2() {
    x=document.getElementById("password1").value;
    y=document.getElementById("password2").value;
    password2flag = 1; //turn on password2 flag
    if ( x.value!="" && x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "Passwords match!";
      password2flag=0; //Turn off Password2 error flag
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
      checkflags();
    }
// Check other fields
function checkaddr1() {
    x = document.getElementById("addr1").value;
    addr1flag=1; // addr1 required so turn on error flag
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("addr1_message").innerHTML = "Enter something on address line";  
      error_flag = 1; 
      }
      else { 
          document.getElementById("addr1_message").innerHTML = ""; 
          addr1flag=0; 
      }
    checkflags();
}
function checkaddr2() {}

function checkcity() {
         if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
              document.getElementById("city_message").innerHTML = "";  
            }
            else  {
              document.getElementById("city_message").innerHTML = "Invalid characters in City name.";
              error_flag = 1;
              }
}
function checkstate() {
        z=document.getElementById("state").value;
        if(z=="") { 
              document.getElementById("state_message").innerHTML = "Please choose a state";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_message").innerHTML = ""; 
        }
}
//    if (document.getElementById("state").length = 0 ) {  error_flag = 1; }

// Check to see if Submit button can be turned on.
function checkflags() {
    if (firstnameflag+middleflag+lastnameflag+addr1flag+password1flag+password2flag == 0)
      {
         document.getElementById("submit").disabled = false;
      }
}

function fixphone() {
    const inputField = document.getElementById('phone');
    const formattedInputValue = formatPhone(inputField.value);
    inputField.value = formattedInputValue;
  }

function formatPhone(value) {
    if (!value) return value;
    const phone = value.replace(/[^\d]/g, '');
    const phoneLength = phone.length;
  
    if (phoneLength < 3) return phone;
  
    if (phoneLength < 6) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    }
  
    if (phoneLength < 10) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    }
  
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  }

// Check everything
    function checkform() 
      {
        error_flag = "0";
        checkfirstname();
        checkmiddle();
        checklastname();
        checkaddr1();
        checkaddr2();
        // etc...
        passwordentry();
        console.log("Error flag: "+error_flag);
        if (error_flag == "1")
        {
          alert("Please fix the indicated errors!");
        }
        else {
          document.getElementById("submit").disabled = false;
        }
      }


    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() 
  {
    let message;
    let fname = getCookie("fname");
    if (fname != "") 
      {
        message = "Welcome back "+ fname + ".\nPress OK to confirm or Cancel if this isn't "+fname+".";
        if (confirm(message)) 
          {
           document.getElementById("firstname").setAttribute('value',fname);
          }
        else
          {
            setCookie("fname", "" , 0);  
          } 
      }
  }
    /* End of document: homework4.js */