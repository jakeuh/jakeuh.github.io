  /*
 Name: Rohan Kalappa
 File: homework3.js
 Data created: 2023-04-14
 Date Updated: 2023-04-18
 Purpose: Validate form on the fly
 */
function removedata1(){
    document.getElementId("review1").innerHTML = "";
}
function review1() {
    var formcontents = document.getElementById("signup");
    var formoutput;
    var i;
    for (i=0; i < formcontents.length; i++) {
            if (formcontents.elements[i].value !="") {
                if (i==0) {
                    formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
                }
                datatype = formcontents[i].type;
                console.log(datatype);
                switch (datatype) {
                    case "checkbox":
                        if (formcontents.elements[i].checked) {
                          formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                          formoutput = formoutput +"<td align='right'>" + datatype + "</td>";
                          formoutput = formoutput +"<td class='outputdata'>Yes</td></tr>";
                        }
                    break;
                    case "radio":
                        //if (formcontents.elements[i].checked) {
                        //  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                        //  formoutput = formoutput +"<td align='right'>" + datatype + "</td>";
                        //  formoutput = formoutput +"<td class='outputdata'>" + formcontents.elements[i].value+"</td></tr>";
                        //}
                    break;
                    case "range":
                      break;
                    default:
                        formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                        formoutput = formoutput + "<td align='right'>"+ datatype + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
            }
    }
    if (formoutput.length>0) { 
        formoutput = formoutput + "</table>";
        document.getElementById("review1").innerHTML = formoutput;
    }
}
/* Gets individual validation data
*/

function validatefirstname()
{
 firstnametext = document.getElementById("firstname").value;
        if( firstnametext.length<2) { 
              document.getElementById("name_text").innerHTML = "Error: name too short."; 
              error_flag =1; 
        }
        else {
            if (firstnametext.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_text").innerHTML = "";  
            }
            else  {
              document.getElementById("name_text").innerHTML = "Invalid characters in name.";
              error_flag =1;
              }
        }
}
function validatelastname()
{
 lastnametext = document.getElementById("lastname").value;
        if( lastnametext.length<2) { 
              document.getElementById("name_text").innerHTML = "Error: name too short.";  
              error_flag =1;
        }
        else {
            if (lastnametext.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("name_text").innerHTML = "";  
            }
            else  {
              document.getElementById("name_text").innerHTML = "Invalid characters in name.";
              error_flag =1;
              }
        }
}
function validatemiddleinit()
{
     middleinittext = document.getElementById("middleinit").value;
        if( middleinittext.length>0) { 
              if (middleinittext.match(/[a-zA-Z ]/)) {
              document.getElementById("name_text").innerHTML = "";  
            }
            else  {
              document.getElementById("name_text").innerHTML = "Invalid characters in name.";
              error_flag =1;
              }
        }
}
function validateaddr1()
{
    addr1text = document.getElementById("addr1").value;
    if (addr1text.length < 2|| addr1text.length > 30 ) {  
      document.getElementById("addr1_text").innerHTML = "Enter characters on address line";  
      error_flag = 1; 
      }
      else { 
          document.getElementById("addr1_text").innerHTML = "";  
      }
}
function validateaddr2()
 {
     addr2text = document.getElementById("addr2").value;
      if (addr2text.length = 1|| addr2text.length > 30 ) {  
      document.getElementById("addr2_text").innerHTML = "Address length not valid";  
      error_flag = 1; 
      }
      else { 
          document.getElementById("addr2_text").innerHTML = "";  
      }
 }   
 function validatecity()
 {
     citytext = document.getElementById("city").value;
    if (citytext.length < 2|| citytext.length > 30 ) {  
      document.getElementById("city_text").innerHTML = "Enter characters for city";  
      error_flag = 1; 
      }
      else { 
          document.getElementById("city_text").innerHTML = "";  
      }
 }
 function validatestate()
 {
     statetext = document.getElementById("state").value;
        if(statetext=="") { 
              document.getElementById("state_text").innerHTML = "Please choose a state";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_text").innerHTML = ""; 
        }
 }
function validatezip()
{
      ziptext= document.getElementById("zip").value;
        if(!ziptext.match(/[0-9]{5}/)) {
              document.getElementById("zip_text").innerHTML = "Invalid zipcode";  
              error_flag = 1;
        }
        else {
           document.getElementById("zip_text").innerHTML = ""; 
        }
            
}
function validatephone()
{
      phonetext = document.getElementById("phone").value;
        if(!phonetext.match(/[0-9]{10}/)) {
             document.getElementById("phone_text").innerHTML = "Invalid phone #";  
              error_flag = 1;
        }
        else {
           document.getElementById("phone_text").innerHTML = "";   
        }
}
function validateemail()
{
      emailtext = document.getElementById("email").value;
        if(!emailtext.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
                 document.getElementById("email_text").innerHTML = "Invalid email address";  
              error_flag = 1; 
        }
        else {
            document.getElementById("email_text").innerHTML = ""; 
        }
}
function validateuserid()
{
      console.log("running")
      useridtext = document.getElementById("userid").value;
        if(!useridtext.match(/[A-Za-z]+[A-Za-z0-9-_]{4,19}/)) {
                 document.getElementById("userid_text").innerHTML = "Invalid User ID";  
              error_flag = 1; 
        }
        else {
            document.getElementById("userid_text").innerHTML = ""; 
        }
}
function validatesocialsecurity()
{
      socialsecuritytext = document.getElementById("socialsecurity").value;
      socialsecuritytext = socialsecuritytext.replace(/\D/g, '');
	socialsecuritytext = socialsecuritytext.replace(/^(\d{3})/, '$1-');
	socialsecuritytext = socialsecuritytext.replace(/-(\d{2})/, '-$1-');
	socialsecuritytext = socialsecuritytext.replace(/(\d)-(\d{4}).*/, '$1-$2');
	document.getElementById("socialsecurity").value = socialsecuritytext;
}
function enterpassword() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("passwordversion1").value;
    console.log(passwordinput);
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter At least 1 lower case letter";
      error_flag = 1;
    } else {
      passwordoutput = "Got at least 1 lower case letter";
    }
    document.getElementById("password_text1").innerHTML = passwordoutput;
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else {
      passwordoutput = "Got at least 1 upper case letter";
    }
    document.getElementById("password_text2").innerHTML = passwordoutput;
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter At least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 number";
    }
    document.getElementById("password_text3").innerHTML = passwordoutput;
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter At least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = "Got at least 1 special character";
    }
    document.getElementById("password_text4").innerHTML = passwordoutput;
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = "Password is now 8 or more characters";
  }
  document.getElementById("password_text5").innerHTML = passwordoutput;
  }
function checkpassword2() {
    x=document.getElementById("passwordversion1").value;
    y=document.getElementById("passwordversion2").value;
    if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "Passwords match!";
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }
    function checkform() 
      {
        error_flag = 0;
        validatefirstname();
        validatemiddleinit();
        validatelastname();
        validateaddr1();
        validateaddr2();
        validatecity();
        //validatestate();
        //validatezip();
        validatephone();
        validateemail();
        validateuserid();
        validatesocialsecurity();
        enterpassword();
        checkpassword2();
        
        console.log("Error flag: "+error_flag);
        if (error_flag == "1")
        {
          alert("Please fix the indicated errors!");
        }
        else {
          document.getElementById("submit").disabled = false;
        }
      }
