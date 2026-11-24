 /* Place your JavaScript in this file */
 <!--
Program name: patient.form.js
Author: Enrique Delgado
Date Created: 9/27/26
Version: 1.0
Description: Patient Registration Form for whenever a patient visits the clinic.
-->

const password= document.querySelector('input[name="password"]');
const confirmPassword= document.querySelector('input[name="confirmPassword"]');
confirmPassword.addEventListener('input',() =>{
    if (confirmPassword.value !== password.value){
        confirmPassword.style.border="4px solid red";
    }else {
        confirmPassword.style.border ="4px solid green"
    }
    });

 const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
});
